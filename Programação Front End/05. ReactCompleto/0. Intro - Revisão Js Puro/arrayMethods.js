const preços = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagas",
  "R$ 300",
  "R$ 400",
  "Meus dados"
];

/* Retornando só os números da array usando 
o "filter" e o "includes": */
const filtroPreços = preços.filter((preço) => preço.includes("R$"));

/* Método MAP -> Retorna uma nova array modificada com
os dados que eu escolhi a partir da array original: */
const preçosNum = filtroPreços.map((preço) => Number(preço.replace("R$", "")));
/* A arrow function acima filtra o filtroPreços, substituindo o "R$" 
por uma string vazia. E transformando o resultado final disso tudo de string pra
número com o Number() */

console.log(preçosNum);
/* Sendo o map, muito bom por retornar uma 
NOVA array, e não modificar a array original: */
console.log("Array Original:");
console.log(preços);
