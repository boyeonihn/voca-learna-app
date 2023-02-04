// todo - declare variables
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose'); 
const passport = require('passport'); 
const session = require('express-session'); 
const MongoStore = require('connect-mongo'); 


    //*import functions/routes

//todo - connect to database

//todo - set middleware
app.set("view engine", "ejs")
app.set(express.static("public")); 
app.use(express.urlencoded({extended: true}));  // url parser - help validate the information that we are passing back and forth
// extended true allows us to pass arrays 



//todo - set routes

//todo - start server 
app.listen(PORT, ()=> {
    console.log('Server is running, better go catch it!')
})
