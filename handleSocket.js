
           
            const handleSocket=(getAddress,socket,io)=>{
              io.on('set-id',({id,partner_code})=>{
                const address=getAddress(partner_code)
                console.log(address)
                socket.to(address).emit('get-id',id)
              })
              
            
              
            }
            module.exports=handleSocket