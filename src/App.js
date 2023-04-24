import React from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/navbar/hero/Hero';
import Gallery from './components/navbar/find/Gallery';
import Footer from './components/navbar/footer/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
