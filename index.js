const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(2000, () => {
  console.log("server started on port 2000");
});
