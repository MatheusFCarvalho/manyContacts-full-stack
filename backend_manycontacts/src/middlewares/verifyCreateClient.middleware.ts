import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import EmailClient from "../entities/emailClient.entity";
import PhoneClient from "../entities/phoneClient.entity";
import AppError from "../errors/AppError";

const verifyCreateClient = async (req: Request, res: Response, next: NextFunction
) => {
    const phoneClientRepo = AppDataSource.getRepository(PhoneClient)
    const emailClientRepo = AppDataSource.getRepository(EmailClient)

    const { phone, email } = req.body

    const phoneExists = await phoneClientRepo.findOneBy({ phone })
    const emailExists = await emailClientRepo.findOneBy({ email })


    if (phoneExists || emailExists) {
        throw new AppError("Email or phone already exists", 400);
    }

    next();
};

export default verifyCreateClient;
