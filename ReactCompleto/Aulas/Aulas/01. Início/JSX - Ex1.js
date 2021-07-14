import React, { useState } from "react";

// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preço: "R$ 2500" },
    { nome: "Geladeira", preço: "R$ 3000" },
    { nome: "Smartphone", preço: "R$ 1500" }
  ],
  ativa: true
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preço: "R$ 2500" },
    { nome: "Geladeira", preço: "R$ 3000" },
    { nome: "Smartphone", preço: "R$ 1500" },
    { nome: "Guitarra", preço: "R$ 3500" }
  ],
  ativa: false
};

const App = () => {
  let dados = useState();
  dados = mario;

  /* Filtra os preços da array usando o map pra cada item (i),
  substituindo o "R$" por uma string vazia, e transformando de
  string pra número, com o Number(): */
  const filtroPreços = dados.compras.map((i) =>
    Number(i.preço.replace("R$", ""))
  );

  /* Soma todos os preços (já filtrados pelo filtroPreços) */
  const total = filtroPreços.reduce((a, b) => a + b);

  function trocaUser() {
    if ((dados = mario)) {
      dados = luana;
    }
    dados = mario;
  }

  return (
    <div align="center">
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: {""}
        <b style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "ATIVA" : "INATIVA"}
        </b>
      </p>

      <p>Total gasto: R$ {total}</p>

      {total > 10000 && (
        <p style={{ color: "red" }}>Você está gastando MUITO 😬🥺❌</p>
      )}

      <button onClick={trocaUser}>2º User</button>
    </div>
  );
};

export default App;
