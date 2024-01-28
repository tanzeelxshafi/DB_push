const express = require('express');
const app = express();
const connectDb = require('./db/index.js')
const moviesRoutes = require('./routes/movies');
const songRoutes = require('./routes/songs')
//promise and call back
connectDb()

//body-parser middleware
app.use(express.json());
//middleware(express-method({configuration of method}))
app.use(express.urlencoded({extended:true}))





app.use('/' , moviesRoutes);
app.use('/' , songRoutes );

app.get('/home' , (req ,res)=>{
    res.send('home hit');
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
