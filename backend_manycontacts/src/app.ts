import express from "express";
import "express-async-errors";
import "reflect-metadata";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import clientsRoutes from "./routes/clients.routes";
import contactsRoutes from "./routes/contacts.routes";

const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());


app.use("/clients", clientsRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrorMiddleware);


export default app;
