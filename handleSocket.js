
           
            const handleSocket=(socket,io)=>{
              console.log(io.id)
              // sockect id exchange
              io.on('set-id',({id,partner_id})=>{
                console.log(id)
                sockect.emit('get-id',id)
              })
              
            
              
            }
            module.exports=handleSocket