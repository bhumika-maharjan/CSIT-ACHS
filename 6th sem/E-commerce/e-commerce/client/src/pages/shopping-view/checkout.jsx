import Address from "@/components/shopping-view/address";
import img from "../../assets/hunx.avif";
import { useDispatch, useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";

import { useState, useEffect, useRef } from "react";
import { createNewOrder } from "@/store/shop/order-slice";
import { useToast } from "@/components/ui/use-toast";

function ShoppingCheckout() {
  const { cartItems } = useSelector(state => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { orderId, signature } = useSelector((state) => state.shopOrder);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [isPaymentStart, setIsPaymentStart] = useState(false);
  const formRef = useRef(null);
  const { toast } = useToast();
  const dispatch = useDispatch();
  
  // Calculate total amount from cart items
  const calculateTotalAmount = () => {
    return cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;
  };
  
  const totalCartAmount = calculateTotalAmount();
  
  // Tax calculation (assuming 10% tax)
  const taxAmount = totalCartAmount * 0.1;
  const finalAmount = totalCartAmount + taxAmount;

  // Submit the form once we have the orderId and signature
  useEffect(() => {
    if (orderId && signature && formRef.current && isPaymentStart) {
      console.log("Submitting eSewa payment form with orderId:", orderId);
      formRef.current.submit();
    }
  }, [orderId, signature, isPaymentStart]);

  function handleInitiateEsewaPayment() {

    if (cartItems.length === 0) {
      toast({
        title: "Your cart is empty. Please add items to proceed",
        variant: "destructive",
      });

      return;
    }
    if (!currentSelectedAddress) {
      toast({
        title: 'Please select one address to proceed.',
        variant : 'destructive'
      })
      return;
    }
    
    setIsPaymentStart(true);
    
    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((singleCartItem) => ({
        productId: singleCartItem?.productId,
        title: singleCartItem?.title,
        image: singleCartItem?.image,
        price:
          singleCartItem?.salePrice > 0
            ? singleCartItem?.salePrice
            : singleCartItem?.price,
        quantity: singleCartItem?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: "esewa",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      taxAmount: taxAmount,
      finalAmount: finalAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
    };

    dispatch(createNewOrder(orderData))
      .catch(error => {
        setIsPaymentStart(false);
        console.error("Error creating order:", error);
      });
  }
    
  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover object-center" alt="Banner" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address setCurrentSelectedAddress={setCurrentSelectedAddress}/>
        <div className="flex flex-col gap-4">
          {(cartItems?.items || []).length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent key={item.id} cartItem={item} />
              ))
            : <p>No items in cart</p>}

          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {totalCartAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>Rs. {taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">Rs. {finalAmount.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Hidden eSewa payment form */}
          {orderId && (
            <form 
              ref={formRef}
              action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" 
              method="POST"
              className="hidden"
            >
              <input type="hidden" name="amount" value={totalCartAmount.toFixed(2)} />
              <input type="hidden" name="tax_amount" value={taxAmount.toFixed(2)} />
              <input type="hidden" name="total_amount" value={finalAmount.toFixed(2)} />
              <input type="hidden" name="transaction_uuid" value={orderId} />
              <input type="hidden" name="product_code" value="EPAYTEST" />
              <input type="hidden" name="product_service_charge" value="0" />
              <input type="hidden" name="product_delivery_charge" value="0" />
              <input type="hidden" name="success_url" value="http://localhost:5173/shop/esewa-success" />
              <input type="hidden" name="failure_url" value="http://localhost:5173/shop/esewa-failed" />
              <input type="hidden" name="signed_field_names" value="total_amount,transaction_uuid,product_code" />
              <input type="hidden" name="signature" value={signature} />
            </form>
          )}
          
          <div className="mt-4 w-full">
            <Button 
              onClick={handleInitiateEsewaPayment} 
              className="mt-4 w-full "
              disabled={isPaymentStart}
            >
              {isPaymentStart ? "Processing..." : "Checkout with eSewa"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;