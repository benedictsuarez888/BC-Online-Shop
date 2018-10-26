(function() {
    var products = [];
    var products1 = [];
    var pageTitle = document.getElementById('pageTitle');
    var productsTable = document.getElementById('productsTable');

    axios.get('http://localhost:8000/api/products')
        .then(function(res) {
            products = res.data;
            renderProducts(products);
        })
        .catch(function(err) {
            products = [];
        });

    var clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function(event) {
        var inputs = document.getElementsByClassName('form-control');
        for(var i = 0; i < inputs.length; i++) {
            var item = inputs[i];
            item.value = '';
        }
    });

    var addProductForm = document.getElementById('addProductForm');
    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var nameInput = document.getElementById('product_name');
        var descriptionInput = document.getElementById('product_description');
        var priceInput = document.getElementById('product_price');
        var quantityInput = document.getElementById('product_quantity');
        var categoryInput = document.getElementById('product_category');
        var payload = {
            product_name: nameInput.value,
            product_description: descriptionInput.value,
            product_price: priceInput.value,
            product_quantity: quantityInput.value,
            product_category: categoryInput.value
        };
        axios.post('http://localhost:8000/api/products', payload)
            .then(function(res) {
                products = res.data;
                renderProducts(products);
            })
            .catch(function(err) {
                products = [];
            });
    });

    function renderProducts(products) {
        productsTable.innerHTML = '';
        var headers = ['ID', 'Name', 'Description', 'Price', 'Quantity', 'Category'];
        var thead = document.createElement('tr');
        headers.forEach(function(header) {
            var td = document.createElement('td');
            td.textContent = header;
            thead.append(td);
        });
        productsTable.append(thead);
        products.forEach(function(product) {
            
            var tr = document.createElement('tr');
            var tdId = document.createElement('td');
            var tdName = document.createElement('td');
            var tdDescription = document.createElement('td');
            var tdPrice = document.createElement('td');
            var tdQuantity = document.createElement('td');
            var tdCategory = document.createElement('td');
            tdId.textContent = product.product_id;
            tdName.textContent = product.product_name;
            tdDescription.textContent = product.product_description;
            tdPrice.textContent = product.product_price;
            tdQuantity.textContent = product.product_quantity;
            tdCategory.textContent = product.product_category;
            tr.append(tdId);
            tr.append(tdName);
            tr.append(tdDescription);
            tr.append(tdPrice);
            tr.append(tdQuantity);
            tr.append(tdCategory);
            productsTable.append(tr);
        });

    }

    function renderViewProduct(products1) {
        products1.forEach(function(product1) {
            // var idLabel = document.createElement('label');
            // var idProduct = document.createElement('input');
            // var nameLabel = document.createElement('label');
            // var nameProduct = document.createElement('input');
            // var descriptionLabel = document.createElement('label');
            // var descriptionProduct = document.createElement('input');
            // var priceLabel = document.createElement('label');
            // var priceProduct = document.createElement('input');
            // var quantityLabel = document.createElement('label');
            // var quantityProduct = document.createElement('input');
            // var categoryLabel = document.createElement('label');
            // var categoryProduct = document.createElement('input');
            // idLabel.textContent = "Product ID";
            // idProduct.textContent = product1.product_id;
            // nameLabel.textContent = "Name";
            // nameProduct.textContent = product1.product_name;
            // descriptionLabel.textContent = "Description";
            // descriptionProduct.textContent = product1.product_description;
            // priceLabel.textContent = "Price";
            // priceProduct.textContent = product1.product_price;
            // quantityLabel.textContent = "Quantity";
            // quantityProduct.textContent = product1.product_quantity;
            // categoryLabel.textContent = "Category";
            // categoryProduct.textContent = product1.product_category;

            
            var inputId = document.createElement('input');
            var inputName = document.createElement('input');
            var inputDescription = document.createElement('input');
            var inputPrice = document.createElement('input');
            var inputQuantity = document.createElement('input');
            var inputCategory = document.createElement('input');
            inputId.textContent = product.product_id;
            inputName.textContent = product.product_name;
            inputDescription.textContent = product.product_description;
            inputPrice.textContent = product.product_price;
            inputQuantity.textContent = product.product_quantity;
            inputCategory.textContent = product.product_category;
            input.append(inputId);
            input.append(tinputName);
            input.append(inputDescription);
            input.append(inputPrice);
            input.append(inputQuantity);
            input.append(inputCategory);
            products1.append(label);

        });
    }
})();