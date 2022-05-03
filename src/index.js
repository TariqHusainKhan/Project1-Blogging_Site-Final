const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("../src/route/route");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


mongoose.connect("mongodb+srv://functionup-cohort580:WwiSjumsqAyT4pPC@cluster0.hxlgz.mongodb.net/TariqHusainKhanDB",{
    useNewUrlParser : true
})
.then(() => console.log("MongoDB is connected..!"))
.catch(err => console.log(err))

app.use('/',route);


app.listen(process.env.PORT || 3000 , function(){
    console.log("Express app is running on port : ",(process.env.PORT || 3000))
});