const express = require('express');
const passport = require('passport');
const jwtAuth = require('../middleware/jwtAuth');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/api/auth/failure' }),
  (req, res) => {
    // Successful authentication, send JWT token to client
    res.json({ token: req.user.token });
  }
);

router.get('/failure', (req, res) => {
  res.status(401).json({ message: 'Authentication failed' });
});

router.get('/protected', jwtAuth, (req, res) => {
  res.json({ message: `Hello ${req.user.displayName}, you accessed a protected route!` });
});

module.exports = router;
