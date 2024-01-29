const express = require('express');
const router = express.Router();
const Song = require('../models/song')



router.get('/song', (req, res) => {
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


//post for song
router.post('/song', async (req,res)=>{
    //no error of db
    console.log(req.body)
    const newSong = new Song(req.body);
    await newSong.save();
    console.log(newSong);
    res.redirect('/home');

})



module.exports = router;