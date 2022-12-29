import { Request,Response } from "express";
import { loginUserService } from "../services/auth.service";


const registerController = async (req:Request,res:Response) =>{};

const loginController = async (req:Request,res:Response) =>{
    const loginService = await loginUserService();

    res.send(loginService);
};


export{registerController,loginController};