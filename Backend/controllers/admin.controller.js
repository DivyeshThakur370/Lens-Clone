const UsersModel = require("../models/user.model");

const getAllUsersController = async (req, res) => {
  try {
    const admin = req.admin;

    if (!admin) {
      res.status(404).json({
        message: "not admin",
        success: false,
      });
    }
    const users = await UsersModel.find({ role: "user" });

    res.status(200).json({
      message: "all users get successfully",
      data: users,
      success: true,
    });
  } catch (error) {
    console.log(
      `🚀 ~ admin.controller.js:22 ~ getAllUsersController ~ error:`,
      error
    );
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UsersModel.deleteOne({ _id: id });
    if (deletedUser) {
      res.status(200).json({
        message: "User delete successfully",
        success: true,
        user: deletedUser,
      });
    }
  } catch (error) {
    console.log(
      `🚀 ~ admin.controller.js:33 ~ deleteUserController ~ error:`,
      error
    );
  }
};

const editUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { updateStatus } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "User ID is required",
        success: false,
      });
    }

    const editUser = await UsersModel.updateOne(
      { _id: id },
      { status: updateStatus }
    );

    if (editUser.matchedCount === 0) {
      return res.status(404).json({
        message: "User not found!",
        success: false,
      });
    }

    res.status(200).json({
      message: "User status updated successfully",
      success: true,
      result: editUser,
    });
  } catch (error) {
    console.log("🚀 ~ editUserController ~ error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const ordersController = async (req, res) => {
  try {
    const orders = await UsersModel.aggregate([
      {
        $match: { role: "user" },
      },
      // 1️⃣ Join users with addtocart
      {
        $lookup: {
          from: "addtocarts",
          localField: "_id", // users._id
          foreignField: "userid", // addtocart.userid
          as: "orders",
        },
      },

      // 2️⃣ Calculate total amount per user
      {
        $addFields: {
          totalOrderPrice: {
            $sum: {
              $map: {
                input: "$orders",
                as: "order",
                in: {
                  $multiply: [
                    { $toDouble: "$$order.price" }, // ensure price is number
                    { $ifNull: ["$$order.quantity", 1] }, // if quantity missing, assume 1
                  ],
                },
              },
            },
          },
        },
      },
    ]);

    return res.status(200).json({
      message: "Orders of users",
      data: orders,
      success: true,
    });
  } catch (error) {
    console.log("🚀 ~ ordersController ~ error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  getAllUsersController,
  deleteUserController,
  editUserController,
  ordersController,
};
