
export default function  socketNode(io){

    io.on('connection', () =>{
        console.log('ws connection');
    })

}