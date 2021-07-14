import React from "react";
import Header from "./Aulas/01. Início/Components/Header";
import Footer from "./Aulas/01. Início/Components/Footer";

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
        App
      </main>
      <Footer />
    </div>
  );
};

export default App;
