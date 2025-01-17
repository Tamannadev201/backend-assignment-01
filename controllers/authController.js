const jwt = require('jsonwebtoken');

// Generate JWT Token
exports.generateToken = (req, res) => {
  const payload = { user: 'testUser' }; // Example payload
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

// Handle POST request
exports.handlePostRequest = (req, res) => {
  res.send('I am post body');
};
