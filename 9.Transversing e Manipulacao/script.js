const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');


// innerHTML vem como html
// console.log(animaisLista.innerHTML);

// innerText vem como texto
// console.log(animaisLista.innerText);

const lista = document.querySelector('.animais-lista');


// parentElement mostra o pai do elemento
console.log(lista.parentElement);

// nextElementSibling pega o proximo elemento
console.log(lista.nextElementSibling);

// previousElementSibling pega o anterior elemento
console.log(lista.previousElementSibling);

// children mostra o filho em HTMLcollection
console.log(lista.children);

// Manipulando elementos
const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// Coloca o titulo como ultimo filho de animais
animais.appendChild(titulo);










