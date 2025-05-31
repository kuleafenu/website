import React from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Agents from './pages/Agents';
import Contact from './pages/Contact';

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