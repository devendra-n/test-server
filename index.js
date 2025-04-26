
const app=require("express")()
const handleSocket=require("./handleSocket.js")
const {Server}= require("socket.io");
const {createServer}=require("http")
const {getAddress,delAddress,setAddres}=require("./store.js")
const cors=require("cors")
const port=3424;
const server=createServer(app)
const coreop={
    "origin": "*",
  "methods": ["GET,HEAD,PUT,PATCH,POST,DELETE"],
   credentials:true
  
}
app.use(cors(coreop))
          const io=new Server(server,{
            cors:{
             origin:"*",
             methods:["GET","POST"],
             
            }
          }) 
<<<<<<< HEAD
          
          io.on("connection",socket=>{
            socket.emit('id',setAddres(socket.id))
            handleSocket(getAddress,delAddress,io,socket)
=======
          
          
          io.on("connection",socket=>{
            console.log(socket.id)
            io.to(socket.id).emit('id',setAddres(socket.id))
            handleSocket(getAddress,io,socket)
>>>>>>> 2afd4310f6c5cc61d7910f0d574363a76696cfd8
          })
          
          
      app.get("/",(req,res)=>{
        console.log(req);
        res.json({status:"Working"})
      })    
          server.listen(port,'0.0.0.0',(e)=>{
            console.log(`Websocket: ws://127.0.0.1:${port}`);
          })
