import { loginController, registerController } from "../controllers/auth.controller";
import { Router } from "express";


const router = Router();

router.post('/login', loginController);
router.post('/register',registerController);

export{router};