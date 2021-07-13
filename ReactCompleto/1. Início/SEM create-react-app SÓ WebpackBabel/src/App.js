import React from "react";
//Importa o CSS que carrega graças ao loader:
import "./app.css";

/* Sem JSX: 
const App = () => {
  // Cria um elemento de tag "a", com o atributo "href: ''", de texto: ""
  return React.createElement(
    "a",
    { href: "https://github.com/Thiagoow" },
    "Link TOP :D"
  );
};
*/

/* Com JSX: */
const App = () => {
  return <a href="https://github.com/Thiagoow">Link TOP :D</a>;
};

export default App;
