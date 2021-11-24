//Exemplo1----------------------------
console.warn("Exemplo1:");

//Essa função aceita o argumento lado:
function areaQuadrado(lado) {
  /* E retorna a * desse
  único argumento: */
  return "Área= " + lado * lado;
}
function perimetroQuadrado(lado) {
  return "Perímetro= " + lado * 4;
}
//Todos os lados como 10:
console.log(areaQuadrado(10));
console.log(perimetroQuadrado(10));

//Exemplo2----------------------------
console.warn("Exemplo2:");

function pi() {
  return 3.14;
}
console.log(pi());

let total = 5 * pi(); // 15.7
console.log(total);

//Exemplo3----------------------------
console.warn("Exemplo3:");

function imc(peso, altura) {
  let imc = Math.round(peso / (altura * altura));
  return imc;
}
console.log(imc(80, 1.8));

//Exemplo4----------------------------
console.warn("Exemplo4:");

function corFavorita(cor) {
  if (typeof cor !== "string") {
    return "Digite apenas palavras, não números";
  } else if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}
console.log(corFavorita("preto"));

//Exemplo5----------------------------
console.warn("Exemplo5:");

function imc2(peso, altura) {
  const imc = Math.round(peso / altura ** 2);
  console.log(imc);
}

imc2(20, 1.8); //Retorna o imc de boa
console.log(imc2(20, 1.8));
/* ☝🏼 retorna o imc e undefined,
pois a função imc2 já faz um console.log
no valor da const imc*/

//Exemplo6----------------------------
console.warn("Exemplo6:");

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Digite apenas números";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade("10"));

//Exemplo7----------------------------
console.warn("Exemplo7:");

let totalPaises = 193;

function paisesVisitados(faltaVisitar) {
  console.log(`Falta visitar ${totalPaises - faltaVisitar} países`);
}
paisesVisitados(93);

//Exemplo8----------------------------
console.warn("Exemplo8:");

const profissao = "Designer";

function dados() {
  const nome = "André";
  const idade = 28;
  //Função dentro da função:
  function outrosDados() {
    const endereco = "Rio de Janeiro";
    /* Define outro valor pra const idade, fazendo
    a anterior ser ignorada: */
    const idade = 29;
    /* Retorna os dados da função a qual essa se
    encontra dentro + a var profissao */
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  //Retorna a função acima:
  return outrosDados();
}
console.log(dados());

//Exemplo9----------------------------
console.warn("Exemplo9:");

//Mostra se o número é par ou ímpar
function evenOrOdd(num) {
  var modulo = num % 2;
  if (modulo === 0) {
    return num + " is even";
  } else {
    return num + " is odd";
  }
}
console.log(evenOrOdd(9));

//Exemplo10----------------------------
console.warn("Exemplo10:");

function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado(10));
