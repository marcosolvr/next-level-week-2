import express from "express";
import { send } from "process";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.send("Hello World");
});

app.listen(3333);
