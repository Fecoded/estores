const express = require("express");
const router = express.Router();
const {
  postOrder,
  getOrder,
  getAllOrder,
  updateStatus,
  deleteOrder,
} = require("../controllers/order");
const { auth, authorize } = require("../middleware/auth");

router.route("/").get(auth, authorize("user"), getOrder).post(auth, authorize("user"), postOrder);
router.route("/all").get(auth, authorize("admin"), getAllOrder);
router
  .route("/:id").put(auth, authorize("admin"), updateStatus)
  .delete(auth, authorize("admin"), deleteOrder);

module.exports = router;