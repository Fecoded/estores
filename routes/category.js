const express = require("express");
const router = express.Router();
const {
  postCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");
const { auth, authorize } = require("../middleware/auth");

router.route("/").get(getCategory).post(auth, authorize("admin"), postCategory);
router
  .route("/:id")
  .put(auth, authorize("admin"), updateCategory)
  .delete(auth, authorize("admin"), deleteCategory);

module.exports = router;
