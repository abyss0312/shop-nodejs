import { generateToken } from "../utils/jwt.handle";
import { encrypt } from "../utils/bycrypt.handle";
import { TokenClass } from "typescript";
import { User } from "../models";



const  loginUserService = async () => {

    const passCrypt = await encrypt("jelloo");
    console.log(passCrypt);

    const token = await generateToken("3");
    console.log('bearer' + token);
   // return `bearer ${token}`;

    //const user = await User.findOneBy({ Id: 1 });
    const user = await User.find();
    console.log(user);
    return user;
}

const  RegisterUserService = async () => {}


export {loginUserService,RegisterUserService};




