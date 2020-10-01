document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const display = document.getElementById('customer');
      const customer = JSON.parse(this.responseText);
      const table = 
      `<ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>`;
      display.innerHTML = table;
    }
  }

  xhr.send();

}

function loadCustomers() {

  let table = '';

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const display = document.getElementById('customers');
      const customers = JSON.parse(this.responseText);
      customers.forEach(function(customer){
        table += 
          `<ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>`;
      });
      display.innerHTML = table;
    }
  }

  xhr.send();

}