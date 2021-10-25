import React from "react";

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preço: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"]
  },
  {
    id: 2,
    nome: "Notebook",
    preço: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"]
  },
  {
    id: 3,
    nome: "Tablet",
    preço: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"]
  }
];

const filtraPreços = produtos.filter(
  ({ preço }) => Number(preço.replace("R$", "")) > 1500
);

const App = () => {
  return (
    <main>
      {filtraPreços.map(({ id, nome, preço, cores }) => (
        <section key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preço}</p>

          <p>Cores:</p>
          <ul>
            {cores.map((cor) => (
              <li
                key={cor}
                style={{
                  background: cor,
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                {cor}
              </li>
            ))}
          </ul>
          <br />
        </section>
      ))}
    </main>
  );
};

export default App;
