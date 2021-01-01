const express = require("express");
const router = express.Router();
const {
  getAuth,
  getAuthGoogle,
  getAuthGoogleCallback,
  getUsers,
  postAuth,
} = require("../controllers/auth");
const { auth, authorize } = require("../middleware/auth");

router.route("/google").get(getAuthGoogle);
router.route("/google/callback").get(getAuthGoogleCallback);
router.route("/").get(auth, getAuth).post(postAuth);
router.route("/users").get(auth, authorize("admin"), getUsers);

module.exports = router;
