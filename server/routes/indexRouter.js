/**
 * indexRouter
 */
const express = require('express');
const router = express.Router();

// router.get('/', function(req, res) {
//     res.send('hello world');
// });


router.get('/', (req, res) => {
    res.render('index.pug');
})

router.get('/home', (req, res) => {
    res.render('home.pug');
})


module.exports = router;