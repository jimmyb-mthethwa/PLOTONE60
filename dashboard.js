console.log('PLOT160 Dashboard Loaded');
const customers = JSON.parse(localStorage.getItem('customers')) || [];
const products = JSON.parse(localStorage.getItem('products')) || [];

let inventoryCount = 0;

products.forEach(product=>{
    inventoryCount += Number(product.stock);
});

document.getElementById('totalCustomers').textContent = customers.length;
document.getElementById('totalProducts').textContent = products.length;
document.getElementById('inventoryItems').textContent = inventoryCount;