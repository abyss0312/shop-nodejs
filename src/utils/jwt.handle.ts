import {sign, verify} from "jsonwebtoken";

const jwtSecret = process.env.SECRET || 'tojebadwd';

const generateToken =async (id:string) => {

    const jwt =  sign({id},jwtSecret)
    return jwt;
    
}

const verifyToken = async () => {
    
}

export{generateToken,verifyToken};


