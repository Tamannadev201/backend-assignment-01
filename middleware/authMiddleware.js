const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log('Received token:', token); // Add this line

  if (!token) {
    return res.status(403).send('Token is required');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    req.user = decoded;
    next();
  });
};

