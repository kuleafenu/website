import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Agents from './components/Agents';
import Contact from './components/Contact';

function App() {
  return (
    <>  
      <Navbar />
      <Hero />
      <About />
      <Agents />
      <Contact />
    </>
  );
}

export default App;