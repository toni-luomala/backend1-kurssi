const mongoose = require('mongoose');

// Luodaan UserSchema ja määritellään sisältö.
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: { type: String, required: true, max: 30 },
  isadmin: { type: Boolean, required: true }
});

// UserScheman model.
const User = mongoose.model('User', UserSchema);

module.exports = User;
