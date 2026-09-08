import React from 'react';
import { X, Code2, Sparkles, Shield, Heart, ExternalLink, Award } from 'lucide-react';
import imgVargas from '../assets/images/vargas.jpeg';
import imgSandoval from '../assets/images/sandoval.jpeg';

export default function DevelopersModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const developers = [
    {
      name: 'Jose Alberto Vargas',
      role: 'Desarrollador Web & Diseñador',
      badge: 'Backend & Frontend',
      image: imgVargas,
      description: 'Diseñador Departamental y creador de la plataforma web. Encargado del desarrollo del código, diseño de interfaz, animaciones y experiencia interactiva del usuario.',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/josealbertovaa?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
          icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          ),
          color: 'hover:bg-pink-600/20 hover:text-pink-400 hover:border-pink-500/40'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/Java2303',
          icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          ),
          color: 'hover:bg-stone-700 hover:text-stone-100 hover:border-stone-500'
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/jose-alberto-vargas-aguilera-aaa018427/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSEj%2BXsh0Rhyujxt1r4q5bg%3D%3D',
          icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          ),
          color: 'hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/40'
        }
      ]
    },
    {
      name: 'Armando Sandoval',
      role: 'Coordinador del Proyecto & Contenido',
      badge: 'Dirección & Gestión',
      image: imgSandoval,
      description: 'Maestre Consejero Departamental (Gestión 2026). Coordinó integralmente la realización del proyecto, recopilación histórica, estructura orgánica y obtención de los recursos institucionales.',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/armandosandoval.f?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
          icon: (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          ),
          color: 'hover:bg-pink-600/20 hover:text-pink-400 hover:border-pink-500/40'
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-gold/50 bg-stone-900 text-stone-100 shadow-2xl z-10">
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gold/50 via-gold to-gold/50" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-stone-400 hover:text-gold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer z-20"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-demolay-green-950 border border-gold/30 text-[10px] font-bold uppercase tracking-widest text-gold mb-3">
              <span>Equipo de Desarrollo & Gestión</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100 tracking-wide">
              Creadores de la Plataforma
            </h3>
            <div className="h-0.5 w-16 bg-gold mx-auto mt-2 rounded-full" />
            <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-lg mx-auto mt-2.5">
              Conozca al equipo responsable del diseño, desarrollo y coordinación digital del Campamento de Santa Cruz.
            </p>
          </div>

          {/* Developers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="bg-stone-950/70 border border-stone-800 hover:border-gold/50 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/40 group relative overflow-hidden"
              >
                {/* Background accent glow on hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all pointer-events-none" />

                <div>
                  {/* Photo & Identity Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden border-2 border-gold/60 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300 bg-stone-900">
                        <img
                          src={dev.image}
                          alt={dev.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <span className="absolute -bottom-1 -right-1 p-1 bg-demolay-green-950 rounded-full border border-gold text-gold">
                        <Award className="h-3 w-3" />
                      </span>
                    </div>

                    <div className="text-left">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded inline-block mb-1">
                        {dev.badge}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100 leading-tight">
                        {dev.name}
                      </h4>
                      <p className="text-[11px] text-stone-400 font-medium mt-0.5">
                        {dev.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-300 font-sans leading-relaxed text-left border-t border-stone-850 pt-3 mb-4">
                    {dev.description}
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="pt-3.5 border-t border-stone-850 flex flex-col gap-2 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Contacto & Redes:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {dev.socials.map((soc, sIdx) => (
                      <a
                        key={sIdx}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 transition-all duration-200 transform hover:scale-105 flex items-center gap-1.5 text-xs font-medium cursor-pointer shadow-sm ${soc.color}`}
                        title={soc.name}
                        aria-label={`${dev.name} en ${soc.name}`}
                      >
                        {soc.icon}
                        <span className="text-[11px] font-medium">{soc.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fraternal Footer Note */}
          <div className="p-3.5 bg-stone-950 border border-stone-850 rounded-xl flex items-center justify-center gap-2 text-center text-[11px] text-stone-400 font-sans">
            <Heart className="h-3.5 w-3.5 text-gold shrink-0 animate-pulse" />
            <span>
              Desarrollado con dedicación fraternal para el <strong>Campamento de Santa Cruz</strong> • Orden DeMolay Bolivia
            </span>
          </div>

          {/* Close Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-stone-800 hover:bg-stone-750 text-stone-200 hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider border border-stone-700 hover:border-gold/40 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
