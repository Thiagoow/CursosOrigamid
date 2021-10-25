/* Expressões -> São como mini funções extremamente simples feitas
em uma linha, MAS QUE NÃO SÃO ARROW FUNCTIONS! */

const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
  console.log("Grupo A ganhou!");
} else {
  console.log("Grupo B ganhou!");
}
/* Transformando a função acima em expressão: */
const vencedor = grupoA > grupoB ? "Grupo A VENCEU" : "Grupo B VENCEU";
console.log(vencedor);

/* Outro exemplo: */
const active = true;
/* Verifica se a var ativa é true, 
E SE(&&) sim mostra a string. Se não, retorna "false": */
const verdade = active && "Ativo ✔";
/* Verifica se a var active é false 
E SE(&&) sim mostra a string. Se não, retorna "false": */
const mentira = !active && "NÃO está ativo ❌";
console.log(verdade);
console.log(mentira);
