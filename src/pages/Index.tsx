
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "VyomGarud";
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <ScrollToTop />
  </div>
  );
};

export default Index;
