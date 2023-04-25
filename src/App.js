import React from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/navbar/hero/Hero';
import Gallery from './components/navbar/find/Gallery';
import Footer from './components/navbar/footer/Footer';
import About from './components/navbar/about/About';

function App() {
  return (
    <div >
      <Hero/>
      <Gallery/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
