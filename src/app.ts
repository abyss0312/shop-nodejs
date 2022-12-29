import "dotenv/config";
import "reflect-metadata"
import express from "express";
import cors from "cors";
import {router} from "./routes";
import {  initDB } from "./config/mysql";

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

initDB();


app.listen(port, () => console.log('listo' + port));