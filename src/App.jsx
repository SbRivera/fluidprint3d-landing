import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import CustomCursor from './components/CustomCursor/CustomCursor';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <div className="noise-overlay" />
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Gallery />
            <Process />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
