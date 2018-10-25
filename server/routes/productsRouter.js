/**
 * Products API Routes
 */

const express = require('express');
const router = express.Router();

// PUll all the product
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
router.post('/', (req, res) => {
    var product = {
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_price: req.body.product_price,
        product_quantity: req.body.product_quantity,
        product_category: req.body.product_category
    }

    req.getConnection(function(error, conn) {
        conn.query('INSERT INTO products SET ?', product, function(err, result) {
            if(err) {
                console.log(err);
            } else {
                console.log(`Added successfully!`);
                res.json(product);
            }
        })
    })
});

// Edit a product
router.put('/:id', (req, res) => {
    var product = {
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_price: req.body.product_price,
        product_quantity: req.body.product_quantity,
        product_category: req.body.product_category
    }
    req.getConnection(function(error, conn) {
        conn.query('UPDATE products SET ? WHERE product_id = ' + req.params.id, product, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Updated successfully!`);
                res.json(product);
            }
        })
    })
});

// Delete a product
router.delete('/:id', (req, res) => {
    req.getConnection(function(error, conn) {
        conn.query('DELETE from products WHERE product_id = ' + req.params.id, function(err, result) {
            if(err) {
                console.log(err);
            } else {
                conn.query('SELECT * FROM products', function(err, rows, fields){
                    if(err) {
                        console.log(err);
                    } else {
                        res.send(rows);
                    }
                })
            }
        })
    })
});

module.exports = router;