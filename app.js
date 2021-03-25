const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }))

app.get('',(req,res)=>{
    res.send("hello world")
})

app.use(bodyParser.json());


app.listen(PORT ,()=>{
    console.log(`app starting on ${PORT}`);
})