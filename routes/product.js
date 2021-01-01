const express = require("express");
const router = express.Router();
const {
  postProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
import { auth, authorize } from "../middleware/auth";

router.route("/").get(getProduct).post(auth, authorize("admin"), postProduct);
router
  .route("/:id")
  .put(auth, authorize("admin"), updateProduct)
  .delete(auth, authorize("admin"), deleteProduct);

module.exports = router;
