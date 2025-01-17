module.exports = {
    jwt: {
      secret: process.env.JWT_SECRET || 'your_default_jwt_secret', // Use an environment variable or default secret
      expiresIn: '1h', // Token expiration time
    },
    database: {
      uri: process.env.DB_URI || 'mongodb://localhost:27017/your_database_name', // MongoDB connection URI
    },
    server: {
      port: process.env.PORT || 3000, // Server port
    },
  };
  