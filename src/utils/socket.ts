import { verifyToken } from "../services/auth.service";

export default function  socketNode(io){

    io.on('connection', (socket) =>{
      
        console.log('ws connection');
        const users = [];
        for (let [id, socket] of io.of("/").sockets) {
          users.push({
            userID: id,
            username: socket.username,
          });
        }
        console.log(users);
        socket.emit("users", users);

        socket.broadcast.emit("user connected", {
          userID: socket.id,
          username: socket.username,
        });

        socket.on("private_message", ({ content, to }) => {
            socket.to(to).emit("private_message", {
              content,
              from: socket.id,
            });
          });
       
       
    })

     io.use(async (socket, next) => {
        const username = socket.handshake.auth.username;
    /*     const user = await verifyToken(socket.handshake.auth.id)
        if (!user) {
          return next(new Error("invalid username"));
        } */
        socket.username = username;
        //socket.userId = user.Id;
        console.log(socket.id);
        next();
      }); 

 
}