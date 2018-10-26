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

router.get('/edit/:id', function(req, res) {
    // product_id = req.params.id;
    // res.render('editProduct.pug');
    var i = 
    res.render('editProduct.pug', {  });
})


module.exports = router;