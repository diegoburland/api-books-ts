"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.getBookById = exports.getAllBooks = void 0;
const books = [];
const getAllBooks = (req, res) => {
    res.json(books);
};
exports.getAllBooks = getAllBooks;
const getBookById = (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (!book)
        return res.status(404).send("Book not found");
    res.json(book);
};
exports.getBookById = getBookById;
const addBook = (req, res) => {
    const { body } = req;
    const book = {
        id: books.length + 1,
        title: body.title,
        author: body.author,
    };
    books.push(book);
    res.status(200).json(book);
};
exports.addBook = addBook;
const updateBook = (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (!book)
        return res.status(404).send("Book not found");
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    res.json(book);
};
exports.updateBook = updateBook;
const deleteBook = (req, res) => {
    const index = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(404).send("Book not found");
    books.splice(index, 1);
    res.status(204).send();
};
exports.deleteBook = deleteBook;
