import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello world mah broda" });
});

app.listen(3333);
