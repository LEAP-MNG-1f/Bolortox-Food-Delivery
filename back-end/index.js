import express from "express";

const server = express();
const PORT = 8000;

server.get("/", (request, response) => {
  response.send("Hello get");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} started working`);
});
