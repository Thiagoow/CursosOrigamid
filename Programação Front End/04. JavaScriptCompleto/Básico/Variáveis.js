//1----------------------------
console.warn("Exemplo 1:");

// Declare uma variável contendo uma string
let nome = "Thiago";
// Declare uma variável contendo um número dentro de uma string
let ano = "2018";
// Declare uma variável com a sua idade
let idade = 28;
// Declare uma variável booleana:
let possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade, nome);

//2----------------------------
console.warn("Exemplo 2:");

let preco = 25;
let totalComprado = 5;
let totalPreco = totalComprado * preco;
console.log(totalPreco);

//3----------------------------
console.warn("Exemplo 3:");

let sobrenome = "Silva",
  cidade = "São Paulo";
console.log(sobrenome, cidade);
/* Declare duas variáveis, uma com seu nome
e outra com seu sobrenome e some as mesmas */
let nomeCompleto = `3- ${nome} ${sobrenome}`;

//4----------------------------
console.warn("Exemplo 4:");

let semDefinir;
console.log(semDefinir);

//5----------------------------
console.warn("Exemplo 5:");

let comida;
console.log(comida);
comida = "Pizza";
console.log(comida);

//6----------------------------
console.warn("Exemplo 6:");

//Variável com valor constante:
const time = "Vasco";
//Se tentar atribuir um valor dá erro:
//time = "Flamengo";
console.log(time);

//7----------------------------
console.warn("Exemplo 7:");

// Verifique o tipo da variável que contém o seu nome
let verificarTipoNome = typeof nome;
console.log(verificarTipoNome);
