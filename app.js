const express = require("express"),
cookieParser = require("cookie-parser"),
session = require('express-session'),
flash = require('connect-flash'),
path = require("path");

const app = express();

app.use(express.static("public"));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cookieParser())
app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000 }
}))

app.use(flash())

app.set("view engine", "ejs");
app.set('views', [path.join(__dirname, 'views'),
                 path.join(__dirname, "views/page-views/")]);

app.use("/", require("./server/routes/page-routes"))

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}); 