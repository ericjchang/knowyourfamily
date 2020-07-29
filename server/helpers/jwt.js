const jwt = require("jsonwebtoken");

module.exports = {
  userToken: (payload) => {
    return jwt.sign(
      {
        id: payload.id,
        email: payload.email,
      },
      process.env.SECRET
    );
  },

  verifyToken: (token) => {
    return jwt.verify(token, process.env.SECRET);
  },
};
