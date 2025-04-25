
const app=require("express")()
const handleSocket=require("./handleSocket.js")
const {Server}= require("socket.io");
const {createServer}=require("http")
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
          var room_id=0
          
          io.on("connection",socket=>{
            handleSocket(socket)
          })
          
          
      app.get("/",(req,res)=>{
        console.log(req);
        res.json({status:"Working"})
      })    
          server.listen(port,'0.0.0.0',(e)=>{
            console.log(`Websocket: ws://127.0.0.1:${port}`);
          })
