// utility/errorHandler.js

const handleError = (err, res) => {
    console.error(err);
    res.status(500).json({ message: 'An error occurred, please try again later' });
  };
  
  module.exports = handleError;
  