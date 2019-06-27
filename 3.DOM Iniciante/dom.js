const h1Selecionado = document.querySelector('.titulo');

function clicou() {
  console.log('Clicou corno em', h1Selecionado.innerText);

};

h1Selecionado.addEventListener('click', clicou);

window.document.baseURI;