const esewa = require('../../helpers/esewa');
const Order = require("../../models/Order");
const crypto = require('crypto');
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

// Function to generate the signature for eSewa
const generateSignature = (totalAmount, transactionId, productCode, secretKey) => {
  const stringToSign = `total_amount=${totalAmount},transaction_uuid=${transactionId},product_code=${productCode}`;
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(stringToSign);
  return hmac.digest('base64');
};

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      taxAmount,
      finalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
      cartId,
    } = req.body;

    const newlyCreatedOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      taxAmount,
      finalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
    });

    await newlyCreatedOrder.save();
    
    // Generate the eSewa signature
    const orderId = newlyCreatedOrder._id.toString();
    const productCode = esewa.merchant_id;
    const signature = generateSignature(
      finalAmount.toFixed(2),
      orderId,
      productCode,
      esewa.secret_key
    );

    console.log("Order created with ID:", orderId);
    console.log("Generated signature:", signature);

    res.status(201).json({
      success: true,
      orderId: orderId,
      signature: signature,
    });
  } catch (e) {
    console.log("Error creating order:", e);
    res.status(500).json({
      success: false,
      message: 'Some error occurred during order creation'
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { transaction_uuid, reference_id, status, total_amount } = req.query;
    
    console.log("Payment verification request received:", req.query);
    
    // Verify successful payment status
    if (status !== 'COMPLETE') {
      return res.status(400).json({
        success: false,
        message: 'Payment failed or incomplete'
      });
    }
    
    // Find the order by transaction_uuid (which is our orderId)
    const order = await Order.findById(transaction_uuid);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    
    // Update order payment info but don't finalize yet
    // (that happens in capturePayment)
    order.paymentId = reference_id;
    
    await order.save();
    
    // Return success
    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      order
    });
  } catch (e) {
    console.log("Error verifying payment:", e);
    res.status(500).json({
      success: false,
      message: 'Error verifying payment'
    });
  }
};

const capturePayment = async (req, res) => {
  try {
    const { paymentId, payerId, orderId } = req.body;
    
    console.log("Capturing payment for order:", orderId);
    
    let order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order can not be found",
      });
    }

    // Update order status
    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";
    order.paymentId = paymentId || order.paymentId;
    order.payerId = payerId || order.payerId;

    // Update product inventory
    for (let item of order.cartItems) {
      let product = await Product.findById(item.productId);

      if (!product) {
        console.log(`Product not found: ${item.productId}`);
        continue;
      }

      // Check if we have enough inventory
      if (product.totalStock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Not enough stock for product: ${product.title}`,
        });
      }

      // Update inventory
      product.totalStock -= item.quantity;
      await product.save();
    }
    
    // Remove cart after successful order
    if (order.cartId) {
      try {
        const deletedCart = await Cart.findByIdAndDelete(order.cartId);
        console.log("Cart deleted:", deletedCart ? "Yes" : "No");
      } catch (cartError) {
        console.error("Error deleting cart:", cartError);
        // Continue with order processing even if cart deletion fails
      }
    }
    
    await order.save();
    
    res.status(200).json({
      success: true,
      message: "Order confirmed and payment captured",
      data: order,
    });
  } catch (e) {
    console.log("Error capturing payment:", e);
    res.status(500).json({
      success: false,
      message: 'Some error occurred during payment capture'
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
};