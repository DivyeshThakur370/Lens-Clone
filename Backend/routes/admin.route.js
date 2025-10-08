const express = require("express");
const { isAdmin } = require("../middlewares/isAdmin");
const {
  getAllUsersController,
  deleteUserController,
  editUserController,
  ordersController,
} = require("../controllers/admin.controller");
const {
  CreateProductController,
} = require("../controllers/product.controller");

const adminRoutes = express.Router();
//get all users
adminRoutes.get("/allusers", isAdmin, getAllUsersController);

// delete user
adminRoutes.delete("/deleteuser/:id", isAdmin, deleteUserController);

// edit(block) user
adminRoutes.put("/edituser/:id", isAdmin, editUserController);

// create product
adminRoutes.post("/create", isAdmin, CreateProductController);

// user orders
adminRoutes.get("/orders", ordersController);

module.exports = adminRoutes;
