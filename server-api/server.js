//helper functions
const { varInit,
  authenticateUser,
  getUserByEmail } = require('./lib/utils');


// load .env data into process.env
require("dotenv").config();


const { data } = require('./db_test/data')

// Web server config
// if for whatever reason 8000 is taken by another process
// change PORT in .env file
const PORT = process.env.PORT || 8000;

const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");

const app = express();
const router = express.Router();

const morgan = require("morgan");

//dependency
const session = require("cookie-session");

app.use(session({
  name: 'session', keys: ['test'],
  maxAge: 24 * 60 * 60 * 1000
}));



// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));


// Separated Routes for each Resource
const clientRoutes = require("./routes/clientRoutes");
const adminRoutes = require("./routes/adminRoutes");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api", clientRoutes(router, db));
app.use('/', adminRoutes(router, db));


// normally routes will go in route files defined above
// this is for quick testing and prototyping
app.get("/", (req, res) => {
  //dummy data for now
  //need to integrate mongo dB
  const vars = varInit(false, null, null, null)
  res.render('login', vars)
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


