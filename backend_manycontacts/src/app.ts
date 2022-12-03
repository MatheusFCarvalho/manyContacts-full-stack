import express from "express";
import "express-async-errors";
import "reflect-metadata";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import clientsRoutes from "./routes/clients.routes";

const app = express();
app.use(express.json());

app.use("/clients", clientsRoutes);

app.use(handleErrorMiddleware);

export default app;
