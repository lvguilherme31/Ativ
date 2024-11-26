// Gerenciamento de Sessão
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    if (username) {
        sessionStorage.setItem('username', username);
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('product-form-container').style.display = 'block';
        document.cookie = "lastAccess=" + new Date().toLocaleString();
        alert('Login realizado com sucesso!');
    }
});

// Verificação de Login
window.onload = function() {
    var username = sessionStorage.getItem('username');
    if (username) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('product-form-container').style.display = 'block';
        var lastAccess = getCookie('lastAccess');
        if (lastAccess) {
            alert('Último acesso: ' + lastAccess);
        }
    }
};

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// Cadastro de Produtos
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var product = {
        barcode: document.getElementById('barcode').value,
        description: document.getElementById('description').value,
        cost: document.getElementById('cost').value,
        price: document.getElementById('price').value,
        expiry: document.getElementById('expiry').value,
        stock: document.getElementById('stock').value,
        manufacturer: document.getElementById('manufacturer').value
    };
    addProductToTable(product);
    document.getElementById('product-form').reset();
});

function addProductToTable(product) {
    var table = document.getElementById('products-list');
    var row = table.insertRow();
    row.insertCell(0).innerHTML = product.barcode;
    row.insertCell(1).innerHTML = product.description;
    row.insertCell(2).innerHTML = product.cost;
    row.insertCell(3).innerHTML = product.price;
    row.insertCell(4).innerHTML = product.expiry;
    row.insertCell(5).innerHTML = product.stock;
    row.insertCell(6).innerHTML = product.manufacturer;
}
