import { getAllProducts, getProductById } from "../controllers/menuItems";
import { Application } from "express";

export default (app: Application) => {
  /*
   * menu item routes
   */
  app.get("/menu_items", getAllProducts);
  app.get("/menu_items/:id", getProductById);
};
