import React, { useState } from 'react';
import { Shield, Users, Award, Star, ChevronLeft, ChevronRight, RotateCw, Clock, Quote, Swords, Gem } from 'lucide-react';

import imgSandoval from '../assets/images/autoridades/sandoval.jpeg';
import imgArchanjo from '../assets/images/autoridades/archanjo.jpeg';
import imgSaucedo from '../assets/images/autoridades/saucedo.jpeg';
import imgBonanken from '../assets/images/autoridades/bonanken.jpeg';
import imgAnas from '../assets/images/autoridades/anas.jpeg';
import imgGuardia from '../assets/images/autoridades/guardia.jpeg';
import imgMontano from '../assets/images/autoridades/montano.jpeg';
import imgVargas from '../assets/images/autoridades/vargas.jpeg';
import imgSotelo from '../assets/images/autoridades/sotelo saco.jpeg';
import imgCruz from '../assets/images/autoridades/teddy.png';
import imgRoca from '../assets/images/autoridades/robertor.png';
import imgRocaMC from '../assets/images/autoridades/robertomc.jpeg';
import imgBallivian from '../assets/images/autoridades/ballivian.jpeg';
import imgSebastian from '../assets/images/autoridades/sebastian.jpeg';
import imgLucasFranco from '../assets/images/autoridades/lucas franco.jpeg';
import imgAlvieryIlustre from '../assets/images/autoridades/alviery ilustre.jpeg';
import imgAlvieryMentor from '../assets/images/autoridades/alviery mentor.jpeg';
import imgBastian from '../assets/images/autoridades/bastian.jpeg';
import imgLucasMorris from '../assets/images/autoridades/lucas morris.jpeg';
import imgTadeo from '../assets/images/autoridades/tadeo.jpeg';
import imgMazzone from '../assets/images/autoridades/mazzone.jpeg';

const actualesData = [
  {
    name: 'MC. Sebastián Claros',
    chapter: 'Primax Santa Cruz 294 (#75009)',
    term: 'Gestión II-2026',
    role: 'Maestre Consejero',
    image: imgSebastian
  },
  {
    name: 'MC. Sebastián Catacora',
    chapter: 'Juventud del Oriente 311 (#75006)',
    term: 'Gestión II-2026',
    role: 'Maestre Consejero',
    image: imgBastian
  },
  {
    name: 'MC. Roberto Roca',
    chapter: 'Grigota 476 (#75008)',
    term: 'Gestión II-2026',
    role: 'Maestre Consejero',
    image: imgRocaMC
  },
  {
    name: 'MC. Thiago Arcienega',
    chapter: 'Gran Paititi 540 (#75007)',
    term: 'Gestión II-2026',
    role: 'Maestre Consejero',
    image: imgTadeo
  },
  {
    name: 'MC. Lucas Franco',
    chapter: 'Amistad y Fidelidad (#75014)',
    term: 'Gestión II-2026',
    role: 'Maestre Consejero',
    image: imgLucasFranco
  },
  {
    name: 'MC. Lucas Morris',
    chapter: 'Caballeros de la Nueva Alianza (#75017)',
    term: 'Gestión II-2026',
    role: 'Maestre Consejero',
    image: imgLucasMorris
  },
  {
    name: 'MC. Nicolás Ballivián',
    chapter: 'Cantera (#75024)',
    term: 'Gestión II-2026',
    role: 'Maestre Consejero',
    image: imgBallivian
  }
];

const gabineteData = [
  {
    name: 'MCD. Armando Sandoval Frias',
    office: 'Maestre Consejero Departamental',
    term: 'Gestión 2026',
    chapter: 'Capitulo Grigota 476',
    image: imgSandoval,
    cargos: 'Maestre Consejero Departamental, Maestre Consejero Capitular, Comendador Paje de Priorato.',
    capituloMadre: 'Grigota 476 (#75008)',
    grado: 'Sir',
    tiempoOrden: '4 años',
    reconocimientos: 'Líder Destacado de Gestión 2025, Distinción al Mérito DeMolay.',
    fraseMotivadora: 'El liderazgo se demuestra con el ejemplo y la guía constante, no con el título del cargo.'
  },
  {
    name: 'H. Jose Enrique Archanjo',
    office: 'Escriba Departamental',
    term: 'Gestión 2026',
    chapter: 'Capítulo Cantera',
    image: imgArchanjo,
    cargos: 'Segundo Consejero, Escriba Departamental.',
    capituloMadre: 'Cantera 75024',
    grado: 'Sir',
    tiempoOrden: '4 Años',
    reconocimientos: 'Escritor del Manual de Historia Capitular para Cantera, Creador del Taller de Escribas II-2026, Mejor GINI I-2024, ⁠Reconocimiento al Mérito I-2026, Mejor Escriba II-2024 del campamento',
    fraseMotivadora: 'Que un momento difícil no cambie tu manera de pensar.'
  },
  {
    name: 'H. Luis Andres Saucedo',
    office: 'Tesorero Departamental',
    term: 'Gestión 2026',
    chapter: 'Capítulo Cantera',
    image: imgSaucedo,
    cargos: 'Tesorero Departamental, Maestre Consejero, 1er Consejero y Escriba Capitular.',
    capituloMadre: 'Capítulo Cantera 75024',
    grado: 'Sir',
    tiempoOrden: '3 años',
    reconocimientos: 'Campeonato ded futbol DeMolay gestion II-2025.',
    fraseMotivadora: 'Al final todo estará bien, y si no está bien, no hemos llegado al final.'
  },
  {
    name: 'H. Bruno Bonanken',
    office: 'Orador Departamental',
    term: 'Gestión 2026',
    chapter: 'Capítulo Amistad Y Fidelidad',
    image: imgBonanken,
    cargos: 'Orador Departamental, Maestre Consejero Capitular y Ilustre Comendador Caballero de Priorato.',
    capituloMadre: 'Capítulo Amistad Y Fidelidad',
    grado: 'Sir',
    tiempoOrden: 'años',
    reconocimientos: '',
    fraseMotivadora: ''
  },
  {
    name: 'H. Alviery Anas',
    office: 'Hospitalario Departamental',
    term: 'Gestión 2026',
    chapter: 'Capítulo Primax Santa Cruz 294',
    image: imgAnas,
    cargos: 'Capitulares:\n• Tesorero\n• Escriba\n• Segundo Consejero\n• Maestre Consejero\n\nCaballería:\n• Secretario\n• Comendador Escudero\n• Ilustre Comendador Caballero\n\nCastillo de Escuderos:\n• Mentor Escudero',
    capituloMadre: 'Primax Santa Cruz 294 #75009',
    grado: 'Sir',
    tiempoOrden: '3 años',
    reconocimientos: 'Coordinador del Programa de Filantropía y Apoyo Comunitario.',
    fraseMotivadora: 'Quien toma la iniciativa, llega más lejos.'
  },
  {
    name: 'H. Ricardo Guardia',
    office: 'Inspector Ritualístico Departamental',
    term: 'Gestión 2026',
    chapter: 'Capítulo Primax Santa Cruz 294',
    image: imgGuardia,
    cargos: 'Inspector Ritualístico Departamental, Maestre Consejero y 1er Consejero Capitular.',
    capituloMadre: 'Capítulo Primax Santa Cruz 294',
    grado: 'Sir',
    tiempoOrden: 'años',
    reconocimientos: '',
    fraseMotivadora: ''
  },
  {
    name: 'H. Matias Montaño',
    office: 'Inspector de las Columnas del Sur',
    term: 'Gestión 2026',
    chapter: 'Capítulo Primax Santa Cruz 294',
    image: imgMontano,
    cargos: 'Inspector de las Columnas del Sur y 1er Consejero Capitular.',
    capituloMadre: 'Capítulo Primax Santa Cruz 294',
    grado: 'Sir',
    tiempoOrden: 'años',
    reconocimientos: '',
    fraseMotivadora: ''
  },
  {
    name: 'H. Roberto Roca',
    office: 'Director Inter-Capitular Departamental',
    term: 'Gestión 2026',
    chapter: 'Capítulo Grigota 476',
    image: imgRoca,
    cargos: 'Director Inter-Capitular Departamental, Maestre Consejero y 1er Consejero Capitular.',
    capituloMadre: 'Capítulo Grigota 476',
    grado: 'Sir',
    tiempoOrden: 'años',
    reconocimientos: '',
    fraseMotivadora: ''
  },
  {
    name: 'Lord. Luis Cruz',
    office: 'Director Académico Departamental',
    term: 'Gestión 2026',
    chapter: 'Capítulo Cantera',
    image: imgCruz,
    cargos: 'Director Académico Departamental.',
    capituloMadre: 'Capítulo Cantera',
    grado: 'Lord',
    tiempoOrden: '12 años',
    reconocimientos: 'Grado Chevalier en el año 2026',
    fraseMotivadora: 'El segundo es el primero de los perdedores'
  },
  {
    name: 'H. Jose Alberto Vargas',
    office: 'Diseñador Departamental',
    term: 'Gestión 2026',
    chapter: 'Capítulo Cantera',
    image: imgVargas,
    cargos: 'Maestre Consejero, 1er Consejero, Escriba Capitular.',
    capituloMadre: 'Cantera 75024',
    grado: 'Sir',
    tiempoOrden: '2 años',
    reconocimientos: 'Creador de la Pagina Web y Arte Gráfico del Campamento de Santa Cruz 2026. ',
    fraseMotivadora: 'Que todo fluya y nada influya'
  }
];

const externasData = [
  {
    name: 'Lord Adolfo Sotelo',
    office: 'Gran Comendador Chevalier',
    term: 'Gestión 2026',
    chapter: 'Corte Chevalier "Nobles Defensores" N° 75904',
    image: imgSotelo,
    badge: 'Corte Chevalier',
    cargos: 'Gran Comendador Chevalier, Oficial de Enlace Departamental.',
    capituloMadre: 'Corte Chevalier N° 75904',
    grado: 'Chevalier',
    tiempoOrden: '6 años',
    reconocimientos: 'Orden al Mérito DeMolay, Chevalier Distinguido.',
    fraseMotivadora: 'La lealtad a nuestros juramentos es el cimiento de nuestro honor y fraternidad.'
  },
  {
    name: 'H. Alviery Anas',
    office: 'Ilustre Comendador Caballero',
    term: 'Gestión II-2026',
    chapter: 'Priorato "Caballeros Templarios del Oriente" N° 82',
    image: imgAlvieryIlustre,
    badge: 'Priorato',
    cargos: 'Capitulares:\n• Tesorero\n• Escriba\n• Segundo Consejero\n• Maestre Consejero\n\nCaballería:\n• Secretario\n• Comendador Escudero\n• Ilustre Comendador Caballero\n\nCastillo de Escuderos:\n• Mentor Escudero',
    capituloMadre: 'Primax Santa Cruz 294 #75009',
    grado: 'Sir, Caballero',
    tiempoOrden: '3 años',
    reconocimientos: 'Coordinador del Programa de Filantropía y Apoyo Comunitario, Caballero de Honor.',
    fraseMotivadora: 'Quien toma la iniciativa, llega más lejos.'
  },
  {
    name: 'H. Alviery Anas',
    office: 'Mentor Escudero',
    term: 'Gestión II-2026',
    chapter: 'Castillo "Guardianes de la Santa Cruz" N° 75508',
    image: imgAlvieryMentor,
    badge: 'Castillo',
    cargos: 'Capitulares:\n• Tesorero\n• Escriba\n• Segundo Consejero\n• Maestre Consejero\n\nCaballería:\n• Secretario\n• Comendador Escudero\n• Ilustre Comendador Caballero\n\nCastillo de Escuderos:\n• Mentor Escudero',
    capituloMadre: 'Primax Santa Cruz 294 #75009',
    grado: 'Sir',
    tiempoOrden: '3 años',
    reconocimientos: 'Mentor de Escuderos Destacado de la Gestión 2026.',
    fraseMotivadora: 'Quien toma la iniciativa, llega más lejos.'
  },
  {
    name: 'Milán Mazzone',
    office: 'Maestre Escudero',
    term: 'Gestión II-2026',
    chapter: 'Castillo "Guardianes de la Santa Cruz" N° 75508',
    image: imgMazzone,
    badge: 'Castillo',
    cargos: 'Maestre Escudero del Castillo Guardianes de la Santa Cruz.',
    capituloMadre: 'Castillo Guardianes de la Santa Cruz N° 75508',
    grado: 'Escudero',
    tiempoOrden: '2 años',
    reconocimientos: 'Escudero de Honor, Destacado en Virtudes.',
    fraseMotivadora: 'Con amor filial y obediencia cívica crecemos felices junto a nuestros hermanos.'
  }
];

function CabinetMemberCard({ leader }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const badge = leader.badge || 'Gabinete';

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full h-[530px] sm:h-[570px] lg:h-[500px] perspective-1000 select-none cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''
          }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300 flex flex-col justify-between hover-premium-card">
          <div className="w-full">
            {/* Portrait Card */}
            <div className="aspect-square w-full bg-stone-100 rounded-lg border border-stone-200 flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-stone-50 transition-colors">
              <div className="absolute top-0 right-0 bg-demolay-green-950 text-gold border-l border-b border-gold/30 px-2 py-0.5 rounded-bl text-[8px] font-bold uppercase tracking-widest text-gold z-10">
                {badge}
              </div>
              {leader.image ? (
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-stone-400 fill-current opacity-85 group-hover:text-demolay-green-900/60 transition-colors">
                  <path d="M50 50c9.333 0 14-4.667 14-14s-4.667-14-14-14-14 4.667-14 14 4.667 14 14 14zm0 6c-13.333 0-20 6.667-20 20v2h40v-2c0-13.333-6.667-20-20-20z" />
                </svg>
              )}
            </div>

            <span className="text-[9px] font-bold text-stone-100 bg-demolay-green-950 px-2 py-0.5 rounded border border-gold/30 tracking-wider uppercase inline-block mb-2">
              {leader.office}
            </span>
            <h3 className="font-serif font-bold text-base md:text-lg text-demolay-green-950 mb-1 leading-tight group-hover:text-demolay-green-900 transition-colors">
              {leader.name}
            </h3>
          </div>

          <div>
            <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] md:text-[11px] text-stone-500 font-sans">
              <span className="flex items-center gap-1 font-medium">
                <Award className="h-3.5 w-3.5 text-demolay-green-800" />
                {leader.chapter}
              </span>
              <span className="font-semibold text-stone-600 shrink-0">{leader.term}</span>
            </div>

            {/* Quick action text/indicator - bajado un poco con más espacio */}
            <div className="mt-3.5 pt-2.5 pb-0.5 flex items-center justify-center gap-1 text-[9px] font-bold uppercase tracking-widest text-demolay-gold border-t border-dashed border-stone-150">
              <RotateCw className="h-3 w-3 animate-spin" style={{ animationDuration: '6s' }} />
              Ver Biografía
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden bg-stone-900 text-stone-100 rounded-xl border border-demolay-gold/40 p-5 shadow-xl flex flex-col justify-between rotate-y-180">
          <div className="w-full text-left">
            {/* Top accent */}
            <div className="flex items-center justify-between mb-2.5 border-b border-stone-850 pb-2">
              <span className="text-[8px] font-bold text-gold uppercase tracking-widest">
                {badge} • Perfil
              </span>
              <RotateCw className="h-3.5 w-3.5 text-stone-400" />
            </div>

            <h3 className="font-serif font-bold text-base md:text-lg text-gold mb-0.5 leading-tight">
              {leader.name}
            </h3>
            <p className="text-[9px] text-stone-400 font-medium uppercase tracking-wider mb-3">
              {leader.office}
            </p>

            {/* Scrollable details for premium feel and no overflow */}
            <div className="space-y-3 overflow-y-auto max-h-[290px] sm:max-h-[320px] lg:max-h-[260px] pr-1.5 pb-4 scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-transparent">
              {/* Cargos */}
              {leader.cargos && (
                <div className="flex items-start gap-2">
                  <Gem className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[8px] font-bold text-gold/80 uppercase tracking-wider">Cargos Ocupados</span>
                    <span className="text-stone-300 text-[11px] font-sans leading-snug whitespace-pre-line">{leader.cargos}</span>
                  </div>
                </div>
              )}

              {/* Capítulo Madre */}
              {leader.capituloMadre && (
                <div className="flex items-start gap-2">
                  <Shield className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[8px] font-bold text-gold/80 uppercase tracking-wider">Capítulo Madre</span>
                    <span className="text-stone-300 text-[11px] font-sans leading-snug">{leader.capituloMadre}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                {/* Grado */}
                {leader.grado && (
                  <div className="flex items-start gap-2">
                    <Swords className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[8px] font-bold text-gold/80 uppercase tracking-wider">Grado</span>
                      <span className="text-stone-300 text-[11px] font-sans leading-snug">{leader.grado}</span>
                    </div>
                  </div>
                )}
                {/* Tiempo en la Orden */}
                {leader.tiempoOrden && (
                  <div className="flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[8px] font-bold text-gold/80 uppercase tracking-wider">Tiempo Orden</span>
                      <span className="text-stone-300 text-[11px] font-sans leading-snug">{leader.tiempoOrden}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Reconocimientos */}
              {leader.reconocimientos && (
                <div className="flex items-start gap-2">
                  <Award className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[8px] font-bold text-gold/80 uppercase tracking-wider">Reconocimientos</span>
                    <span className="text-stone-300 text-[11px] font-sans leading-snug">{leader.reconocimientos}</span>
                  </div>
                </div>
              )}

              {/* Frase Motivadora */}
              {leader.fraseMotivadora && (
                <div className="pt-2 border-t border-stone-850 flex items-start gap-2">
                  <Quote className="h-3.5 w-3.5 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="block text-[8px] font-bold text-gold/80 uppercase tracking-wider italic">Frase Motivadora</span>
                    <span className="text-stone-200 text-[11.5px] font-serif italic leading-relaxed block mt-0.5 pb-2 px-1">
                      "{leader.fraseMotivadora}"
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="mt-3 pt-2 border-t border-stone-850">
              <button className="w-full py-2 bg-stone-800 hover:bg-demolay-green-950 text-stone-200 hover:text-stone-100 rounded text-[9px] font-bold uppercase tracking-wider transition-colors border border-stone-700 cursor-pointer">
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActualLeaderCard({ leader }) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300 group flex flex-col justify-between hover-premium-card h-full">
      <div>
        {/* Portrait Placeholder Card inside */}
        <div className="aspect-square w-full bg-stone-100 rounded-lg border border-stone-200 flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-stone-50 transition-colors">
          <div className="absolute top-0 right-0 bg-gold/20 text-gold border-l border-b border-gold/30 px-2 py-0.5 rounded-bl text-[8px] font-bold uppercase tracking-widest text-gold z-10">
            Activo
          </div>
          {leader.image ? (
            <img
              src={leader.image}
              alt={leader.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-stone-400 fill-current opacity-85 group-hover:text-demolay-green-900/60 transition-colors">
              <path d="M50 50c9.333 0 14-4.667 14-14s-4.667-14-14-14-14 4.667-14 14 4.667 14 14 14zm0 6c-13.333 0-20 6.667-20 20v2h40v-2c0-13.333-6.667-20-20-20z" />
            </svg>
          )}
        </div>

        <span className="text-[9px] font-bold text-demolay-green bg-demolay-green-900/10 px-2 py-0.5 rounded border border-demolay-green/20 tracking-wider uppercase inline-block mb-2">
          {leader.role}
        </span>
        <h3 className="font-serif font-bold text-lg text-demolay-green-950 mb-1 leading-tight group-hover:text-demolay-green-900 transition-colors">
          {leader.name}
        </h3>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col gap-1.5 font-sans text-left">
        <div className="flex items-start gap-1.5 text-xs sm:text-[13px] font-semibold text-demolay-green-950 leading-snug">
          <Shield className="h-4 w-4 text-demolay-green shrink-0 mt-0.5" />
          <span>{leader.chapter}</span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium pl-5.5">
          <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Gestión</span>
          <span className="font-semibold text-stone-600">{leader.term}</span>
        </div>
      </div>
    </div>
  );
}

function ExternalLeaderCard({ leader }) {
  const badge = leader.badge || 'Cuerpo de Honor';

  return (
    <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300 group flex flex-col justify-between hover-premium-card h-full">
      <div>
        {/* Portrait Card */}
        <div className="aspect-square w-full bg-stone-100 rounded-lg border border-stone-200 flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-stone-50 transition-colors">
          <div className="absolute top-0 right-0 bg-demolay-green-950 text-gold border-l border-b border-gold/30 px-2 py-0.5 rounded-bl text-[8px] font-bold uppercase tracking-widest z-10">
            {badge}
          </div>
          {leader.image ? (
            <img
              src={leader.image}
              alt={leader.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-stone-400 fill-current opacity-85 group-hover:text-demolay-green-900/60 transition-colors">
              <path d="M50 50c9.333 0 14-4.667 14-14s-4.667-14-14-14-14 4.667-14 14 4.667 14 14 14zm0 6c-13.333 0-20 6.667-20 20v2h40v-2c0-13.333-6.667-20-20-20z" />
            </svg>
          )}
        </div>

        <span className="text-[9px] font-bold text-stone-100 bg-demolay-green-950 px-2 py-0.5 rounded border border-gold/30 tracking-wider uppercase inline-block mb-2">
          {leader.office}
        </span>
        <h3 className="font-serif font-bold text-base md:text-lg text-demolay-green-950 mb-1 leading-tight group-hover:text-demolay-green-900 transition-colors">
          {leader.name}
        </h3>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col gap-1.5 font-sans text-left">
        <div className="flex items-start gap-1.5 text-xs sm:text-[13px] font-semibold text-demolay-green-950 leading-snug">
          <Award className="h-4 w-4 text-gold shrink-0 mt-0.5" />
          <span>{leader.chapter}</span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium pl-5.5">
          <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Gestión</span>
          <span className="font-semibold text-stone-600">{leader.term}</span>
        </div>
      </div>
    </div>
  );
}

export default function CabinetTabs() {
  const [activeTab, setActiveTab] = useState('actuales');
  const [actualesIndex, setActualesIndex] = useState(0);
  const [gabineteIndex, setGabineteIndex] = useState(0);
  const [externasIndex, setExternasIndex] = useState(0);

  const nextActuales = () => {
    setActualesIndex((prev) => (prev + 1) % actualesData.length);
  };

  const prevActuales = () => {
    setActualesIndex((prev) => (prev - 1 + actualesData.length) % actualesData.length);
  };

  const nextGabinete = () => {
    setGabineteIndex((prev) => (prev + 1) % gabineteData.length);
  };

  const prevGabinete = () => {
    setGabineteIndex((prev) => (prev - 1 + gabineteData.length) % gabineteData.length);
  };

  const nextExternas = () => {
    setExternasIndex((prev) => (prev + 1) % externasData.length);
  };

  const prevExternas = () => {
    setExternasIndex((prev) => (prev - 1 + externasData.length) % externasData.length);
  };

  return (
    <section id="gabinete" className="py-20 bg-stone-50 border-b border-stone-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 text-demolay-green mb-2">
            <Users className="h-4 w-4 text-demolay-green" />
            <span className="text-xs uppercase tracking-widest font-bold font-sans text-demolay-green-800">Liderazgo Actual</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
            Mural de Autoridades & Gabinete
          </h2>
          <div className="h-1 w-20 bg-demolay-gold mx-auto mt-4 rounded-full" />
          <p className="text-stone-500 font-sans max-w-xl mx-auto mt-4 text-xs md:text-sm">
            Nuestros líderes activos guían las gestiones locales y la coordinación regional con un alto sentido de responsabilidad.
          </p>
        </div>

        {/* Responsive Tab Switcher */}
        <div className="flex justify-center mb-12 px-4">
          <div className="flex flex-col sm:flex-row p-1.5 rounded-xl bg-stone-200 border border-stone-300 shadow-inner w-full max-w-2xl sm:w-auto gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab('actuales')}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'actuales'
                ? 'bg-demolay-green-900 text-stone-100 shadow'
                : 'text-stone-600 hover:text-demolay-green-900'
                }`}
            >
              <Star className="h-4 w-4 text-gold" />
              M.C. Actuales (Capítulos)
            </button>
            <button
              onClick={() => setActiveTab('externas')}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'externas'
                ? 'bg-demolay-green-900 text-stone-100 shadow'
                : 'text-stone-600 hover:text-demolay-green-900'
                }`}
            >
              <Swords className="h-4 w-4 text-gold" />
              Autoridades de Otros Cuerpos
            </button>
            <button
              onClick={() => setActiveTab('gabinete')}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'gabinete'
                ? 'bg-demolay-green-900 text-stone-100 shadow'
                : 'text-stone-600 hover:text-demolay-green-900'
                }`}
            >
              <Shield className="h-4 w-4 text-gold" />
              Gabinete Departamental
            </button>
          </div>
        </div>

        {/* Grid Contents */}
        <div className="transition-all duration-300">
          {activeTab === 'actuales' && (
            /* Maestres Consejeros Actuales (Carousel on mobile, Grid on desktop) */
            <>
              {/* Desktop Grid (sm:grid) */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {actualesData.map((leader, index) => (
                  <ActualLeaderCard key={index} leader={leader} />
                ))}
              </div>

              {/* Mobile Carousel (sm:hidden) */}
              <div className="sm:hidden relative max-w-sm mx-auto animate-fade-in">
                <ActualLeaderCard leader={actualesData[actualesIndex]} />

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-4 px-2">
                  <button
                    onClick={prevActuales}
                    className="p-2 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-demolay-gold hover:border-demolay-gold active:scale-95 transition-all shadow cursor-pointer"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Pagination Dots */}
                  <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
                    {actualesData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActualesIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${actualesIndex === idx ? 'w-5 bg-demolay-gold' : 'w-1.5 bg-stone-300'
                          }`}
                        aria-label={`Miembro ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextActuales}
                    className="p-2 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-demolay-gold hover:border-demolay-gold active:scale-95 transition-all shadow cursor-pointer"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'externas' && (
            /* Autoridades de Otros Cuerpos (Carousel on mobile, Grid on desktop) */
            <>
              {/* Desktop Grid (sm:grid) */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {externasData.map((leader, index) => (
                  <ExternalLeaderCard key={index} leader={leader} />
                ))}
              </div>

              {/* Mobile Carousel (sm:hidden) */}
              <div className="sm:hidden relative max-w-sm mx-auto animate-fade-in">
                <ExternalLeaderCard leader={externasData[externasIndex]} />

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-4 px-2">
                  <button
                    onClick={prevExternas}
                    className="p-2 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-demolay-gold hover:border-demolay-gold active:scale-95 transition-all shadow cursor-pointer"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Pagination Dots */}
                  <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
                    {externasData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setExternasIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${externasIndex === idx ? 'w-5 bg-demolay-gold' : 'w-1.5 bg-stone-300'
                          }`}
                        aria-label={`Miembro ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextExternas}
                    className="p-2 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-demolay-gold hover:border-demolay-gold active:scale-95 transition-all shadow cursor-pointer"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'gabinete' && (
            /* Gabinete Departamental (Carousel on mobile, Grid on desktop) */
            <>
              {/* Desktop Grid (sm:grid) */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {gabineteData.map((leader, index) => (
                  <CabinetMemberCard key={index} leader={leader} />
                ))}
              </div>

              {/* Mobile Carousel (sm:hidden) */}
              <div className="sm:hidden relative max-w-sm mx-auto animate-fade-in">
                <CabinetMemberCard key={gabineteIndex} leader={gabineteData[gabineteIndex]} />

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-4 px-2">
                  <button
                    onClick={prevGabinete}
                    className="p-2 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-demolay-gold hover:border-demolay-gold active:scale-95 transition-all shadow cursor-pointer"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Pagination Dots */}
                  <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
                    {gabineteData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGabineteIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${gabineteIndex === idx ? 'w-5 bg-demolay-gold' : 'w-1.5 bg-stone-300'
                          }`}
                        aria-label={`Miembro ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextGabinete}
                    className="p-2 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-demolay-gold hover:border-demolay-gold active:scale-95 transition-all shadow cursor-pointer"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
