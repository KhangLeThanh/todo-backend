import { Router } from "express";

import {
  getAllTodo,
  createTodo,
  getDetailsTodo,
} from "../controllers/todoController";

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodo);
router.get("/:todoId", getDetailsTodo);

export default router;
