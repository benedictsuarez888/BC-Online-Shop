/**
 * Products API Routes
 */

const express = require('express');
const router = express.Router();
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data.json', { products: [] });

// Pull all the product
router.get('/', (req, res, next) => {
    next();
}, (req, res) => {
    // req.getConnection(function(error, conn) {
    //     conn.query('SELECT * FROM products', function(err, rows, fields){
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             res.send(rows);
    //         }
    //     })
    // })
    res.json(store.get('products'));
});

// Pull the information of the specific product
router.get('/:id', (req, res) => {
    let product = {};
    const products = store.get('products');
    product = products.find(products => products.product_id === req.params.id);
    res.json(product);
    // req.getConnection(function(error, conn) {
    //     conn.query('SELECT * FROM products WHERE product_id = ' + req.params.id, function(err, rows, fields) {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             res.send(rows);
    //         }
    //     })
    // })
});

// Add a product
router.post('/', (req, res) => {
    const products = store.get('products');
    const newProduct = {
        product_id: products.length > 0 ? products[products.length - 1].product_id + 1 : 1,
        product_description: req.body.product_description,
        product_price: req.body.product_price,
        product_quantity: req.body.product_quantity,
        product_category: req.body.product_category
    }
    // var product = {
    //     product_name: req.body.product_name,
    //     product_description: req.body.product_description,
    //     product_price: req.body.product_price,
    //     product_quantity: req.body.product_quantity,
    //     product_category: req.body.product_category
    // }

    products.push(newProduct);
    store.set('products', products);

    // req.getConnection(function(error, conn) {
    //     conn.query('INSERT INTO products SET ?', product, function(err, result) {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log(`Added successfully!`);
    //             res.json(product);
    //         }
    //     })
    // })
});

// Edit a product
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const products = store.get('products');

    for (let i = 0; i < products.length; i++) {
        if(products[i].id === id) {
            products.product_name = req.body.product_name,
            products.product_description = req.body.product_description,
            products.product_price = req.body.product_price,
            products.product_quantity = req.body.product_quantity,
            products.product_category = req.body.product_category
        }
    }
    // var product = {
    //     product_name: req.body.product_name,
    //     product_description: req.body.product_description,
    //     product_price: req.body.product_price,
    //     product_quantity: req.body.product_quantity,
    //     product_category: req.body.product_category
    // }
    // req.getConnection(function(error, conn) {
    //     conn.query('UPDATE products SET ? WHERE product_id = ' + req.params.id, product, function(err, result) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(`Updated successfully!`);
    //             res.json(product);
    //         }
    //     })
    // })

    store.set('products', products);
    res.json(store.get('products'));
});

// Delete a product
router.delete('/:id', (req, res) => {
    // req.getConnection(function(error, conn) {
    //     conn.query('DELETE from products WHERE product_id = ' + req.params.id, function(err, result) {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             conn.query('SELECT * FROM products', function(err, rows, fields){
    //                 if(err) {
    //                     console.log(err);
    //                 } else {
    //                     res.send(rows);
    //                 }
    //             })
    //         }
    //     })
    // })

    const id = req.params.id;
    const products = store.get('products');
    const newProducts = products.filter(product => Number(products.product_id) !== Number(id));

    store.set('products', newProducts);
    res.json(newProducts);
});

module.exports = router;