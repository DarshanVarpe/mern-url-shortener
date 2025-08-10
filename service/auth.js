const jwt = require('jsonwebtoken')
const secret = "BaBaBlackSheep";

function setUser(user) {
  
    return jwt.sign(
      {
        _id: user._id,
        email: user.email,
        role:user.role,
      },
      secret
  );
}

function getUser(token) {
  if (!token || token.trim() === "") {
    console.log("Token is missing or empty");
    return null; // Return null or throw an error based on your logic
  }
  return jwt.verify(token, secret);
}


module.exports = {
  setUser,
  getUser,
};