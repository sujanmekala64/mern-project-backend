const express = require("express");
const mongoose = require("mongoose");
const Cardio = require("./models/Cardio");
const Resistance = require("./models/Resistance");
const User = require("./models/User");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery",true);  //Deprection warning
mongoose.connect("mongodb+srv://sujanmekala64:12345@cluster0.rn4vzp0.mongodb.net/");
var db = mongoose.connection;
db.on("open",()=>console.log("Database opened"));
db.on("error",()=>console.log("Error occured"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/Cardio",Cardio);
app.use("/Resistance",Resistance);
app.use("/User",User);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})