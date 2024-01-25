const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send('View <a href="/health">health</a> status of the app');
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
