/* Toda função é criada com o construtor Function e por 
isso herda as suas propriedades e métodos. */

//--------Props:
function somar(n1, n2) {
  return n1 + n2;
}
somar(3, 6); //9

console.log(somar.length); //Num de parâmetros
console.log(somar.name);
console.log(Object.getOwnPropertyNames(somar.prototype));
console.log(somar.arguments);

/*-----------.call(this(novoObjeto), arg1, arg2):
Executa a função, sendo possível passarmos 
uma nova referência ao this da mesma.*/
const carro = {
  marca: "Ford",
  ano: 2018
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro.call(); // undefined undefined -> Não tem parâmetro, ou seja this não existe:
//☝🏼 Msm coisa que fazer só -> descricaoCarro()

descricaoCarro.call(carro);
// ☝🏼 Retorna "Ford 2018" -> Define o objeto carro como o novo this pra função.

/*Exemplo real: O objeto atribuído a lista será o
substituído pelo primeiro argumento de call(). */

//Função construtora:
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

//Cria uma função ativo no protótipo da função Dom:
Dom.prototype.ativo = function (classe) {
  console.log("this atual 👇🏽:");
  console.log(this);
  /*Ativa a classe pro elemento criado a 
  partir da função construtora: */
  this.element.classList.add(classe);
};

/* Cria um objeto: */
const lista = {
  element: document.querySelector("ul")
};
//Usa a função presente no protótipo da função construtora:
Dom.prototype.ativo.call(lista, "ativar"); //Ativando nesse elemento a classe "ativar"
console.log(lista);
/* OUTRO jeito menos utilizado:

//Cria uma var com o elemento desejado, usando a função construtora: 
const lista = new Dom("ul");

//Usa a função presente no protótipo da função construtora:
lista.ativo("ativar"); //Ativando nesse elemento a classe "ativar"

console.log(lista);
*/

/*----------.call() em ARRAYS e ARRAY-LIKES: 
Usamos o call nas funções do protótipo do 
construtor Array. Assim podemos estender tds 
os métodos de Array à objetos que se parecem 
com uma Array (array-like). */
Array.prototype.mostreThis = function () {
  /*❗Criamos uma função no construtor nativo, APENAS para 
  entendermos mais, não faça isso NUNCA em desenvolvimento❗ */
  console.log("👇🏽 this em .call() de arrays ou array-likes:");
  console.log(this);
};

const frutas = ["Uva", "Maçã", "Banana"];
frutas.mostreThis(); //Referencia a var frutas, então:
//Retornará -> ['Uva', 'Maçã', 'Banana']

//Usando o método pop (de arrays):
Array.prototype.pop.call(frutas); // Remove Banana
frutas.pop(); // Mesma coisa que a função acima

/*-------------.apply(this, argumentosDaFunção):
Funciona como o call, a única diferença é que os 
args da função são passados APENAS através de uma array. */
const numeros = [3, 4, 6, 1, 34, 44, 32];

Math.max.apply(null, numeros);
//Já o call, recebe cada argumento dividido por vírgula após o this:
Math.max.call(null, 3, 4, 5, 6, 7, 20);

/* Podemos passar null para o valor
de this, caso a função não utilize
o objeto principal para funcionar */

/*--------------.bind(this, arg1, arg2):
Diferente do call e do apply, o bind não irá executar
a função mas sim retornar ela msm (a função) com o novo 
contexto de this. ACEITANDO TAMBÉM, ARGUMENTOS 
EM ARRAYS, assim como o apply❗ */
const li = document.querySelectorAll("li");

const filtrarLi = Array.prototype.filter.bind(li, function (item) {
  return item.classList.contains("ativo");
});

filtrarLi();

//Definindo argumentos depois com o bind:
function imc(altura, peso) {
  return peso / (altura * altura);
}
/*Com o bind definimos o this dessa função como nulo,
e a altura como 1.80. Armazenando isso, numa constante */
const imc180 = imc.bind(null, 1.8);
/* Constante essa que podemos usar depois para 
definir o 2º argumento, antes não definido. */
imc180(70); // 21.6

/* E já que não modificamos a função, podemos 
passar os dois ao msm tempo também, normalmente: */
imc(1.8, 70); // 21.6

//---------------------------Exercícios:
console.warn("Exercícios:");

/* Retorne a soma total de caracteres 
dos parágrafos utilizando reduce */
const paragrafos = document.querySelectorAll("p");
/* Usando o método reduce de array graças ao .call():
(SEM TER QUE TRANSFORMAR EM ARRAY) */
const totalChar = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, i) => {
    return acumulador + i.innerText.length;
  },
  0 //<- Acumulador começa em 0
);

console.log(paragrafos);
const totalP = paragrafos.length;
console.log(
  `Esses ${totalP} parágrafos possuem ${totalChar} caracteres no total`
);

/* Crie uma função que retorne novos elementos
html, com os seguintes parâmetros
tag, classe e conteudo. */
function criarElemento(tag, classe, content) {
  const element = document.createElement(tag);
  //Se eu definir uma classe, ela fica em branco, e não undefined:
  classe ? element.classList.add(classe) : "";
  //Conteúdo da tag ou seja = innerText:
  element.innerText = content;
  //Retorna o elemento criado
  return element;
}

console.log(criarElemento("li", "", "Olá tudo bem? :D"));

/* Crie uma nova função com o .bind() utilizando a anterior como base
essa nova função deverá sempre criar h1 com a
classe titulo. Porém o parâmetro conteudo continuará dinâmico */
const createH1Title = criarElemento.bind(null, "h1", "titulo");

console.log(createH1Title("Eu sou um título :D"));
