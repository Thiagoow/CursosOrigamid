import React from "react";
import Header from "./Aulas/01. Início/Components/atoms/Header";
import Footer from "./Aulas/01. Início/Components/atoms/Footer";
import Form from "./Aulas/01. Início/Components/molecules/Form";

const App = () => {
  return (
    <div align="center">
      <Header />
      <main
        style={{
          display: "flex",
          alignItems: "center",
          background: "grey",
          color: "black",
          justifyContent: "center",
          minHeight: "100vh"
        }}
      >
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
