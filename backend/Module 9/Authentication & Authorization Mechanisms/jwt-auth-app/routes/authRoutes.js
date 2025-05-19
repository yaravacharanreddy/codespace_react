const express = require('express');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Example protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}, you accessed a protected route!` });
});

module.exports = router;
