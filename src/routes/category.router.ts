
import { Request, Response, Router } from "express";
import { MysqlError } from "mysql";
import { checkJWT } from "../middleware/session";


const router = Router();

router.get('/', checkJWT, (req: Request, res:Response) => {

    res.send({data:'auth'})

});

export{router};