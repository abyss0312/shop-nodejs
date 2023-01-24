import { generateToken } from "../utils/jwt.handle";
import { encrypt, verify } from "../utils";
import { User } from "../models";
import { LoginDto, SignupUserDto } from "../interfaces";




const  loginUserService = async (user:LoginDto) => {

   
    try{
        //const passCrypt = await encrypt(user.password);
        let userExist = await  User.findOneBy({username: user.username});
       console.log(userExist)
       if(userExist == null){

        return 'Usuario no existe';
       }
       let passCorrect = await verify(user.password,userExist.password);
       console.log(passCorrect)

       if(passCorrect == false){
            return 'password incorrect';
       }

       const token = await generateToken(userExist.Id);

       userExist.token = `Bearer ${token}`;

        await User.save(userExist);

        return {id:userExist.Id, token:token}
    

    }catch(ex){
        console.log(ex);
    }



}

const  RegisterUserService = async (user: SignupUserDto) => {

      const passCrypt = await encrypt(user.password);

      const userResgister = new User();

      userResgister.username= user.username;
      userResgister.password = passCrypt;
      userResgister.firstname = user.firstname;
      userResgister.lastname = user.lastname;
      userResgister.email = user.email;
      userResgister.createdDate = new Date();
      userResgister.userType = 1;

     try{ 
       // await userResgister;
        await User.save(userResgister);
        return {data:'creado'}
     }

     catch(ex){
        console.log(ex)
     }



    
}

const verifyToken = async (user:number ) =>{

    try{
   /*  
        const {token,Id,username} = await User.findOneBy({Id:user});
        if(token == null || token == ""){
            return "invalido";
        }

        return {Id,username}; */

        return {Id:1, username:"john"};
    }
    catch(ex){

    }

}


export {loginUserService,RegisterUserService,verifyToken};




