const express = require('express');
const passport = require('passport');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

require('./config/passport'); // Passport config

const app = express();

app.use(passport.initialize());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
