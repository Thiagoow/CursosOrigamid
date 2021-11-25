/* Operadores de atribuição
Exemplo: "x = x * y"
Operador *= -> x *= y
Exemplo: "x = x / y"
Operador /= -> x /= y
Exemplo: "x = x % y"
Operador /= -> x %= y
*/

/* Operador ternário
? --> Realiza um If e Else numa só linha */

//Exemplo1----------------------------
console.warn("Exemplo1:");

let num = 20;
const num2 = 10;

num += num2; // num = num + num2
console.log(num);
console.log(num2);

//Exemplo2----------------------------
console.warn("Exemplo2:");

const possuiCarro = true;
const possuiCasa = true;
let darCredito;

/* Atribua true para a variável darCredito,
caso o cliente possua carro e casa.
E false caso o contrário. */
darCredito =
  possuiCarro && possuiCasa ? "Dar crédito ao cliente" : "Negar crédito";
console.log(darCredito);

//Exemplo3----------------------------
console.warn("Exemplo3:");

const idade = 20;
const naoPossuiDiabetes = true;

let podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";

console.log(podeBeber);

//Exemplo4----------------------------
console.warn("Exemplo4:");

const possuiFaculdade = false;
if (possuiFaculdade) console.log("Sim possui");
else console.log("Não possui");
