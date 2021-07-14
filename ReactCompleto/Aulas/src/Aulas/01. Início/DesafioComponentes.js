// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
import React from "react";
import Header from "./Aulas/01. Início/Components/atoms/Header";
import Home from "./Aulas/01. Início/Components/organisms/Home";
import Produtos from "./Aulas/01. Início/Components/organisms/Produtos";

const App = () => {
  /* Roteamento de páginas: */
  let Página;
  const { pathname } = window.location;
  if (pathname === "/produtos") {
    Página = Produtos;
  } else {
    Página = Home;
  }

  return (
    <>
      <Header />
      <div align="center">
        <Página />
      </div>
    </>
  );
};

export default App;
