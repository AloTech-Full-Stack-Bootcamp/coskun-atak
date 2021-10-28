const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html")
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html")
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});