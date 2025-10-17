import { Router } from "express";

const {
  getAllTodo,
  createTodo,
  getDetailsTodo,
} = require("../controllers/todoController");

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodo);
router.get("/:todoId", getDetailsTodo);

export default router;
