const express = require('express');
const app = express();
const connectDb = require('./db/index.js')
const Movie = require('./models/movie')
const Song=require('./models/song')
//promise and call back
connectDb()

//1 middleware
app.use(express.json());
//middleware(express-method({configuration of method}))
app.use(express.urlencoded({extended:true}))

app.get('/song', (req, res) => {
    res.send(`
    <div>
    <form action="/song" method="post">
    <label for="title">Input 1:</label>
    <input type="text" id="title" name="title" required><br>

    <label for="movie">Input 2:</label>
    <input type="text" id="movie" name="movie" required><br>

    <label for="year">Input 3:</label>
    <input type="text" id="year" name="year" required><br>

    <label for="rating">Input 4:</label>
    <input type="text" id="rating" name="rating" required><br>

    <button type="submit">Submit</button>
</form>
</div>
`
  );
})

//for Movie Schema
app.get('/movie', (req, res) => {
    res.send(`
    <div>
    <form action="/movie" method="post">
    <label for="title">Input 1:</label>
    <input type="text" id="title" name="title" required><br>

    <label for="year">Input 2:</label>
    <input type="text" id="year" name="year" required><br>

    <label for="score">Input 3:</label>
    <input type="text" id="score" name="score" required><br>

    <label for="rating">Input 4:</label>
    <input type="text" id="rating" name="rating" required><br>

    <button type="submit">Submit</button>
</form>
</div>
`
  );
})
//post for song
app.post('/song', async (req,res)=>{
    //no error of db
    console.log(req.body)
    const newSong = new Song(req.body);
    await newSong.save();
    console.log(newSong);
    res.redirect('/home');

})
//post for movie
app.post('/movie', async (req,res)=>{
    //no error of db
    console.log(req.body)
    const newMovie = new Movie(req.body);
    await newMovie.save();
    console.log(newMovie);
    res.redirect('/home');

})

// const p1 = (req,res , next)=> {
//     console.log('middleware 1');
//     next()
// }

// const p2 = (req,res , next)=> {
//     console.log('middleware 2');
//     res.status = 420; 
//     next()
// }

//err,req,res,next
// app.get('/mid' , p1 , p2 , (req,res) =>{
//         const status = res.status;
//         res.send(`middleware status : ${status}`)
// } )


app.get('/home' , (req ,res)=>{
    res.send('home hit');
})


app.listen(3000 , ()=>{
    console.log('server is on')
})


// {
//     title: 'Amadeus',
//     movie: 1986,
//     movie: 9.2,
//     rating:'R'
// }

// const movieSchema=new mongoose.Schema({
//     title: String,
//     movie: Number,
//     movie: Number,
//     rating:String
// })
