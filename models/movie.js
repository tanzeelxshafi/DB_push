const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const newMovie = new Schema({
    title : {
        type : String,
        require : true
    },
    year : {
        type : Number,
        require : true
    },
    score : {
        type : Number
    },
    rating : {
        type : String
    },

})

const Movie = mongoose.model('Movie' , newMovie)

module.exports = Movie;






// const Movie=mongoose.model('Movie',movieSchema)
// new Movie({
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating:'R'
// });