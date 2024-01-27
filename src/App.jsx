import React from "react";
import Container from "./components/Container";
import ContainerTwo from "./components/ContainerTwo";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import TemplateInfo from "./components/TemplateInfo";
import CourseIntro from "./components/CourseIntro";
import Results from "./components/Results";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <MobileNav />
        <Hero />
      </Container>
      <ContainerTwo>
        <About />
      </ContainerTwo>
      <Container>
        <CourseIntro />
      </Container>
      <Container>
        <Results />
      </Container>
      <ContainerTwo>
        <TemplateInfo />
      </ContainerTwo>
      <Container>
        <Faq />
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
