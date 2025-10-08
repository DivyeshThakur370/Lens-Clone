const AddToCartModel = require("../models/addtocart.model");
const jwt = require("jsonwebtoken");

const addtocartController = async (req, res) => {
  try {
    const userId = req.user?.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorize !", success: false });
    }
    const {
      imageUrl,
      imageUrl2,
      rating,
      reviews,
      brand,
      sizeCollection,
      discount,
      price,
      frame,
    } = req.body;

    const newItem = new AddToCartModel({
      imageUrl,
      imageUrl2,
      rating,
      reviews,
      brand,
      sizeCollection,
      discount,
      price,
      frame,
      userid: userId,
    });

    await newItem.save();
    res.status(201).send("Item added to cart");
  } catch (error) {
    console.log("🚀 ~ addtocartController ~ error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getAddToCartController = async (req, res) => {
  try {
    const userid = req?.user?.user?._id;
    const items = await AddToCartModel.find({ userid });
    res.status(200).json(items);
  } catch (error) {
    console.log("🚀 ~ getAddToCartController ~ error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteAddtocartController = async (req, res) => {
  try {
    const { productid } = req.params;

    

    if (!productid) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const deletedProduct = await AddToCartModel.deleteOne({ _id: productid });

    if (deletedProduct.deletedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      deletedProduct,
      success: true,
    });
  } catch (error) {
    console.log("🚀 ~ deleteAddtocartController ~ error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  addtocartController,
  getAddToCartController,
  deleteAddtocartController,
};
