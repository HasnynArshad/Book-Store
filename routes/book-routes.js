const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

// router.get("/", async (req, res, next) => {
//   //This route will provide all the books
// });

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
