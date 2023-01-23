import {sign, verify} from "jsonwebtoken";

const jwtSecret = process.env.SECRET || 'tojebadwd';

const generateToken =async (id:number) => {

    const jwt =  sign({id},jwtSecret)
    return jwt;
    
}


export{generateToken};


