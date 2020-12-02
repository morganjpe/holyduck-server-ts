import {
  getAllProducts,
  getProductById,
  updateProductStock,
} from "../controllers/menuItems";
import { Application } from "express";

export default (app: Application) => {
  app.get("/menu_items", getAllProducts);
  app.get("/menu_items/:id", getProductById);
  app.get("/menu_items_update/:id", updateProductStock);
};
