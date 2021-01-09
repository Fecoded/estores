const express = require("express");
const router = express.Router();
const {
  getAuth,
  getAuthGoogle,
  getAuthGoogleCallback,
  getUsers,
  postAuth,
} = require("../controllers/auth");
const {updateProfile} = require("../controllers/profile");
const { auth, authorize } = require("../middleware/auth");

router.route("/google").get(getAuthGoogle);
router.route("/google/callback").get(getAuthGoogleCallback);
router.route("/").get(auth, getAuth).post(postAuth);
router.route('/profile').put(auth, authorize('user'), updateProfile);
router.route("/users").get(auth, authorize("admin"), getUsers);

module.exports = router;
