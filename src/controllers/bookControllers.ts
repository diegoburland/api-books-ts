import { Request, Response } from "express";
import { Book } from "../models";

const books: Book[] = [];

export const getAllBooks = (req: Request, res: Response) => {
  res.json(books);
};

export const getBookById = (req: Request, res: Response) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
};

export const addBook = (req: Request, res: Response) => {
  const { body } = req;

  const book: Book = {
    id: books.length + 1,
    title: body.title,
    author: body.author,
  };

  books.push(book);
  res.status(200).json(book);
};

export const updateBook = (req: Request, res: Response) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  res.json(book);
};

export const deleteBook = (req: Request, res: Response) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Book not found");
  books.splice(index, 1);
  res.status(204).send();
};
