const img = document.querySelector('img');

// function callback() {
//   console.log('loco')  
// }

// img.addEventListener('click', callback);


//      ---------------------------          ///

// function callback(event) {
//   console.log(event)  
// }

// img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  // console.log(event.currentTarget)
  console.log(event.target)

}

animaisLista.addEventListener('click', callbackLista)

// console.log(animaisLista);

const linkExterno = document.querySelector('a[href^="http"]');

// preventDefault previne que um link seja acionado
function handleLinkExterno(event) {
  event.preventDefault();
console.log(event);
}


linkExterno.addEventListener('click', handleLinkExterno);







