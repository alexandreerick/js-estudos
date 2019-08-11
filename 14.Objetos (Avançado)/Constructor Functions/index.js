function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 2000);
const fiat = new Carro("Fiat", 4000);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const bmw = new Carro2("BMW", 5000);

// Exemplo
// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   }
// };

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  };
  this.ativar = function() {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");

const lastLi = new Dom("li:last-child");
