const express = require("express");

const server = express();
const PORT = 8080;
const ADDRESS = "0.0.0.0;";

server.get("/", (req, res) => {
  res.send("This is the backend :)");
});

server.listen(PORT, ADDRESS);
console.log(`Server listening at port ${PORT}`);
