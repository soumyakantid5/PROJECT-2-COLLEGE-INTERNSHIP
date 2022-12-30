// # PLEASE READ THE README FILE FIRST AND THIS IS NOT THE FINAL BRANCH, PLEASE DO TESTING ON FINAL BRANCH "project/blog"
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route.js");
const bodyParser = require("body-parser");
const multer = require('multer')

const app = express();
app.use(bodyParser.json());
app.use(multer().any());
app.use("/functionup", route);

function start(){
  mongoose.connect("mongodb+srv://soumya-db:afdbyZgt3CyQporD@cluster0.gvqtfzu.mongodb.net/Project2_OpenToIntern",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected with Database ✅✅✅"))
  .catch((err) => console.log(err));


app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
}

start();
