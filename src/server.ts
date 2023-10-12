import express, { Request, Response } from "express";
import { bookRoutes } from "./routes";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello word");
});

app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
