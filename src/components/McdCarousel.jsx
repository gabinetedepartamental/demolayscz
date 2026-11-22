import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import imgSandoval from '../assets/images/autoridades/sandoval.jpeg';
import imgSotelo from '../assets/images/mcd/sotelo.jpeg';
import imgMcd0 from '../assets/images/mcd/montenegro.jpeg';
import imgMcd1 from '../assets/images/mcd/vicet.jpeg';
import imgMcd2 from '../assets/images/mcd/melgar.jpeg';
import imgMcd3 from '../assets/images/mcd/ivan.jpeg';
import imgMcd4 from '../assets/images/mcd/arze.jpeg';
import imgMcd5 from '../assets/images/mcd/otero.jpeg';
import imgMcd6 from '../assets/images/mcd/rau.jpg';
import imgMcd7 from '../assets/images/mcd/rivero.jpeg';
import imgMcd8 from '../assets/images/mcd/palma.jpeg';
import imgMcd9 from '../assets/images/mcd/carlos asbun.jpeg';
import imgMcd10 from '../assets/images/mcd/wilson mendieta.jpeg';
import imgMcd11 from '../assets/images/mcd/sanjines.jpeg';
import imgMcd12 from '../assets/images/mcd/andres aguilera.jpeg';
import imgMcd13 from '../assets/images/mcd/pantoja.jpeg';
import imgMcd14 from '../assets/images/mcd/moreira.jpeg';
import imgMcd15 from '../assets/images/mcd/salinas.jpg';
import imgMcd16 from '../assets/images/mcd/alcoba.jpg';
import imgMcd17 from '../assets/images/mcd/herrera.jpeg';
import imgMcd18 from '../assets/images/mcd/saavedra.jpeg';
import imgMcd19 from '../assets/images/mcd/carlos sandoval.jpeg';
import imgMonroy from '../assets/images/mcd/monroy.jpg';

const mcdsData = [
  {
    year: '2026',
    name: 'Armando Sandoval',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Grigota 476 (#75008)',
    achievements: 'Coordinación del Plan de Liderazgo Regional, consolidación de la estructura de 7 capítulos constituyentes y digitalización administrativa.',
    motto: 'Liderazgo Eficaz, Progreso Colectivo',
    image: imgSandoval
  },
  {
    year: '2025',
    name: 'Diego Montenegro',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Amistad y Fidelidad (#75014)',
    achievements: 'Fortalecimiento de la hermandad intercapitular y expansión de actividades de liderazgo en la jurisdicción.',
    motto: 'Unión y Liderazgo por el Futuro',
    image: imgMcd0
  },
  {
    year: '2024',
    name: 'Vicet Ortiz',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Promoción del desarrollo integral de los miembros de la orden y consolidación de la presencia regional.',
    motto: 'Compromiso y Deber Colectivo',
    image: imgMcd1
  },
  {
    year: '2023',
    name: 'Rodrigo Melgar',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Amistad y Fidelidad (#75014)',
    achievements: 'Impulsor de la integración intercapitular y del reforzamiento de los lazos fraternales.',
    motto: 'Fraternidad en Acción',
    image: imgMcd2
  },
  {
    year: '2022',
    name: 'Iván Campos',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Amistad y Fidelidad (#75014)',
    achievements: 'Reactivación de actividades presenciales de liderazgo y organización de eventos departamentales.',
    motto: 'Lealtad y Servicio Constante',
    image: imgMcd3
  },
  {
    year: '2020',
    name: 'Adolfo Sotelo',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Juventud del Oriente 311 (#75006)',
    achievements: 'Gestión departamental enfocada en el crecimiento de la membresía y adaptabilidad a entornos virtuales.',
    motto: 'Adaptación y Fortaleza',
    image: imgSotelo
  },
  {
    year: '2019',
    name: 'Gabriel Arze',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Primax Santa Cruz 294 (#75009)',
    achievements: 'Fomento del civismo, labor filantrópica y fortalecimiento de las relaciones institucionales.',
    motto: 'Servicio por el Progreso',
    image: imgMcd4
  },
  {
    year: '2018',
    name: 'Diego Otero',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Primax Santa Cruz 294 (#75009)',
    achievements: 'Coordinación académica regional y fomento de los principios fundamentales de la orden.',
    motto: 'Excelencia y Virtud',
    image: imgMcd5
  },
  {
    year: '2017',
    name: 'Adolfo Rau',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Liderazgo y guía para las gestiones de los capítulos locales de Santa Cruz.',
    motto: 'Convicción y Liderazgo',
    image: imgMcd6
  },
  {
    year: '2016',
    name: 'Germán Monroy',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Primax Santa Cruz 294 (#75009)',
    achievements: 'Fomento de la disciplina, el ritualismo y el trabajo en equipo a nivel departamental.',
    motto: 'Disciplina y Trabajo',
    image: imgMonroy
  },
  {
    year: '2015',
    name: 'Mario Rivero',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Consolidación de proyectos comunitarios y promoción de los valores de la orden.',
    motto: 'Valores en Alto',
    image: imgMcd7
  },
  {
    year: '2014',
    name: 'Flavio Palma',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Cantera (#75024)',
    achievements: 'Participación activa en la fundación del Capítulo Cantera y liderazgo departamental destacado.',
    motto: 'Construyendo el Futuro',
    image: imgMcd8
  },
  {
    year: '2013',
    name: 'Carlos Asbún',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Promoción académica y ritualística intercapitular en el campamento.',
    motto: 'Saber y Servir',
    image: imgMcd9
  },
  {
    year: '2012',
    name: 'Wilson Mendieta',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Gestión y coordinación de la región con un fuerte enfoque de crecimiento institucional.',
    motto: 'Unión para Avanzar',
    image: imgMcd10
  },
  {
    year: '2011',
    name: 'José Anibal Sanginés',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Unificación de las actividades intercapitulares y fomento del desarrollo personal.',
    motto: 'Fraternidad Siempre',
    image: imgMcd11
  },
  {
    year: '2010',
    name: 'Andrés Aguilera',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Impulso de programas benéficos y civismo en la juventud departamental.',
    motto: 'Compromiso Social',
    image: imgMcd12
  },
  {
    year: '2009',
    name: 'Luis Fernando Pantoja',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Liderazgo institucional en la formación de futuros líderes regionales.',
    motto: 'Liderar es Servir',
    image: imgMcd13
  },
  {
    year: '2008',
    name: 'Christian Moreira',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Coordinación y fortalecimiento de la estructura administrativa regional.',
    motto: 'Orden y Progreso',
    image: imgMcd14
  },
  {
    year: '2007',
    name: 'Carlos Salinas',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Fomento del compañerismo y las virtudes filiales de la orden.',
    motto: 'Hermandad y Virtud',
    image: imgMcd15
  },
  {
    year: '2006',
    name: 'Emilio Alcoba',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Coordinación de los primeros encuentros departamentales de liderazgo juvenil.',
    motto: 'Unión y Acción',
    image: imgMcd16
  },
  {
    year: '2005',
    name: 'Eduardo Herrera',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Promoción del desarrollo ético y moral de la juventud de la región.',
    motto: 'Ética y Liderazgo',
    image: imgMcd17
  },
  {
    year: '2002',
    name: 'Agustín Saavedra',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Consolidación de las bases operativas de la orden en el departamento.',
    motto: 'Bases Firmes, Futuro Brillante',
    image: imgMcd18
  },
  {
    year: '1998',
    name: 'Carlos Andrés Sandóval',
    hometown: 'Santa Cruz de la Sierra',
    chapter: 'Jurisdicción Santa Cruz',
    achievements: 'Primeros hitos de liderazgo regional en la oficialía del campamento.',
    motto: 'Pioneros del Legado',
    image: imgMcd19
  }
];

export default function McdCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  // Tras cualquier interacción manual deja de avanzar solo (no "quitarle" la lectura al usuario)
  const [userTookControl, setUserTookControl] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (hovering || userTookControl) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mcdsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, hovering, userTookControl]);

  const handleNext = () => {
    setUserTookControl(true);
    setCurrentIndex((prev) => (prev + 1) % mcdsData.length);
  };

  const handlePrev = () => {
    setUserTookControl(true);
    setCurrentIndex((prev) => (prev - 1 + mcdsData.length) % mcdsData.length);
  };

  const selectSlide = (idx) => {
    setUserTookControl(true);
    setCurrentIndex(idx);
  };

  const currentMcd = mcdsData[currentIndex];

  return (
    <section id="murales" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 text-demolay-green mb-2">
            <Award className="h-4 w-4 text-demolay-green" />
            <span className="text-xs uppercase tracking-widest font-bold font-sans text-demolay-green-800">Galería Histórica</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
            Mural de Maestres Consejeros Departamentales (MCDs)
          </h2>
          <div className="h-1 w-20 bg-demolay-gold mx-auto mt-4 rounded-full" />
          <p className="text-stone-500 font-sans max-w-xl mx-auto mt-4 text-xs md:text-sm">
            Homenaje a los líderes regionales que guiaron los pasos del Campamento, construyendo el legado institucional de la Orden.
          </p>
        </div>

        {/* Slider Component */}
        <div className="relative max-w-4xl mx-auto" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
          {/* Main Card Container */}
          <div className="overflow-hidden bg-stone-50 rounded-xl border border-stone-200 shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">

              {/* Left Side: Premium Portrait Placeholder with Gold Trim */}
              <div className="md:col-span-5 bg-demolay-green-950 p-8 flex flex-col items-center justify-center relative min-h-[320px] border-b md:border-b-0 md:border-r border-stone-800">
                {/* Gold trim lines inside */}
                <div className="absolute inset-4 border border-demolay-gold/30 rounded-lg pointer-events-none" />
                <div className="absolute inset-6 border border-demolay-gold/15 rounded pointer-events-none" />

                {/* Animated Gold Crown glow */}
                <div className="relative mb-4 z-10">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-lg border-2 border-demolay-gold bg-gradient-to-b from-stone-900 to-stone-950 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group">
                    {currentMcd.image ? (
                      <img
                        src={currentMcd.image}
                        alt={currentMcd.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-demolay-green-900/40 to-transparent" />
                        {/* Crown Graphic */}
                        <svg viewBox="0 0 100 100" className="w-14 h-14 text-demolay-gold/75 fill-current">
                          <path d="M20,60 L28,75 L72,75 L80,60 L70,68 L50,50 L30,68 Z" />
                          <circle cx="50" cy="45" r="3" />
                          <circle cx="20" cy="55" r="2.5" />
                          <circle cx="80" cy="55" r="2.5" />
                        </svg>
                        <span className="text-xs text-demolay-gold tracking-widest uppercase font-bold mt-2">MCD</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="z-10 text-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-demolay-gold/30 to-amber-500/20 border border-gold text-stone-100 text-xs font-bold tracking-widest uppercase shadow-md">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    Gestión {currentMcd.year}
                  </span>
                </div>
              </div>

              {/* Right Side: MCD Administrative Profile info */}
              <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between min-h-[320px] text-left">
                <div>
                  <span className="text-xs font-bold text-demolay-green-800 bg-demolay-green-900/10 px-3 py-1 rounded-full border border-demolay-green/20 tracking-wider uppercase inline-block mb-3 font-sans">
                    Representante Regional
                  </span>

                  <h3 className="font-serif font-bold text-2xl md:text-3xl text-demolay-green-950 mb-1 leading-tight">
                    MCD. {currentMcd.name}
                  </h3>

                  <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider mb-5 font-sans">
                    Capítulo de Origen: <span className="text-stone-600 font-bold">{currentMcd.chapter}</span>
                  </p>

                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    {currentMcd.achievements}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 border-t border-stone-100 pt-4 font-sans">
                  <div className="text-xs md:text-sm font-serif font-bold italic text-emerald-800">
                    "{currentMcd.motto}"
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-stone-200 hover:border-demolay-gold text-stone-700 hover:text-demolay-gold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Anterior líder"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-6">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-stone-200 hover:border-demolay-gold text-stone-700 hover:text-demolay-gold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Siguiente líder"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Selector por año: etiquetas legibles y áreas de toque grandes en vez de 22 puntos */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 max-w-full px-2">
            {mcdsData.map((mcd, idx) => (
              <button
                key={mcd.year}
                onClick={() => selectSlide(idx)}
                className={`min-h-[40px] min-w-[52px] px-2.5 rounded-lg text-xs font-bold font-sans tabular-nums border transition-colors duration-150 cursor-pointer ${currentIndex === idx
                  ? 'bg-demolay-green-950 text-gold border-demolay-gold'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-demolay-gold hover:text-demolay-green-950'
                  }`}
                aria-label={`Gestión ${mcd.year}: ${mcd.name}`}
                aria-current={currentIndex === idx ? 'true' : undefined}
              >
                {mcd.year}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
