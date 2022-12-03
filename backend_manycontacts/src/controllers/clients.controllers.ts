import { Request, Response } from "express";
import { createClientService } from "../services/createClient.service";


export const createClientController = async (req: Request, res: Response) => {
    const { data } = req.body;
    const response = await createClientService(data);
    res.status(201).json(response);
};