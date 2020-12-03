import { updateProductStock } from "../controllers/menuItems";
import { Application } from "express";

export default (app: Application) => {
  /*
   * menu item routes
   */
  app.get("/menu_items_update/:id", updateProductStock);
};
