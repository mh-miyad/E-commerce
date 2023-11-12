import express from "express";
import { config } from "dotenv";
import cors from "cors";
config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the FasionDude!");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
