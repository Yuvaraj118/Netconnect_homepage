import React, { useState, useEffect } from 'react';
import { Menu, X, Wifi } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Wifi className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              NetConnect
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={`p-2 rounded focus:outline-none focus:ring ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg pt-2 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3 px-4">
              {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-800 py-2 px-4 hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
