import { Request, Response } from "express";
import pool from "../db";

export const createTodo = async (req: Request, res: Response) => {
  const { title, content, status } = req.body;

  if (!title || !content || !status) {
    return res.status(400).json({ error: "All fields are required." });
  }
  try {
    const result = await pool.query(
      "INSERT INTO todo (title, content, status) VALUES ($1, $2, $3) RETURNING *",
      [title, content, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT id, title, status, created_at FROM todo"
    );
    res.json(result.rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getDetailsTodo = async (req: Request, res: Response) => {
  const { todoId } = req.params;
  if (!todoId || isNaN(Number(todoId))) {
    return res.status(400).json({ error: "Invalid todo ID" });
  }
  try {
    const result = await pool.query(
      "SELECT id, content, title, status, created_at FROM todo WHERE id = $1",
      [todoId]
    );
    res.json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
