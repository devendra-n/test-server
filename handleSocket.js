

           
            const handleSocket=(getAddress,socket,io)=>{

              // Exchanging socket id with the help of pairing code

              io.on('set-id',(code)=>{
                const address=getAddress(code)
              
                socket.to(address).emit('get-id',io.id)
                socket.to(io.id).emit('get-id',address)
              })
              // session exchange 
              io.on('session',({id,data})=>{
                socket.to(id).emit('session',data)
              })
              // editor value exchange
              io.on('change',({id,data})=>{
                socket.to(id).emit('change',data)
              })

              
              
            
              
            }
            module.exports=handleSocket