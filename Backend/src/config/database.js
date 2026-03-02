const mongoose = require('mongoose');

function ConnectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Connected To DB');
    })
    .catch((err)=>{
        console.log("Not Connected",err)
    })
}

module.exports = ConnectToDB;
