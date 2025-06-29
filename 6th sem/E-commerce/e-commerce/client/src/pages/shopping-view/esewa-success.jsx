import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { captureEsewaPayment } from '@/store/shop/order-slice';
import { fetchCartItems } from '@/store/shop/cart-slice';
// import { clearCart } from '@/store/shop/cart-slice';

function EsewaSuccess() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const { orderDetails, orderProcessing } = useSelector(state => state.shopOrder);
  const { user } = useSelector(state => state.auth);
  
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (orderDetails && !orderProcessing) {
      // Optionally fetch cart items to ensure UI is in sync
      // dispatch(clearCart());
    }
  }, [orderDetails, orderProcessing, dispatch]);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const encodedData = queryParams.get('data');
    
    if (!encodedData) {
      setError('Payment data not found');
      setLoading(false);
      return;
    }
    
    try {
      // Decode the base64 data
      const decodedData = JSON.parse(atob(encodedData));
      console.log("Decoded eSewa data:", decodedData);
      setPaymentData(decodedData);
      
      const {
        transaction_uuid,  // This is your order ID
        transaction_code,  // Reference ID from eSewa
        status,
        total_amount
      } = decodedData;
      
      if (!transaction_uuid) {
        setError('Order ID not found in response');
        setLoading(false);
        return;
      }
      // dispatch(clearCart());
      
      // First verify payment with backend
      axios.get(`http://localhost:5000/api/shop/order/verify-payment`, {
        params: {
          transaction_uuid,
          reference_id: transaction_code,
          status,
          total_amount
        }
      })
      .then(response => {
        if (response.data.success) {
          // Then capture the payment (finalize order)
          dispatch(captureEsewaPayment({
            transaction_uuid,
            reference_id: transaction_code
          }));
        } else {
          setError('Payment verification failed');
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to verify payment: ' + (err.response?.data?.message || err.message));
        setLoading(false);
        console.error("Payment verification error:", err);
      });
    } catch (err) {
      setError('Failed to parse payment data');
      setLoading(false);
      console.error("Error parsing eSewa response:", err);
    }
  }, [location, dispatch]);

  if (loading || orderProcessing) {
    return <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl">Processing your payment...</p>
    </div>;
  }

  if (error) {
    return <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-xl text-red-500">{error}</p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate('/shop/home')}
      >
        Back to Shop
      </button>
    </div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Payment Successful!</h1>
        <p className="text-gray-600 text-center mb-6">Your order has been confirmed and is being processed.</p>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Order ID:</span>
            <span>{paymentData?.transaction_uuid || orderDetails?._id}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Transaction Code:</span>
            <span>{paymentData?.transaction_code || orderDetails?.paymentId}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Total Amount:</span>
            <span>Rs. {paymentData?.total_amount || orderDetails?.finalAmount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span className="text-green-500">{orderDetails?.orderStatus || "Confirmed"}</span>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate('/shop/account')}
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default EsewaSuccess;