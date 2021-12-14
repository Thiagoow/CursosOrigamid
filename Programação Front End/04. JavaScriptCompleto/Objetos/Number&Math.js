/* Função construtora de Number, todo número possui
as propriedades e métodos do prototype de Number. */
const ano = 2018;
const preco = new Number(99);

//-------------.IsNaN() & .iInteger():
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false

/*-------------.parseFloat() & .parseInt():
Converte string pra número quebrado & pra número inteiro,
respectivamente */
Number.parseFloat("99.50"); // 99.5
parseFloat("99.50"); // Mesma função sem o Number.
Number.parseFloat("100 Reais"); // 100
Number.parseFloat("R$ 100"); // NaN

parseInt("99.50", 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt("100 Reais", 10); // 100

/*-------------.toFixed(x):
Arredonda o número com base no total
de casas decimais do argumento. */
const preco1 = 2.99;
preco1.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499

/*-------------.toString(x):
Transforma o número em uma string com base no Radix. 
Use o 10 para obter um número decimal. */
const preco3 = 2.99;
preco3.toString(10); // '2.99'

/*toLocateString('htmlLang', {style: 'x'}, currency: 'BRL'):
Formata o número de acordo com a língua e opções passadas. */
const preco4 = 59.49;
preco4.toLocaleString("en-US", { style: "currency", currency: "USD" }); // $59.49
preco4.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // R$ 59,49

/*---------------------MATH:
É um Objeto nativo que possui propriedades
e métodos de expressões matemáticas comuns.*/
Math.PI; // 3.14159
Math.E; // 2.718
Math.LN10; // 2.303

/*------------.abs():
Retorna o valor absoluto, ou seja,
transforma negativo em positivo.*/
Math.abs(-5.5); // 5.5

/*------------.ceil() & .floor():
Arredonda para cima, retornando sempre 
um inteiro e flutuante para baixo.*/
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4

/*------------.round():
Arredonda para o num inteiro mais próximo.*/
Math.round(4.8334); // 5
Math.round(4.3); // 4

/*------------.max(), .min() & .random():
Retorna o maior número de uma lista de argumentos, 
min() o menor num e random() um num aleatório entre 0 e 1.*/
const numbers = [5, 3, 10, 42, 2];
Math.max(numbers); // 42
Math.min(numbers); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

/* Num aleatório entre X(max) & Y(min):
Math.floor(Math.random() * (max - min + 1)) + min;*/
// Número random entre 72 e 32:
Math.floor(Math.random() * (72 - 32 + 1)) + 32;

//----------------Exercícios:
console.warn("Exercícios:");

// Retorne um número aleatório entre 1050 e 2000:
const randomNum = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(randomNum);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNums = numeros.split(", ");
const maxNum = Math.max(...arrayNums); //... Operador Spread -> Cada item da array (como um for each)
console.log(maxNum);

/* Crie uma função para limpar os preços
e retornar os números com centavos 
arredondados depois retorne a soma total */
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function filtraPrecos(preco) {
  //Deixa tudo maiúsculo, tira o R$, os espaços do começo e final:
  preco = +preco.toUpperCase().replace("R$ ", " ").trim().replace(",", ".");
  //Converte de String pra num dnv com o + na frente e arredonda pra 2 casas:
  preco = +preco.toFixed(2);
  return preco;
}

let somaPrecos = 0;
//Soma os preços:
listaPrecos.forEach((preco) => {
  somaPrecos += filtraPrecos(preco);
});

//Converte pra real:
somaPrecos = somaPrecos.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

console.log("Soma dos preços: " + somaPrecos);
