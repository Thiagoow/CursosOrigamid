import ReactDOM from "react-dom";
//Importa o react pra transpilar o código em JSX:
import React from "react";
//Importa a função criada no arquivo App.js:
import App from "./App";

//Renderiza a função importada acima, na div de id "react", lá no index.html:
ReactDOM.render(<App />, document.getElementById("react"));
