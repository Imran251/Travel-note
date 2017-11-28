const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  email      : {type:String, required:false},
  username   : {type:String, required:false},
  password   : {type:String, required:false},
  description: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
