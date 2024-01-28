const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')



//   /m/movie
router.get('/movie', (req, res) => {
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


//post for movie
router.post('/movie', async (req,res)=>{
    //no error of db
    console.log(req.body)
    const newMovie = new Movie(req.body);
    await newMovie.save();
    console.log(newMovie);
    res.redirect('/home');

})





module.exports = router;
