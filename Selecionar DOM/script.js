// Pegar elementos pelo ID
const animais = document.getElementById('animais');
console.log(animais);


// Pegar Elementos pelo nome da classe
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection.length);

// Pegar elementos de forma geral (pelo seletor CSS)
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const imagens = document.querySelectorAll('img');
console.log(imagens);

