("use strict");

//Exemplo1----------------------------
console.warn("Exemplo1:");

function mostrarCarro() {
  /* Se a var carro fosse declarada
  aqui, ela não conseguiria ser acessada
  fora dessa função dando o erro "not defined".
  
  A não ser que ela seja uma var definida como "var"
  invés de const ou let. Por isso ela não é mais usada*/
  let carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

//Exemplo2----------------------------
console.warn("Exemplo2:");

if (false) {
  const mes = "Dezembro";
  console.log(mes);
}
// console.log(mes); // erro mes is not defined
{
  carro2 = "Fusca 2";
  const ano = 2018;
}
console.log(carro2); // Carro
// console.log(ano); // erro ano is not defined

//Exemplo3----------------------------
console.warn("Exemplo3:");

let i = 50;

/* Se a var i fosse definida como "var",
esse comando FOR abaixo substituiria o valor
da var. */
for (let i = 0; i <= 5; i++) {
  console.log(`Número ${i}`);
}

console.log(i * 10);

//Exemplo4----------------------------
console.warn("Exemplo4:");

const semana = "Sexta";
console.log(semana);

const data = {
  ano: 2018,
  mes: "Dezembro"
};
/* Uma var constante não pode ter seu
valor alterado, apenas uma var let. 

MAS, se essa var constante for um objeto, 
podemos alterar suas propriedades a vontade. 
Só não o tipo dela. De objeto para string,
ou array, ou número.*/
data.ano = 2019;
data.dia = 25;
//Se eu tentar mudar essa const objeto para array:
//data = [];

console.log(data);
