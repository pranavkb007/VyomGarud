import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Vyom<span className="text-orange-500">Garud</span>
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="text-gray-300 hover:text-white transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="#highlights" className="text-gray-300 hover:text-white transition-colors">
              Highlights
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Products
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Highlights
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
