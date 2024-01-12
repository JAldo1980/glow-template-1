import React from "react";
import Container from "./components/Container";
import ContainerTwo from "./components/ContainerTwo";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Endorsements from "./components/Endorsements";
import Benefits from "./components/Benefits";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
      </Container>
      <ContainerTwo>
        <About />
      </ContainerTwo>
      <Container>
        <Benefits />
      </Container>
      <Container>
        <Results />
      </Container>
      <ContainerTwo>
        <Endorsements />
      </ContainerTwo>
      <Container>
        <FAQ />
        <Contact />
      </Container>
      <div className="buffer"></div>
      <ContainerTwo>
        <Footer />
      </ContainerTwo>
    </>
  );
}

export default App;
