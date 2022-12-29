import { Response } from "express";


const handleHTTP = (res:Response, error:string, errorCode:number) =>{

    res.status(errorCode);
    res.send({error});

};


export {handleHTTP}