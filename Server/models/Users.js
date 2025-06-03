const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
}, { collection: 'Users' });  // explicitly tell mongoose to use your existing 'Users' collection

module.exports = mongoose.model('User', userSchema);
