const express = require('express');
const router = express.Router();

// Shows the list of all products
router.get('/', (req, res, next) => {
    next();
}, (req, res) => {
    // SQL Query
});

// Pull the information of the specific product
router.get('/:id', (req, res) => {
    //SQL Query
});

// Add a product
router.post('/', (req, res) => {
    //SQL Query
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