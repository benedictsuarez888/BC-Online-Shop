//api routes

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    next();
}, (req, res) => {
    req.getConnection(function(error, conn) {
        conn.query('SELECT * FROM products', function(err, rows, fields){
            if(err) {
                console.log(err);
            } else {
                res.send(rows);
            }
        })
    })
});

// Pull the information of the specific product
router.get('/:id', (req, res) => {
    req.getConnection(function(error, conn) {
        conn.query('SELECT * FROM products WHERE product_id = ' + req.params.id, function(err, rows, fields) {
            if(err) {
                console.log(err);
            } else {
                res.send(rows);
            }
        })
    })
});

// Add a product
var product = {
    
}
router.post('/', (req, res) => {
    req.getConnection(function(error, conn) {
        conn.query('INSERT INTO users SET ?', user, function(err, result) {

        })
    })
});

// Edit a product
router.put('/:id', (req, res) => {
    //SQL Query
});

// Delete a product
router.delete('/:id', (req, res) => {
    //SQL Query
});

module.exports = router;