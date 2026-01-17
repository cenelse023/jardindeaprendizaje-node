const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send("Hola Claudio, Express esta funcionando");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});