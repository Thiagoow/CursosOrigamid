import React from "react";

const App = () => {
  /* Cria um elemento de tag "a", com o atributo "href: ''", de texto: "" */
  return React.createElement(
    "a",
    { href: "https://github.com/Thiagoow" },
    "Link TOP :D"
  );
};

export default App;
