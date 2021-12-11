//1-----------------------Introdução:
console.warn("Exemplo1 - Prototype:");

/* Prototype -> Propriedade de funções construtoras
que permite adicionar novos methods e funções a ela.
Sem que apareçam diretamente nos objetos criados
com ela, como se fosse um atributo. Ao invés disso,
ela aparece apenas dentro da prop prototype. */
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
//Objeto criada com a função construtora acima:
const andre = new Pessoa("André", 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined -> Objeto criado pela função construtora

//Podemos adicionar coisas a prop prototype:
Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};
Pessoa.prototype.correr = function () {
  return this.nome + " correu";
};
console.log(andre.andar());
console.log(andre.correr());
/* André pode andar e correr, mas tais funções
ficam 'escondidas' dentro da prop prototype: */
console.log(andre);
// O mesmo acontece pra função construtora:
console.log(Pessoa);
/* A qual terá as funções criadas dentro da prototype
armazenadas apenas dentro dela mesmo: */
console.log(Pessoa.prototype);

/* Graças a herança de prototype, o 
objeto possuirá os seguintes métodos:

Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();
*/

//2------------------------------------------
console.warn("Exemplo2 - Construtores Nativos:");

const pais = "Brasil";
//Construtor nativo String:
const cidade = new String("Rio");

console.log(pais.charAt(0)); // B <- Primeiro caractere da String
console.log(cidade.toUpperCase()); // RIO

console.log(String.prototype);

//3------------------------------------------
console.warn("Exemplo3 - Objeto VS Protótipos:");

const lista = document.querySelectorAll("li");

//Jeito ANTIGO de transformar uma var em array:
Array.prototype.slice.call(lista);
//Jeito ATUAL:
Array.from(lista);

// Retorna uma lista com os métodos / propriedades da var:
const variable = Number;
//☝🏼 String, Number, Array, Math...
console.log(variable + " Methods:");
console.log(Object.getOwnPropertyNames(variable));
console.log(variable + " Properties:");
console.log(Object.getOwnPropertyNames(variable.prototype));

//4------------------------------------
console.warn("Exemplo4 - Exercícios:");

/* Crie uma função construtora de Pessoas
Deve conter nome, sobrenome e idade
Crie um método no protótipo que retorne
o nome completo da pessoa */
function Person(nome, sobrenome, idade) {
  this.name = nome;
  this.surname = sobrenome;
  this.age = idade;
}
//Metodo no prototype:
Person.prototype.fullName = () => {
  const fullName = this.name + this.surname;
  return fullName;
};

/* Liste os métodos acessados por
dados criados com NodeList,
HTMLCollection, Document */
console.groupCollapsed("Native Constructor Methods:");
console.log("NodeList:");
console.log(Object.getOwnPropertyNames(NodeList.prototype));

console.log("HTMLCollection:");
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));

console.log("Document:");
console.log(Object.getOwnPropertyNames(Document.prototype));
console.groupEnd();

/* Liste os construtores dos dados abaixo:
(Importante saber pois cada construtor 
possui métodos e props diferentes) */
const liTag = document.querySelector("li");

console.groupCollapsed("Constructors from each data & prop:");
console.log("liTag -> " + liTag.constructor.name);
console.log("liTag.click -> " + liTag.click.constructor.name);
console.log("liTag.innerText -> " + liTag.innerText.constructor.name);
console.log("liTag.value -> " + liTag.value.constructor.name);
console.log("liTag.hidden -> " + liTag.hidden.constructor.name);
console.log("liTag.offsetLeft -> " + liTag.offsetLeft.constructor.name);

const varia = liTag.hidden.constructor.name;
console.log("liTag.hidden.constructor.name -> " + varia.constructor.name);

//console.log("liTag.click() -> " + liTag.click().constructor.name);
// ☝🏼 Não existe constructor de undefined
console.groupEnd();
