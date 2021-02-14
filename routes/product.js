const express = require("express");
const router = express.Router();
const {
  postProduct,
  getProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  updateQuantity,
  deleteProduct,
} = require("../controllers/product");
const { auth, authorize } = require("../middleware/auth");

router.route("/").get(getProduct).post(auth, authorize("admin"), postProduct);
router.route("/all").get(getAllProduct);
router.route("/quantity").put(auth, updateQuantity)
router
  .route("/:id").get(getSingleProduct)
  .put(auth, authorize("admin"), updateProduct)
  .delete(auth, authorize("admin"), deleteProduct);


module.exports = router;
