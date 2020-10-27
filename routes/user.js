const express = require('express');
const router = express.Router();
const { postUser, postAdmin } = require('../controllers/user');

router.route('/').post(postUser);
router.route('/admin').post(postAdmin);

module.exports = router;
