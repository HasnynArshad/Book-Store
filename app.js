const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const router = require("./routes/book-routes");
const dbConnect = require("./utilities/dbConnect");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//Middlewares
dbConnect();

app.use(express.json());
app.use("/books", router); //localhost:5000/books


app.use("*", (req, res) => {
  console.log("in * condition of app.use");
  res.status(500).json(`Internal Server Error at ${req.originalUrl}`);
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening at port ${process.env.PORT}`);
});

