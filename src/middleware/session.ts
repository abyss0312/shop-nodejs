import { NextFunction, Request, Response } from "express";


const checkJWT = (req:Request, response:Response, next:NextFunction) => {

    try{
        const jwtUser = req.headers.authorization || '';
        const jwt = jwtUser.split(' ').pop();
        if(jwt == ''){
            response.status(401);
            response.send("no valido");
        }else{
            next();
        }
       
    }
    catch(e){

        response.status(401);
        response.send();
    }
}

export {checkJWT};