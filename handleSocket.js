
           
            const handleSocket=(io)=>{
              console.log(io.id)
              // sockect id exchange
              io.on('set-id',({id,partner_id})=>{
                io.to(partner_id).emit('get-id',id)
              })
              
            
              
            }
            module.exports=handleSocket