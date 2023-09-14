const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, loginUser, getProfile } = require('../controllers/authController');

// middleware
router.use(
  cors({
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
      origin: 'http://localhost:5173',
  })
)

// Define the route handler
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = router
