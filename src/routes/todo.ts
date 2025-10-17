import { Router } from "express";

import {
  getAllTodo,
  createTodo,
  getDetailsTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController";

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodo);
router.get("/:todoId", getDetailsTodo);
router.patch("/:todoId", updateTodo);
router.delete("/:todoId", deleteTodo);

export default router;
