import { verifyToken } from "../services/auth.service";

export default function  socketNode(io){

    io.on('connection', (socket) =>{
      
        console.log('ws connection');

        socket.on("private_message", ({ content, to }) => {
            console.log(content);
            socket.to(to).emit("private message", {
              content,
              from: socket.id,
            });
          });
    
    })

    io.use(async (socket, next) => {
        const username = socket.handshake.auth.username;
        const user = await verifyToken(socket.handshake.auth.id)
        if (!user) {
          return next(new Error("invalid username"));
        }
        socket.username = username;
        socket.userId = user.Id;
        console.log(socket.id);
        next();
      });

 
}