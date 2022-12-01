// LTg8s6xPF7IAcXIb
//console.log("Hello World!!!!");

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

//Middlewares

app.use(express.json());
app.use("/books", router); //localhost:5000/books

// app.use("/", (req, res, next) => {
//   res.send("This is our starting app");
// });

mongoose
  .connect(
    "mongodb+srv://admin:LTg8s6xPF7IAcXIb@cluster0.p56kuoi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
