const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal Server Error" });
});
module.exports = app;
