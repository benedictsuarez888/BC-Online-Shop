/**
 * indexRouter
 */
const express = require('express');
const router = express.Router();

// router.get('/', function(req, res) {
//     res.send('hello world');
// });


router.get('/home', (req, res) => {
    res.render('index.pug');
})

router.get('/', (req, res) => {
    res.render('home.pug');
})

// router.get('/edit/:id', (req, res) => {
//     req.getConnection(function(error, conn){
//         conn.query('SELECT * FROM products WHERE product_id = ' + req.params.id, function(err, row, field){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(row);
//             }
//         })
//     })
// })

router.get('/edit/:id', (req, res) => {
    req.getConnection(function(error, conn) {
        conn.query('SELECT * FROM products WHERE product_id = ' + req.params.id, function(err, rows, fields) {
            if(err) {
                console.log(err);
            } else {
                res.render('editProduct.pug', rows);
                // console.log(editProduct)
            }
        })
    })
})


module.exports = router;