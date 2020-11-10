let clientes = [];

const addClient = (e) => {
    e.preventDefault();
    let cliente = {
        name: document.getElementById('name').value,
        born: document.getElementById('born').value,
        driverNum: document.getElementById('driver-num').value,
        driverDate: document.getElementById('driver-date').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('email').value,
        respName: document.getElementById('respName').value,
        respTel: document.getElementById('respTel').value
    }
    clientes.push(cliente);
    document.forms[0].reset();

    let pre = document.querySelector('#dataClient');
    pre.textContent = '\n' + JSON.stringify(clientes, '\t', 6);

    localStorage.setItem('MyClientes', JSON.stringify(clientes));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-saveClient').addEventListener('click', addClient);
})
