const express = require("express");

const {
    addToCart,
    fetchCartItems,
    deleteCartItem,
    updateCartItemQty,
    clearUserCart,
  } = require("../../controllers/shop/cart-controller");

const router = express.Router();

router.post("/add", addToCart);
router.get("/get/:userId", fetchCartItems);
router.put("/update-cart", updateCartItemQty);
router.delete("/:userId/:productId", deleteCartItem);
router.delete('/clear/:userId',clearUserCart);

module.exports = router;