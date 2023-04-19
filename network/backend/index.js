import express from "express";
import cors from "cors";
import { connectDB, Worker } from "./db/conn.js";

const port = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/workers", async (req, res) => {
  Worker.find()
    .then((workers) => {
      res.send(workers);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
