const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const pgPromise = require("pg-promise");
const methodOverride = require("method-override");

// <--
// CREATING ROUTES:
// format:
// const pagenameRouter = require('./routes/pagename');

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comments");
// const signupRouter = require("./routes/signup");

// end of route creation -->

const app = express();
const PORT = process.env.PORT || 3000;

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      // secure: true,
      maxAge: 31536000000,
    },
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/post", postRouter);
app.use("/comments", commentRouter);
// API request to test the functionality of the ckeditor ejs file
app.get("/test", (req, res) => {
  res.render("ckeditor-test.ejs");
});
app.get("/cannot-reset-password", (req, res) => {
  res.render("cannot-reset-password.ejs");
});

// Require the sequelize models
const db = require("./models");

// routes
// Home page
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to this Blog!</h1>`);
});

app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));
