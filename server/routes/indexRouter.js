/**
 * indexRouter
 */
const express = require('express');
const router = express.Router();

// router.get('/', function(req, res) {
//     res.send('hello world');
// });

router.get('/', function getIndexPage(req, res) {
    res.render('index.pug');
})

module.exports = router;