const express = require('express');
const router = express.Router();
const {
  postForgotPassword,
  updateForgotPassword,
} = require('../controllers/forgotpassword');

router.route('/').post(postForgotPassword);
router.route('/:token').put(updateForgotPassword);

module.exports = router;
