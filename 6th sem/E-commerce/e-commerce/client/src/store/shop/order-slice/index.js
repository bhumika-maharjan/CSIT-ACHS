import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  approvalURL: null,
  isLoading: false,
  orderProcessing: false,
  orderId: null,
  signature: null,
  orderList: [],
  orderDetails: null,
};

export const createNewOrder = createAsyncThunk(
  "order/createNewOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      console.log("Sending order data:", orderData);
      const response = await axios.post(
        "http://localhost:5000/api/shop/order/create",
        orderData
      );
      console.log("API response received:", response.data);
      return response.data;
    } catch (error) {
      console.error("Order creation error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const captureEsewaPayment = createAsyncThunk(
  "order/captureEsewaPayment",
  async ({ transaction_uuid, reference_id }, { dispatch, getState, rejectWithValue }) => {
    try {
      console.log("Capturing eSewa payment:", {
        orderId: transaction_uuid,
        paymentId: reference_id,
      });
      const userId = getState().auth.user?.id;
      const response = await axios.post(
        "http://localhost:5000/api/shop/order/capture",
        {
          orderId: transaction_uuid,
          paymentId: reference_id,
          payerId: "esewa-user" // For eSewa, this field might not be needed
        }
      );
      
      // console.log("Capture response received:", response.data);
      // dispatch(clearCart());

      // if (userId) {
      //   dispatch(clearCartOnServer(userId))
      //     .catch(err => console.error("Error clearing cart on server:", err));
      // }

      return response.data;
    } catch (error) {
      console.error("Payment capture error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllOrdersByUserId = createAsyncThunk(
  "/order/getAllOrdersByUserId",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:5000/api/shop/order/list/${userId}`
    );

    return response.data;
  }
);

export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/shop/order/details/${id}`
    );

    return response.data;
  }
);

const shoppingOrderSlice = createSlice({
  name: "shoppingOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("Setting orderId in state:", action.payload.orderId);
        state.orderId = action.payload.orderId;
        state.signature = action.payload.signature;
        sessionStorage.setItem(
          "currentOrderId",
          action.payload.orderId
        );
      })
      .addCase(createNewOrder.rejected, (state) => {
        state.isLoading = false;
        state.orderId = null;
        state.signature = null;
      })
      .addCase(captureEsewaPayment.pending, (state) => {
        state.orderProcessing = true;
      })
      .addCase(captureEsewaPayment.fulfilled, (state, action) => {
        state.orderProcessing = false;
        state.orderDetails = action.payload.data;
        state.orderId = null;
        state.signature = null;
        sessionStorage.removeItem("currentOrderId");
      })
      .addCase(captureEsewaPayment.rejected, (state) => {
        state.orderProcessing = false;
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetails.rejected, (state) => {
        state.isLoading = false;
      }).addCase(getAllOrdersByUserId.pending, (state) => {
        state.isLoading = true;
      }).addCase(getAllOrdersByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      }).addCase(getAllOrdersByUserId.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      });
  },
});

export const { resetOrderDetails } = shoppingOrderSlice.actions;
export default shoppingOrderSlice.reducer;