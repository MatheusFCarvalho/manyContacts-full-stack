import { Router } from "express";
const clientsRoutes = Router();

clientsRoutes.post("", createClientController);
// clientsRoutes.get("", listCategoriesController);
// clientsRoutes.get("/:id/products", validationAdmMiddleware, listProdByCategoryController);
// clientsRoutes.patch("/:id", validationAdmMiddleware, updateCategoryController);
// clientsRoutes.delete("/:id", validationAdmMiddleware, deleteCategoryController);

export default clientsRoutes;
