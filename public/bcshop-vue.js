(function() {
    var bcshopVue = new Vue ({
        el: '#bcshopVue',
        data: {
            product_name: null,
            product_description: null,
            product_price: null,
            product_quantity: null,
            product_category: null,
            products: []
        },
        data1: {
            product_name: null,
            product_description: null,
            product_price: null,
            product_quantity: null,
            product_category: null,
            products1: []
        },
        created: function() {
            var self = this;
            axios.get('http://localhost:8000/api/products')
                .then(function(res) {
                    self.products = res.data;
                })
                .catch(function(err) {
                    self.products = [];
                });
        },

        created1: function() {
            var self = this;
            axios.get('http://localhost:8000/api/products/' + product1.product_id)
                .then(function(res) {
                    self.products1 = res.data1;
                })
                .catch(function(err) {
                    self.products1 = [];
                });
        },
        methods: {
            addProduct: function() {
                var self = this;
                var payload = {
                    product_name: self.product_name,
                    product_description: self.product_description,
                    product_price: self.product_price,
                    product_quantity: self.product_quantity,
                    product_category: self.product_category,
                };
                axios.post('/api/products', payload)
                    .then(function(res) {
                        self.products = res.data;
                        self.clear();
                        // res.render('index.pug');
                    })
                    .catch(function(err) {
                    });
            },
            clear: function() {
                this.product_name = null;
                this.product_description = null;
                this.product_price = null;
                this.product_quantity = null;
                this.product_category = null;
            },
            deleteProduct: function(product) {
                var self = this;
                axios.delete('/api/products/' + product.product_id)
                    .then(function(res) {
                        var index = -1;
                        for(var i = 0; i < self.products.length; i++) {
                            if (Number(self.products[i].product_id) === Number(product.product_id)){
                                index = i;
                                break;
                            }
                        }
                        self.products.splice(index, 1);
                    })
                    .catch(function(err){

                    });
            },

            // viewProduct: function(){
            //     var self = this;
            //     axios.get('api/products/' + product.product_id)
            //         .then(function(res) {
            //             self.products = res.data;
            //         })
            //         .catch(function(err) {
            //             self.products = [];
            //         });
            // },

            editProduct: function() {
                var self = this;
                var payload = {
                    product_id: self.product_id,
                    product_name: self.product_name,
                    product_description: self.product_description,
                    product_price: self.product_price,
                    product_quantity: self.product_quantity,
                    product_category: self.product_category,
                };
                axios.put('/api/products/' + self.product_id, payload)
                    .then(function(res) {
                        self.products = res.data;
                        self.clear();
                    })
                    .catch(function(err) {
                    });
            }

            // viewProduct: function(product) {
            //     var self = this;
            //     axios.get('/api/products/' + product.product_id)
            //         .then(function(res) {
            //             self.products1 = res.data1;
            //         })
            //         .catch(function(err) {
            //             self.products1 = res.data1;
            //         });
            // }

            // viewProduct: function(product) {
            //     var self = this;
            //     axios.get('/api/products/' + product.product_id)
            //         .then(function(res) {
            //             self.products = res.data;
            //         })
            //         .catch(function(err) {
            //             self.products = res.data;
            //         });
            // }
        }
    });
    console.log(bcshopVue);
})();