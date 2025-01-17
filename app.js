const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/auth', authRoutes);

// Basic route to test
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
