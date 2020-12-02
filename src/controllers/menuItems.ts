import { query } from "../database/createConnection";
import { Request, Response } from "express";

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await query("SELECT * FROM menu_items");
    res.send(result.rows);
  } catch (error) {
    res.status(500).send({ error: "there has been an error" });
    console.log(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await query("SELECT * FROM menu_items WHERE id = $1", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.status(500).send({ error: "there has been an error" });
  }
};

export const updateProductStock = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { stock } = req.body;
    const result = await query(
      "UPDATE menu_items SET stock = $1 WHERE id = $2 RETURNING *",
      [stock, id]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.status(500).send({ error: "there has been an error" });
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await query("DELETE FROM menu_items WHERE id = $1", [id]);
    res.send({ deleted: id });
  } catch (error) {
    res.status(500).send({ error: "there has been an error" });
  }
};
