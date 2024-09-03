// const mongoose = require("mongoose");
const express = require("express");
import mongoose, { ConnectOptions } from 'mongoose';
require('dotenv').config();
const cors = require("cors");
const app = express();
app.use(cors());

mongoose.connect(process.env.DB || "mongodb://localhost:27017/kakao-talk", {
  useNewUrlParser: true,
  useUnifiedTopology: true //Mongoose 버전이 6.0 이상이면 useNewUrlParser, useUnifiedTopology, useFindAndModify 및 useCreateIndex는 더 이상 지원되지 않는 옵션
} as ConnectOptions 
).then(() => console.log("connected to database")
).catch(e => {
  console.error(e);
})

module.exports = app;