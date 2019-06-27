var pessoa = {
  nome: 'Erick',
  idade: 20,
}

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var menu = {
  width: 800,
  height: 300,
  backgroundColor: '#F34',
}

var bg = menu.backgroundColor;

// Exercicio 

var nome = 'Erick';
var sobrenome = 'Alexandre';

var nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

var btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  console.log('clicou!')
});


