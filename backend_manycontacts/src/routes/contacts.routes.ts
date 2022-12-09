import { Router } from "express";
import { removeEmailClientController, removePhoneClientController } from "../controllers/clients.controllers";
import { addEmailContactController, addPhoneContactController, createContactController, deleteContactController, listContactsController, removeEmailContactController, removePhoneContactController, updateEmailContactController, updatePhoneContactController } from "../controllers/contacts.controllers";
import verifyCreateClient from "../middlewares/verifyCreateClient.middleware";
const contactsRoutes = Router();

contactsRoutes.post("/:clientId", createContactController);
contactsRoutes.get("", listContactsController);
contactsRoutes.delete("/:id", deleteContactController);
contactsRoutes.post("/phone/:contactId", addPhoneContactController);
contactsRoutes.post("/email/:contactId", addEmailContactController);
contactsRoutes.delete("/phone/:id", removePhoneContactController)
contactsRoutes.delete("/email/:id", removeEmailContactController)
contactsRoutes.patch("/phone/:id", updatePhoneContactController)
contactsRoutes.patch("/email/:id", updateEmailContactController)

export default contactsRoutes;
