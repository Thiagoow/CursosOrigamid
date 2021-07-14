import React from "react";

/* Listando arrays: */
const App = () => {
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  return (
    <ul>
      {/* Lista cada item da array com o map
        e retorna numa li, sendo a key/id,
        o próprio item */}
      {filmes.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

/* Listando e filtrando arrays de objetos: */
const App2 = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 }
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        /* Lista apenas o nome e o ano do livro,
        já que foram desestruturados com as {} */
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
};

export default App;
