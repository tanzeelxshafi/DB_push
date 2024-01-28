const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const newSong=new Schema({
    title:{
        type: String,
        require:true
    },
    movie:{
        type:String,
        require:true
    },
    year:{
        type:Number
    },
    rating:{
        type:Number
    }
})

const Song=mongoose.model('Song',newSong)
module.exports=Song;