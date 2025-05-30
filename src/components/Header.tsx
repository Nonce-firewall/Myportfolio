import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <li>
    <a 
      href={href} 
      className="px-4 py-2 text-lg hover:text-primary transition-colors duration-300"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ 
          behavior: 'smooth',
        });
        onClick();
      }}
    >
      {label}
    </a>
  </li>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-sm py-2' 
          : 'bg-white dark:bg-gray-900 py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#hero')?.scrollIntoView({ 
              behavior: 'smooth',
            });
          }}
        >
          <img src="/copilot_image_1745939269573.png" alt="Nonce Firewall Logo" className="h-10 w-auto" />
          <span><span className="text-primary">Nonce</span> Firewall</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            <NavLink href="#about" label="About" onClick={closeMenu} />
            <NavLink href="#skills" label="Skills" onClick={closeMenu} />
            <NavLink href="#projects" label="Projects" onClick={closeMenu} />
            <NavLink href="#contact" label="Contact" onClick={closeMenu} />
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col space-y-6">
            <NavLink href="#about" label="About" onClick={closeMenu} />
            <NavLink href="#skills" label="Skills" onClick={closeMenu} />
            <NavLink href="#projects" label="Projects" onClick={closeMenu} />
            <NavLink href="#contact" label="Contact" onClick={closeMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;