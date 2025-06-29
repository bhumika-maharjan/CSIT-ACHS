import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EsewaFailed() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const encodedData = queryParams.get('data');
    
    if (!encodedData) {
      setError('Payment data not found');
      return;
    }
    
    try {
      // Decode the base64 data
      const decodedData = JSON.parse(atob(encodedData));
      console.log("Decoded eSewa data:", decodedData);
      
      // No need to verify a failed payment with backend
      setError(`Payment failed: ${decodedData.status || 'Unknown reason'}`);
    } catch (err) {
      setError('Failed to parse payment data');
      console.error("Error parsing eSewa response:", err);
    }
  }, [location]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl">Processing payment result...</p>
    </div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Payment Failed</h1>
        <p className="text-gray-600 text-center mb-6">{error || 'Your payment could not be processed.'}</p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate('/shop/checkout')}
          >
            Try Again
          </button>
          <button 
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            onClick={() => navigate('/shop/home')}
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default EsewaFailed;