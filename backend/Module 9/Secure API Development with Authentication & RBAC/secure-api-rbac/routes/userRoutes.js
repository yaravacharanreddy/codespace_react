const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/role');
const { getAllUsers, getUserProfile } = require('../controllers/userController');

router.get('/', auth, authorize('Admin'), getAllUsers);
router.get('/profile', auth, getUserProfile);

module.exports = router;
