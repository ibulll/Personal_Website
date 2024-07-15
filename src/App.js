import React, { useEffect } from 'react';
import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
