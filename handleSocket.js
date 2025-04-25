
           
            const handleSocket=(socket,io)=>{
          
              // sockect id exchange
              io.on('set-id',({id,partner_id})=>{
                console.log(id)
                socket.emit('get-id',id)
              })
              
            
              
            }
            module.exports=handleSocket