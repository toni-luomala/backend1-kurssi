const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: { type: String, required: true },
  isadmin: { type: Boolean, required: true }
});

// Tehdään UserSchemasta model
const User = mongoose.model('User', UserSchema);

module.exports = User;
