import React from 'react';
import logo from '../../logo.svg';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
