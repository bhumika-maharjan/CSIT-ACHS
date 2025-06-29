const express = require("express");
const router = express.Router();
const orderController = require('../../controllers/admin/order-controller');



router.get('/get', orderController.getAllOrdersOfAllUsers);
router.get('/details/:id', orderController.getOrderDetailsForAdmin);


module.exports = router;