import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import { UserController } from './controllers/index.js';
import {
  registerValidation,
} from "./validations.js";
import { handleValidationErrors } from "./utils/index.js";

dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

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

app.post(
  '/auth/register',
  registerValidation,
  handleValidationErrors,
  UserController.register
);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server is listening on port ${port}`);
});
