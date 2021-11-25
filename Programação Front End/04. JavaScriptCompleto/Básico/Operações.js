/* Operadores aritméticos:
'+' 
'-' 
'*' 
'/' 
'%'->(mod = resto da operação) 
'++'->(incrementar +1) 
'--'->(decrementar)
*/

/* Operadores lógicos:
&& --> "e"
|| --> "Ou"
! --> "Not" --> Inverte o valor boolean da variável
*/

//1----------------------------
console.warn("Exemplo 1:");

/* Qual o resultado da seguinte expressão? 
(1º*, 2º/, 3º+, 4º-) */
const total = 10 + (5 * 2) / 2 + 20;
console.log(total);

//2----------------------------
console.warn("Exemplo 2:");

// Crie duas expressões que retornem NaN
const expressao1 = "Teste" / 2;
const expressao2 = "Teste" - 2;
console.log(expressao1, expressao2);

//3----------------------------
console.warn("Exemplo 3:");

//4----------------------------
console.warn("Exemplo 4:");
// Somar a string '200' com o número 50 e retornar 250
const soma = +"200" + 50;
console.log(soma);

//5----------------------------
console.warn("Exemplo 5:");
// Incremente o número 5 e retorne o seu valor incrementado
let x = 5;
//Para que o incrementar ou decrementar funciona a var deve ser let
console.log(++x);

//6----------------------------
console.warn("Exemplo 6:");
// Como dividir o peso por 2?
const numero = +"80" / 2;
const unidade = "kg";
const peso = numero + unidade; // '80kg'
console.log(peso);
