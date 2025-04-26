
const app=require("express")()
const handleSocket=require("./handleSocket.js")
const {Server}= require("socket.io");
const {createServer}=require("http")
const {getAddress,setAddres}=require("./store.js")
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
          
          
          io.on("connection",socket=>{
            console.log(socket.id)
            io.to(socket.id).emit('id',setAddres(socket.id))
            handleSocket(getAddress,io,socket)
          })
          
          
      app.get("/",(req,res)=>{
        console.log(req);
        res.json({status:"Working"})
      })    
          server.listen(port,'0.0.0.0',(e)=>{
            console.log(`Websocket: ws://127.0.0.1:${port}`);
          })
