import React from 'react';
import logo from '../../logo.svg';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
