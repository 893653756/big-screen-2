module.exports = {
  prefixURL: process.env.NODE_ENV === "development" ? "/dev-api" : "",
  requestTimeout: 30000,
};
