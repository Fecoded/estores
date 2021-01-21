const Product = require("../models/Product");
const upload = require("../services/SetPicture");
const cloudinary = require("cloudinary");
require("../services/cloudinary");

// @desc      GET PAGINATED PRODUCT
// @routes    GET /api/v1/product
// @access    Public

exports.getProduct = async (req, res, next) => {
  try {
    const { page = 1, limit = 12 } = req.query;

    const product = await Product.find()
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Product.countDocuments();

    res.status(200).json({
      success: true,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: +page,
      data: product,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc      GET ALL PRODUCT
// @routes    GET /api/v1/product/all
// @access    Public

exports.getAllProduct = async (req, res, next) => {
  try {
    const product = await Product.find().sort({ createdAt: -1 });

    return res
      .status(200)
      .json({ success: true, count: product.length, data: product });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc      GET PRODUCT
// @routes    GET /api/v1/product/:id
// @access    Public

exports.getSingleProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if(!product) {
      return res.status(400).json({ msg: "Product does not exist" });
    }

    return res
      .status(200)
      .json({ success: true, data: product });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc       CREATE PRODUCT
// @routes     POST /api/v1/product
// @access     Private and Authorize

exports.postProduct = async (req, res, next) =>
  upload(req, res, async (err) => {
    const file = req.file;
    if (err === "ERROR IMAGE ONLY") {
      res.status(400).json({ msg: "ERROR: IMAGE ONLY" });
    } else if (err) {
      res.status(400).json({ msg: err.message });
    } else {
      try {
        const {
          name,
          price,
          previous_price,
          description,
          category,
          size,
          color,
          type,
          quantity,
        } = req.body;

        console.log(req.body)

        const productFields = {};
        productFields.user = req.user.id;
        if (name) productFields.name = name;
        if (price) productFields.price = price;
        if (previous_price) productFields.previous_price = previous_price;
        if (description) productFields.description = description;
        if (category) productFields.category = category;
        if (size) productFields.size = size;
        if (color) productFields.color = color;
        if (type) productFields.type = type;
        if (quantity) productFields.quantity = quantity;

        let product = new Product(productFields);

        let result = await cloudinary.v2.uploader.upload(file.path);
        product.img = result.secure_url;

        Product.create(product);
        res.status(200).json({ success: true, data: product, message: "Product was created successfully" });

        // cloudinary.v2.uploader.upload(file.path).then((result, error) => {
        //   if (error) throw console.log(error);
        //   product.img = result.secure_url;
        //   // create
        //   Product.create(product);
        //   res.status(200).json({ success: true, data: product });
        // });
      } catch (err) {
        console.log(err);
        if (err.name === "ValidationError") {
          const msgs = Object.values(err.errors).map((val) => val.message);
          return res.status(400).json({
            success: false,
            error: msgs,
          });
        }
        return res.status(500).json({
          success: false,
          error: "Server Error",
        });
      }
    }
  });

// @desc    UPDATE PRODUCT
// @route   UPDATE /api/v1/product/:id
// @access  Private and Authorize

exports.updateProduct = async (req, res, next) => {
  const {
    name,
    price,
    previous_price,
    description,
    category,
    size,
    color,
    type,
    quantity,
  } = req.body;

  const newExp = {
    name,
    price,
    previous_price,
    description,
    category,
    size,
    color,
    type,
    quantity,
  };

  try {
    let product = await Product.findByIdAndUpdate(
      req.param.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: product });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    DELETE PRODUCT
// @route   DELETE /api/v1/product/:id
// @access  Private and Authorize

exports.deleteProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({ msg: "Product does not exist" });
    }

    await Product.findByIdAndRemove(req.params.id);

    product = await Product.find().sort({ createdAt: -1 });

    return res
      .status(200)
      .json({ success: true, count: product.length, data: product });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
