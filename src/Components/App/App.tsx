import React from 'react';
import logo from '../../logo.svg';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './App.scss';

const App = () => {

  const debounce = <T extends (...args: any[]) => any>(func: T, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait) as ReturnType<typeof setTimeout>;
    };
  }

  return (
    <div className="App">
      <div className='background-img'>
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
    </div>
  );
}

export default App;