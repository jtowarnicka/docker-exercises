import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!\n");
});

app.get("hello", (req, res) => {
  res.send("h e l l o\n");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
