const express = require('express');
const router = express.Router();
const {
  getAuth,
  getAuthGoogle,
  getAuthGoogleCallback,
  postAuth,
  getAdminAuth,
  postAdminAuth,
} = require('../controllers/auth');
const auth = require('../middleware/auth');

router.route('/google').get(getAuthGoogle);
router.route('/google/callback').get(getAuthGoogleCallback);
router.route('/').get(auth, getAuth).post(postAuth);
router.route('/admin').get(auth, getAdminAuth).post(postAdminAuth);

module.exports = router;
