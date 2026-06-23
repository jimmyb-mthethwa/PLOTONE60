let customers = JSON.parse(localStorage.getItem('customers')) || [];

function renderCustomers(){
    'use strict';

    const customerList = document.getElementById('customerList');

    customerList.innerHTML = '';

    customers.forEach((customer, index)=>{

        customerList.innerHTML += `
            <div class="list-item">
                <div>
                    <h3>${customer.name}</h3>
                    <p>${customer.phone}</p>
                </div>

                <button onclick="deleteCustomer(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}
function addCustomer(){

    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;

    if(name === '' || phone === ''){
        alert('Please fill all fields');
        return;
    }

    customers.push({
        name,
        phone
    });

    localStorage.setItem('customers', JSON.stringify(customers));

    renderCustomers();

    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
}

function deleteCustomer(index){
       customers.splice(index,1);

    localStorage.setItem('customers', JSON.stringify(customers));

    renderCustomers();
}

renderCustomers();