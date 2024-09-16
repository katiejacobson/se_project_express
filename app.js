const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mainRouter = require("./routes/index.js");

const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error());

app.use((req, res, next) => {
  req.user = {
    _id: "66e74a9d2c030402531750ed",
  };
  next();
});
app.use(express.json());
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}...`);
});
