const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World! With Node.js");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
