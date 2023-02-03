import { guid } from "../utils/radomId.utils";
import { verifyToken } from "./auth.service";



export function SocketService (io:any) {

    io.on('connection', (socket) =>{
      
        console.log('ws connection');
        socket.join(socket.userID)
        const users = [];
        for (let [id, socket] of io.of("/").sockets) {
          users.push({
            userID: socket.userID,
            username: socket.username,
            sessionID: socket.sessionID
          });
        }
        console.log(users);
        socket.emit("users", users);

        socket.broadcast.emit("user connected", { 
          userID: socket.id,
          username: socket.username,
          sessionID: socket.sessionID,
          self:false,
        });

        socket.on("private_message", ({ content, to }) => {
            socket.to(to).to(socket.userID).emit("private_message", {
              content,
              from: socket.id,
            });
          });

          socket.on("disconnect", async() => {
            const matchingSockets = await io.in(socket.userID).allSockets();
             const isDisconnected = matchingSockets.size === 0;
            if(isDisconnected){
              socket.broadcast.emit("disconnect_user",{
                id:socket.id
              });
            }
          });
       
       
    })

    io.use(async (socket, next) => {
        const username = socket.handshake.auth.username;
         const user = await verifyToken(socket.handshake.auth.id)
        if (user == "invalido") {
          return next(new Error("invalid username"));
        } 
        if(user.sessionID == ""){
            socket.sessionID = guid();
        }
        else{
            socket.sessionID = user.sessionID;
        }
        socket.username = username;
        socket.userID = user.Id;
        console.log(socket.id);
        next();
      }); 

}


