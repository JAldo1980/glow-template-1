import React from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
      </Container>
    </>
  );
}

export default App;
