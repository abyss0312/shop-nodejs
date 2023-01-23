import { Request,Response } from "express";
import { loginUserService, RegisterUserService } from "../services/auth.service";


const registerController = async (req:Request,res:Response) =>{
    const registerService = await RegisterUserService(req.body);

    res.send(registerService);
};

const loginController = async (req:Request,res:Response) =>{
    const loginService = await loginUserService(req.body);

    res.send(loginService);
};


export{registerController,loginController};