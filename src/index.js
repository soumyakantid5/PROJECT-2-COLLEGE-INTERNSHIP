require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route.js");
const bodyParser = require("body-parser");
const multer = require('multer')

const app = express();
app.use(bodyParser.json());
app.use(multer().any());



  mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,})
  .then(() => console.log("Connected with Database"))
  .catch((err) => console.log(err));

  app.use("/functionup", route);

app.listen(process.env.PORT || 5000, function () {
  console.log("Express app running on port " + (process.env.PORT || 5000));
});


