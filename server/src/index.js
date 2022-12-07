import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 4000;

const {
  DB_LOGIN: login,
  DB_PASSWORD: password
} = process.env;

mongoose
  .connect(
    `mongodb+srv://${login}:${password}@cluster0.kx047.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB is ok"))
  .catch((err) => console.log("DB error", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server is listening on port ${port}`);
});
