const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');

router.route('/me').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;