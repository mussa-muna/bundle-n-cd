const express = require("express");
const app = express();
const port = 80;
// hello
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Test Route!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
