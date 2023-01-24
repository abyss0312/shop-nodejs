import "dotenv/config";
import "reflect-metadata"
import express from "express";
import cors from "cors";
import {router} from "./routes";
import {  initDB } from "./config/mysql";
import http from 'http';
import {Server as webSocket} from 'socket.io';
import socketNode from "./utils/socket";



const app = express();
const server = http.createServer(app);
const io = new webSocket(server, {
    cors:{
        origin:"http://localhost:8100",
        methods:["GET","POST"]
    }
});
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/', router);

//initDB();

socketNode(io);


server.listen(port, () => console.log('listo' + port));