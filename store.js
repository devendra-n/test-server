const db=[];


const getUniqueCode=(e)=>{
    let code='';
    for (let i=0; i<e;i++){
        code+=Math.floor(Math.random()*10)
    }
    return code
}

const checkDB=(key,value)=>{
    for (let i=0;i<db.length;i++){
        if(db[i][key]==value) return true 
    }
    return false
}


const setAddres=(e)=>{
    let generatedCode=getUniqueCode(6)
    while(checkDB('code',generatedCode)){
        generatedCode=getUniqueCode(6)
    }
    db.push({code:generatedCode,address:e})
    console.log(db)
    return generatedCode
}

const getAddress=(e)=>{
    console.log(db)
return db.filter(j=>{
    return j.code==e
})[0].address
}
module.exports={getAddress,setAddres}