const Category = require("../models/Category");

// @desc      GET CATEGORY
// @route     GET api/v1/category
// @access    Private
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.find().sort({
      createdAt: -1,
    });

    return res
      .status(200)
      .json({ success: true, count: category.length, data: category });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc      CREATE CATEGORY
// @route     POST api/v1/category
// @access    Private
exports.postCategory = async (req, res, next) => {
  const { description } = req.body;

  try {
    let category = await Category.findOne({ description });

    if (category) {
      return res
        .status(400)
        .json({ msg: `${category.description} category already exist` });
    }

    category = await Category.create({ description });
    res.status(201).json({ success: true, data: category, message: `${description} category was created` });
  } catch (err) {
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
};

// @desc      UPDATE CATEGORY
// @route     PUT api/v1/category/:id
// @access    Private
exports.updateCategory = async (req, res, next) => {
  const { description } = req.body;

  const newExp = { description };

  try {
    let category = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: category });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc      DELETE CATEGORY
// @route     DELETE api/v1/category/:id
// @access    Private
exports.deleteCategory = async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(400).json({ msg: "Category does not exist" });
    }

    await Category.findByIdAndRemove(req.params.id);

    category = await Category.find().sort({ createdAt: -1 });

    return res
      .status(200)
      .json({ success: true, count: category.length, data: category });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
