const mongoose = require('mongoose')
async function connectDb(){
    await mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(()=>{
        console.log('db on')
    })
    .catch((err)=>{
        console.log(`error : ${err}`)
    })
}
module.exports = connectDb ;