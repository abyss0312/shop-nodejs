import { Router } from "express";
import { readdirSync } from "fs";

const path_router=`${__dirname}`;
const router = Router();

const cleanFilename = (filename:string) => {
    const file = filename.split(".").shift();
    return file;
}

readdirSync(path_router).filter((filename) => {
    const cleanName = cleanFilename(filename);
    console.log(cleanName);
    if(cleanName !== "index"){
        import(`./${cleanName}.router`).then((moduleRouter) =>{
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});


export {router};