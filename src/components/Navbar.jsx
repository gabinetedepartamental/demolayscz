import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import logo from '../assets/images/logos/logo1.png';

const navLinks = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Murales', id: 'murales' },
  { name: 'Cuerpos', id: 'cuerpos' },
  { name: 'Reconocimientos', id: 'reconocimientos' },
  { name: 'Materiales', id: 'materiales' },
];

export default function Navbar({ currentPage, onPageChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    onPageChange(id);
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-45 bg-demolay-green-950/95 border-b border-demolay-gold/30 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, 'inicio')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src={logo} 
                alt="Logo Campamento de Santa Cruz" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="text-left font-serif">
                <h1 className="text-[10px] sm:text-xs md:text-sm font-bold text-stone-100 tracking-wider whitespace-nowrap">
                  CAMPAMENTO DE SANTA CRUZ
                </h1>
                <p className="text-[8px] uppercase tracking-widest text-stone-300 font-bold font-sans mt-0.5">
                  Orden DeMolay Bolivia
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex space-x-5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 px-1 py-1.5 nav-link-animated ${
                    currentPage === link.id
                      ? 'text-gold active'
                      : 'text-stone-300 hover:text-gold'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:flex items-center gap-3">
            <div className="hidden sm:inline-flex lg:hidden items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-gold/25 text-[9px] uppercase tracking-widest font-bold text-gold shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-gold animate-bounce" style={{ animationDuration: '3s' }} />
              <span>J.075 - R.9</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-stone-300 hover:text-white hover:bg-demolay-green-900 border border-stone-700 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-demolay-green-950 px-2 pt-2 pb-6 space-y-1 sm:px-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`block px-3 py-3 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-300 border-l-4 ${
                currentPage === link.id
                  ? 'text-gold border-gold bg-demolay-green-900/60 font-bold'
                  : 'text-stone-300 border-transparent hover:text-gold hover:bg-demolay-green-900/30'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
