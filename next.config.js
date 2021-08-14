require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  // exportTrailingSlash: true,
  trailingSlash: true,
  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};
