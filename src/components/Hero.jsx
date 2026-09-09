import React from 'react';
import { Compass, BookOpen, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo1.png';

export default function Hero({ onPageChange }) {
  const handlePageTransition = (id) => {
    onPageChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-demolay-green-950 py-20 md:py-28 border-b border-demolay-gold/30">
      {/* Decorative Gold/Green Gradients & Star Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,82,38,0.35),rgba(2,36,21,0.95))] pointer-events-none" />
      {/* Repeating Background Pattern (Larger, more spaced out, animated diagonal movement) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.070] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="shield-pattern" width="280" height="280" patternUnits="userSpaceOnUse" x="0" y="0">
            <animate attributeName="x" from="0" to="280" dur="40s" repeatCount="indefinite" />
            <animate attributeName="y" from="0" to="280" dur="40s" repeatCount="indefinite" />
            <image href={logo} x="70" y="70" width="140" height="140" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#shield-pattern)" />
      </svg>

      {/* Soft golden corner glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-demolay-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-demolay-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">

        {/* Centered Logo & Jurisdiction Badge Stack (Circle border removed) */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="mb-6 animate-float hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              alt="Logo Campamento de Santa Cruz"
              className="h-28 w-28 md:h-36 md:w-36 object-contain filter drop-shadow-[0_4px_15px_rgba(212,175,55,0.35)]"
            />
          </div>

          {/* Jurisdiction badge in Gold text & border */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-demolay-green-900/90 border border-gold text-gold text-xs font-bold uppercase tracking-widest shadow-md">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Jurisdicción 075 - Región 9
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-stone-100 tracking-wide leading-tight mb-2">
          Campamento de <span className="whitespace-nowrap">Santa Cruz</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-sans font-semibold text-gold tracking-widest uppercase mb-6">
          Orden DeMolay Bolivia
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-300 font-light leading-relaxed mb-8 font-sans px-4">
          Forjando los líderes del mañana a través de la institucionalidad, la devoción filial y el sagrado lazo de la fraternidad en la región oriental de Bolivia.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <button
            onClick={() => handlePageTransition('cuerpos')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold hover:opacity-90 text-stone-950 font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-lg shadow-xl hover-premium-button cursor-pointer"
          >
            <Compass className="h-4 w-4" />
            Conocer los Cuerpos
          </button>

          <button
            onClick={() => handlePageTransition('materiales')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-gold text-gold font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-lg hover-premium-button cursor-pointer"
          >
            <BookOpen className="h-4 w-4" />
            Biblioteca de Materiales
          </button>
        </div>
      </div>
    </section>
  );
}
