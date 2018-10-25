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
        methods: {
            addProduct: function() {
                var self = this;
                var payload = {
                    product_name: self.product_name,
                    product_description: self.product_name,
                    product_price: self.product_price,
                    product_quantity: self.product_quantity,
                    product_category: self.product_category,
                }
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
            }
        }
    });
    console.log(bcshopVue);
})();