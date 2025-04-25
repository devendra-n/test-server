
           
            const handleSocket=(io)=>{
              console.log(io.id)
              // sockect id exchange
              io.on('set-id',({id,partner_id})=>{
                console.log(id)
                io.emit('get-id',id)
              })
              
            
              
            }
            module.exports=handleSocket