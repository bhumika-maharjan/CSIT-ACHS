const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  cartId: {
    type: String,
    required: true
  },
  cartItems: [
    {
      productId: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  addressInfo: {
    addressId: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    notes: {
      type: String
    }
  },
  orderStatus: {
    type: String,
    required: true,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['esewa', 'cod'],
    default: 'cod'
  },
  paymentStatus: {
    type: String,
    required: true,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  totalAmount: {
    type: Number,
    required: true
  },
  taxAmount: {
    type: Number,
    default: 0
  },
  finalAmount: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  orderUpdateDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  paymentId: {
    type: String
  },
  payerId: {
    type: String
  }
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;