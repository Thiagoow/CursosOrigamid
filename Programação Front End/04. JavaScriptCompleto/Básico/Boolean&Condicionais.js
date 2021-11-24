//Exemplo1----------------------------
console.warn("Exemplo1:");

/* Verifique se a sua idade é maior do que a de algum parente
Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor' */
let minhaIdade = 28;
let idadePrimo = 28;

if (minhaIdade > idadePrimo) {
  console.log("É maior");
} else if (minhaIdade === idadePrimo) {
  console.log("É igual");
} else {
  console.log("É menor");
}

//Exemplo2----------------------------
console.warn("Exemplo2:");

// Qual valor é retornado na seguinte expressão?
let expressao = 5 - 2 && 5 - "s" && 5 - 2;
// R: NaN -> Not a number
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
let nome = "Andre";
let idade = 28;
let possuiDoutorado = false;
let empregoFuturo;
let dinheiroNaConta = 0;
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

//Exemplo3----------------------------
console.warn("Exemplo3:");

// Compare o total de habitantes do Brasil com China (valor em milhões)
let brasil = 207;
let china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("Brasil tem menos habitantes");
}

//Exemplo4----------------------------
console.warn("Exemplo4:");

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
/* R: Falso, pois a palavra Gato digitada
primeiro tem letra maiúscula, já a segunda
letra minúscula, fazendo com que não passe
na verificação do operador "===" */

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
/* R: Cão, pois a primeira condição antes do ou é falso,
mas a segunda condição é verdadeira. Fazendo com que ele 
não exiba "Falso".

Além disso, ele só exibe "Cão" e não "Gato", pois o console
SEMPRE exibe apenas a última condição verdadeira, que é "Cão".
Se "Cão" fosse vdd, mas tivesse colocada antes de "Gato", o console
exibiria apenas "Gato". Que seria a última vdd*/

//Exemplo5----------------------------
console.warn("Exemplo5:");

let corFavorita = "n";
//Pra não ter mil If e elses, usamos o switch:
switch (corFavorita) {
  /* Vai dar console se o valor da var
  definida no switch === valor do case */
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  //Se valor != de todos os cases:
  default:
    console.log("Feche os olhos.");
}
