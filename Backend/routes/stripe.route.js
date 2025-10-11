const express = require("express");
const { isAuth } = require("../middlewares/isAuth");
const paymentController = require("../services/stripe.service");

const paymentRoute = express.Router();
paymentRoute.post("/payment", isAuth, paymentController);

module.exports = paymentRoute;
