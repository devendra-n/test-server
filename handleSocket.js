           var room_=""
           const randomUid=(e)=>{
             let id=""
             for(let i=0;i<e;i++){
               id+=Math.floor(Math.random()*10)
             }
             return id
           }
           
            const handleSocket=(io)=>{
              console.log(io.id)
              io.on('share_id',e=>{
                console.log(e)
                io.to(e.partner_id).emit('set-id',e.id)
              })
              
            
              
              io.on('cursor',e=>{
                console.log(e)
                io.in(e[1]).emit('cursor',e[0])
              })
              io.on('change',e=>{
                io.in(room_).emit(e)
              })
              io.on('cl',e=>{
                console.log(e)
              })
              
            }
            module.exports=handleSocket