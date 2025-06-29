const express = require("express");
const router = express.Router();
const orderController = require('../../controllers/shop/order-controller');

router.post('/create', orderController.createOrder);
router.get('/verify-payment', orderController.verifyPayment);
router.post("/capture", orderController.capturePayment);

router.get('/list/:userId', orderController.getAllOrdersByUser);
router.get('/details/:id', orderController.getOrderDetails);

module.exports = router;