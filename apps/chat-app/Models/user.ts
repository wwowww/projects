// const mongoose = require("mongoose");
import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must type name"],
    unique: true
  },
  token: {
    type: String
  },
  online: {
    type: Boolean,
    default: false
  },
})

module.exports = mongoose.model("User", userSchema);