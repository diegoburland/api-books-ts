import request from "supertest";
import express from "express";
import { Book } from "../models";
import { bookRoutes } from "../routes";
import { bookController } from "../controllers";

const app = express();
app.use(express.json());
app.use("/books", bookRoutes);

describe("Book API", () => {
  let sampleBook: Book;

  beforeAll(() => {
    // Inicializar con un libro de muestra para las pruebas.
    sampleBook = {
      id: 1,
      title: "Sample Book",
      author: "Sample Author",
    };
    bookController.books.push(sampleBook);
  });

  it("should get all books", async () => {
    const res = await request(app).get("/books");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should get a book by ID", async () => {
    const res = await request(app).get(`/books/${sampleBook.id}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toEqual(sampleBook.title);
  });

  it("should return 404 for a book not found", async () => {
    const res = await request(app).get("/books/9999");
    expect(res.status).toBe(404);
  });

  it("should add a new book", async () => {
    const newBook = {
      title: "New Book",
      author: "New Author",
    };
    const res = await request(app).post("/books").send(newBook);
    expect(res.status).toBe(200);
    expect(res.body.title).toEqual(newBook.title);
  });

  it("should update a book", async () => {
    const updatedBook = {
      title: "Updated Book Title",
    };
    const res = await request(app)
      .put(`/books/${sampleBook.id}`)
      .send(updatedBook);
    expect(res.status).toBe(200);
    expect(res.body.title).toEqual(updatedBook.title);
  });

  it("should delete a book", async () => {
    const res = await request(app).delete(`/books/${sampleBook.id}`);
    expect(res.status).toBe(204);
  });

  it("should return 404 for deleting a non-existent book", async () => {
    const res = await request(app).delete("/books/9999");
    expect(res.status).toBe(404);
  });
});
