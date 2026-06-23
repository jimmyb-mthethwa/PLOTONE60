let products = JSON.parse(localStorage.getItem('products')) || [];

function renderProducts(){

    const productList = document.getElementById('productList');

    productList.innerHTML = '';

    products.forEach((product, index)=>{

        productList.innerHTML += `
            <div class="list-item">
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: R${product.price}</p>
                    <p>Stock: ${product.stock}</p>
                </div>

                <button onclick="deleteProduct(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function addProduct(){
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const stock = document.getElementById('productStock').value;

    if(name === '' || price === '' || stock === ''){
        alert('Please fill all fields');
        return;
    }

    products.push({
        name,
        price,
        stock
    });

    localStorage.setItem('products', JSON.stringify(products));

    renderProducts();

    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productStock').value = '';
}
function deleteProduct(index){

    products.splice(index,1);

    localStorage.setItem('products', JSON.stringify(products));

    renderProducts();
}

renderProducts();
