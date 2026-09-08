import React from 'react';
import { X, Award, Shield, Compass, BookOpen, Star } from 'lucide-react';

export default function DetailModal({ body, onClose, onViewCapitulos }) {
  if (!body) return null;

  // Map icon component based on the clicked body type, rendering custom logos when available
  const getIcon = (body) => {
    if (body.logo) {
      return (
        <img 
          src={body.logo} 
          alt={body.title} 
          className="h-12 w-12 object-contain" 
        />
      );
    }
    switch (body.type) {
      case 'capitulo':
        return <Compass className="h-10 w-10 text-gold" />;
      case 'corte':
        return <Shield className="h-10 w-10 text-gold" />;
      case 'castillo':
        return <Award className="h-10 w-10 text-gold" />;
      case 'priorato':
        return <Star className="h-10 w-10 text-gold" />;
      default:
        return <Star className="h-10 w-10 text-gold" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Box (Added max-h-[90vh] and overflow-y-auto for mobile responsiveness) */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-demolay-gold/40 bg-stone-900 text-stone-100 shadow-2xl transition-all duration-300 transform scale-100 animate-fade-in">
        
        {/* Top Gold Border Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-demolay-gold/40 via-demolay-gold to-demolay-gold/40" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-5 text-stone-400 hover:text-demolay-gold transition-colors duration-200"
          aria-label="Cerrar modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-demolay-green-950/80 border border-demolay-gold/30 rounded-xl">
              {getIcon(body)}
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold font-sans">
                {body.category}
              </span>
              <h3 className="text-3xl font-serif font-bold text-stone-100 tracking-wide mt-0.5">
                {body.title}
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            {/* Subtitle */}
            <p className="text-stone-300 italic font-serif text-lg border-l-2 border-gold pl-4 py-1">
              "{body.motto}"
            </p>

            {/* Description */}
            <div className="text-stone-300 text-sm leading-relaxed space-y-3 font-sans">
              {body.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Grid for details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-stone-800">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 font-sans">
                  Estructura y Membresía
                </h4>
                <ul className="text-xs text-stone-400 space-y-1.5 list-disc pl-4">
                  {body.structure.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 font-sans">
                  Virtudes Claves
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {body.virtues.map((virtue, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-demolay-green-950/80 border border-gold/20 text-gold text-[10px] uppercase font-semibold rounded-md tracking-wider"
                    >
                      {virtue}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer inside modal */}
          <div className="mt-8 pt-4 border-t border-stone-800 flex justify-end gap-3 flex-wrap">
            {body.type === 'capitulo' && (
              <button
                onClick={() => {
                  onClose();
                  onViewCapitulos();
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-300 via-demolay-gold to-amber-500 text-stone-950 rounded-lg text-xs font-bold uppercase tracking-widest border border-amber-200/40 shadow-[0_4px_12px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_18px_rgba(212,175,55,0.45)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.97] hover-premium-button cursor-pointer"
              >
                Ver los 7 Capítulos de la Jurisdicción
              </button>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 hover:border-stone-600 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
