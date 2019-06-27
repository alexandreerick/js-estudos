const menu = document.querySelector('.menu');

// Adiciona classe
menu.classList.add('ativo');

// Remove classe
menu.classList.remove('azul');

// Adiciona ou remove dependendo se tiver ou não
menu.classList.toggle('azul');

// Verifica se contem uma classe
if(menu.classList.contains('azul')) {
  menu.classList.add('possuiAzul');
}


// Atributos
const animais = document.querySelector('.animais');
console.log(animais.attributes);

// Pega o atributo
const img = document.querySelector('img');
console.log(img.getAttribute('alt'));

img.setAttribute('alt', 'É uma raposa');


// console.log(menu.classList);

// Exercicios

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// Remover a classe ativo de todos os itens do menu e manter apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Modifique o href do link externo do menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', '#loco');
