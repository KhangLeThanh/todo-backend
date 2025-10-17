import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./db";
import todoRoutes from "./routes/todo";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Todo API is running"));
app.use("/api/todo", todoRoutes);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
