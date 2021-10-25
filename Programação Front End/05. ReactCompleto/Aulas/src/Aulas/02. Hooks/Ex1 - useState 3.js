import React from "react";
import Produto from "./Aulas/02. Hooks/components/atoms/Produto";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function whenClick(event) {
    setLoading(true);
    /* Pega o texto do botão que foi clicado pra exibir
    o produto respectivo: */
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    //Transforma a response pra um arquivo .json:
    const json = await response.json();
    //Atualiza os dados pra obter a const de resposta em json:
    setDados(json);
    setLoading(false);
  }

  return (
    <div align="center">
      <button onClick={whenClick} style={{ margin: ".5rem" }}>
        Notebook
      </button>

      <button onClick={whenClick} style={{ margin: ".5rem" }}>
        Smartphone
      </button>

      <button onClick={whenClick} style={{ margin: ".5rem" }}>
        Tablet
      </button>

      {/* Se o loading = true, carrega a div:
      se não, não carrega nada: */}
      {loading && <p style={{ fontWeight: "bold" }}>Carregando...</p>}

      {/* Se carregando = false && dados = true, ou seja, existir 
      um produto no estado "dados", renderiza o componente de 
      Produto se não, não renderiza nada 🤩😎 */}
      {!loading && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
