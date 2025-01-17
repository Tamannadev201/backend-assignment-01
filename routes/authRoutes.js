const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for JWT Token
router.get('/token', authController.generateToken);

// Route for POST body
router.post('/post', authMiddleware.verifyToken, authController.handlePostRequest);

module.exports = router;
