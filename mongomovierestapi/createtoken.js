const jwt = require('jsonwebtoken');
require('dotenv').config();

function createToken(user) {
  const payload = {
    username: user.username,
    isadmin: user.isadmin
  }; // {'username':'admin', 'isadmin': true}
  console.log(payload);
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 // expiroituu 24 tunnissa
  });

  return token;
}

module.exports = createToken;
