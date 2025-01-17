// utility/logger.js

const info = (message) => {
    console.log(`[INFO]: ${message}`);
  };
  
  const warn = (message) => {
    console.warn(`[WARN]: ${message}`);
  };
  
  const error = (message) => {
    console.error(`[ERROR]: ${message}`);
  };
  
  module.exports = { info, warn, error };
  