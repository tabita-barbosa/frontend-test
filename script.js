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

    console.log(clientes);
    let pre = document.querySelector('#dataClient');
    pre.textContent = '\n' + JSON.stringify(clientes, '\t', 6);

    localStorage.setItem('MyClientes', JSON.stringify(clientes));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-saveClient').addEventListener('click', addClient);
})


// SLIDES START

const dataSlide = [
    {
        "image": "./assets/img1",
        "title": "Lorem Ipsum?",
        "subtitle": "Simply dummy text of the printing and typesetting industry",
        "text": "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when a unknown printer took a gallery of type and scrambled it. It has suvived five centuries."
    },
    {
        "image": "./assets/img3",
        "title": "Why do we use it?",
        "subtitle": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "text": ""
    },
    {
        "image": "./assets/img5",
        "title": "where does it come from?",
        "subtitle": "Contrary to popular belief, Lorem Ipsum is not a random text",
        "text": ""
    },
    {
        "image": "./assets/img6",
        "title": "Where can i get some?",
        "subtitle": "There are many variations of passages of Lorem Ipsum",
        "text": "There are many of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words wich don't look even slighty believable. The generated Lorem Ipsum is therefore always free from repetition."
    }
]

console.log(dataSlide)

// fazer um map que pegue image, title, subtitle e text e popule nos itens já existentes no HTML
// pegar pela class 

// const slidesFinal = document.querySelectorByClass ('.slides')
// const imagem = document.querySelector('img')
// const title = document.querySelector('h1')
// const subtitle = document.querySelector('h3')
// const paragraph = document.querySelector('p')

// const dados = JSON.parse("./slides.json")
// console.log(dados)

// const getDados = dados.map((slides) =>{
//     document.createElement(img)
// })
// // console.log(slidesFinal)
// function Slider (image, title, subtitle, text){
//     this.image = image,
//     this.title = title;
//     this.subtitle = subtitle;
//     this.text = text
// }


// SLIDES END