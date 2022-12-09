import { Router } from "express";
import { addEmailClientController, addPhoneClientController, createClientController, deleteClientController, listClientsController, removeEmailClientController, removePhoneClientController, updateEmailClientController, updatePhoneClientController } from "../controllers/clients.controllers";
import verifyCreateClient from "../middlewares/verifyCreateClient.middleware";
const clientsRoutes = Router();

clientsRoutes.post("", verifyCreateClient, createClientController);
clientsRoutes.get("", listClientsController);
clientsRoutes.delete("/:id", deleteClientController);
clientsRoutes.post("/phone/:clientId", addPhoneClientController);
clientsRoutes.post("/email/:clientId", addEmailClientController);
clientsRoutes.delete("/phone/:id", removePhoneClientController)
clientsRoutes.delete("/email/:id", removeEmailClientController)
clientsRoutes.patch("/phone/:id", updatePhoneClientController)
clientsRoutes.patch("/email/:id", updateEmailClientController)

export default clientsRoutes;
