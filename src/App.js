import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: #1e1e1e;
    color: white;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  ::-webkit-scrollbar-thumb {
    background: #64ffda;
    border-radius: 5px;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </AppContainer>
    </>
  );
}

export default App;
