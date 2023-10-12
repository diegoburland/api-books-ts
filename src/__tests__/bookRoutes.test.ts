import request from "supertest";
import express from "express";
import bookRoutes from "../routes/bookRoutes";

const app = express();
app.use(express.json());
app.use("/books", bookRoutes);

describe("GET /books", () => {
  it("should return a list of books", async () => {
    const res = await request(app).get("/books");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
