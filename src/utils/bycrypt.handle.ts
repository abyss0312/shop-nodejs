import{hash,compare} from "bcryptjs";


const encrypt = async(text:string) =>{

    const passwordHash = await hash(text, 6);
    return passwordHash;
}

const verify = async (text:string, hash:string) =>{
    const isCorrect = await compare(text,hash);
    return isCorrect;
}

export{encrypt,verify};