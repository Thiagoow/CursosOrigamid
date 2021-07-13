import React from "react";

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
  const dados = luana;
  /*  */
  const filtroPreços = dados.compras.map((i) =>
    Number(i.preço.replace("R$", ""))
  );

  const total = filtroPreços.reduce((a, b) => a + b);

  return (
    <div align="center">
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: {dados.ativa}</p>
      <p>Total: {total}</p>
      <button>2º User</button>
    </div>
  );
};

export default App;
