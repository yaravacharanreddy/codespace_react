const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/passport-setup');

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`<h1>Welcome, ${req.user.displayName}</h1><a href="/logout">Logout</a>`);
  } else {
    res.send('<h1>Home</h1><a href="/auth/google">Login with Google</a>');
  }
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
