import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, productId, quantity }) => {
    const response = await axios.post(
      "http://localhost:5000/api/shop/cart/add",
      {
        userId,
        productId,
        quantity,
      }
    );

    return response.data;
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:5000/api/shop/cart/get/${userId}`
    );

    return response.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ userId, productId }) => {
    const response = await axios.delete(
      `http://localhost:5000/api/shop/cart/${userId}/${productId}`
    );

    return response.data;
  }
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ userId, productId, quantity }) => {
    const response = await axios.put(
      "http://localhost:5000/api/shop/cart/update-cart",
      {
        userId,
        productId,
        quantity,
      }
    );

    return response.data;
  }
);
// export const clearCartOnServer = createAsyncThunk(
//   "cart/clearCartOnServer",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/api/shop/cart/clear/${userId}`
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Error clearing cart on server:", error);
//       // Still return success - we'll clear the local state anyway
//       return { success: true, message: "Cart cleared locally only" };
//     }
//   }
// );

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  // reducers: {clearCart: (state) => {
  //   state.cartItems = [];
  //   state.isLoading = false;
  // }},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(updateCartQuantity.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(deleteCartItem.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      // .addCase(clearCartOnServer.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(clearCartOnServer.fulfilled, (state) => {
      //   state.isLoading = false;
      //   state.cartItems = []; // Clear cart on successful API call
      // })
      // .addCase(clearCartOnServer.rejected, (state) => {
      //   state.isLoading = false;
      //   // You could still clear the cart even if the API call fails
      //   // state.cartItems = [];
      // });
  },
});
// export const { clearCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;