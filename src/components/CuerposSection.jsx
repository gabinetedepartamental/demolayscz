import React from 'react';
import { Shield, Award, Star, Compass } from 'lucide-react';
import logoBlason from '../assets/images/logos/Blason.png';
import logoChevalier from '../assets/images/logos/chevalierlogo.png';
import logoCastillo from '../assets/images/logos/castillo.png';
import logoPcto from '../assets/images/logos/pcto.png';

const cuerposData = [
  {
    id: 'capitulo',
    type: 'capitulo',
    logo: logoBlason,
    category: 'Cuerpos Constituyentes',
    title: 'Capítulos DeMolay',
    motto: 'Liderazgo, Fraternidad y Virtud',
    description: 'La organización base para jóvenes de 12 a 21 años. Contamos con 7 capítulos activos en el Campamento de Santa Cruz regulados bajo la Oficialia Ejecutiva para Bolivia.',
    longDescription: [
      'Los Capítulos constituyen la base operativa de la Orden DeMolay. En ellos, jóvenes de 12 a 21 años aprenden a organizar eventos, dirigir asambleas parlamentarias, administrar presupuestos y ejecutar proyectos de servicio a la comunidad.',
      'El ceremonial de los grados Iniciático y DeMolay enseña lecciones fundamentales sobre el amor filial, la reverencia por las cosas sagradas, la educación, la cortesía, la fidelidad, la pureza y el patriotismo.',
      'La Jurisdicción de Santa Cruz (Región 9) cuenta con 7 capítulos oficiales que albergan a decenas de jóvenes líderes bajo la supervisión de Consejos Consultivos calificados.'
    ],
    structure: [
      'Gestión actual: Gestión II-2026',
      'Capítulos activos en la región: 7 Capítulos en Santa Cruz',
      'Líderes de capítulo: Maestres Consejeros (M.C. electos)',
      'Grados conferidos: Grado Iniciático y Grado DeMolay.'
    ],
    virtues: ['Amor Filial', 'Reverencia por las cosas sagradas', 'Cortesía', 'Compañerismo', 'Fidelidad', 'Pureza', 'Patriotismo']
  },
  {
    id: 'priorato',
    type: 'priorato',
    logo: logoPcto,
    category: 'Cuerpo de Honor',
    title: 'Priorato',
    motto: 'Honor, Sabiduría y Caballería Moral',
    description: 'Priorato "Caballeros Templarios del Oriente" N° 82 (#75800). Destinado a Caballeros DeMolay activos de 17 a 21 años.',
    longDescription: [
      'El Priorato es un cuerpo de honor destinado a Caballeros DeMolay activos de 17 a 21 años que ostentan el Grado de Caballero.',
      'Su enfoque académico e institucional comprende el estudio avanzado de la historia medieval de las órdenes de caballería, la filosofía humanista y la filantropía social.',
      'A través del servicio fraterno dinámico, el Priorato prepara a los jóvenes para la vida de liderazgo activo y compromiso cívico en su comunidad.'
    ],
    structure: [
      'Priorato oficial: Priorato Caballeros Templarios del Oriente N° 82',
      'Registro Internacional: #75800',
      'Ilustre Comendador Caballero: Alviery Anas (Gestión II-2026)',
      'Requisito de ingreso: Ser Mayor de 17 años y menor de 21 años, ser de Grado DeMolay activo y tener minimo 2 años en la orden.'
    ],
    virtues: ['Filosofía Templaria', 'Defensa de la Libertad', 'Filantropía Social', 'Caballería Moral']
  },
  {
    id: 'corte',
    type: 'corte',
    logo: logoChevalier,
    category: 'Cuerpo de Honor',
    title: 'Corte Chevalier',
    motto: 'Fidelis Usque ad Mortem',
    description: 'Corte Chevalier "Nobles Defensores de la Independencia Boliviana" N° 75904. El máximo cuerpo de honor, integrado por Chevaliers destacados.',
    longDescription: [
      'La Corte Chevalier "Nobles Defensores de la Independencia Boliviana" N° 75904 agrupa a los hermanos de la región que han recibido la distinción de "Chevalier", el rango de honor más alto otorgado por la Corte.',
      'Esta corte tiene como misión primordial mantener viva la llama de la fidelidad a la Orden, servir como guardianes de la heráldica tradicional y solemnizar los actos protocolares del Campamento.',
      'Bajo el liderazgo del Gran Comendador Chevalier, la corte asume un rol de consejeros activos y ejemplos morales para los miembros más jóvenes de la jurisdicción.'
    ],
    structure: [
      'Cuerpo oficial: Corte Chevalier Nobles Defensores N° 75904',
      'Gran Comendador Chevalier: Adolfo Sotelo (Gestión 2026)',
      'Membresía: Postulación de los consejos consultivos capitulares, los miembros de la corte Chevalier y el supremo consejo de la Orden DeMolay para su aprobación.',
      'Rol principal: Cuerpo honorífico, asesoramiento ritual y ceremonial.'
    ],
    virtues: ['Lealtad Extrema', 'Caballerosidad', 'Servicio Meritorio', 'Fidelidad Histórica']
  },
  {
    id: 'castillo',
    type: 'castillo',
    logo: logoCastillo,
    category: 'Cuerpo Conexo',
    title: 'Castillo de Escuderos',
    motto: 'Amor Filial y Obediencia',
    description: 'Castillo "Guardianes de la Santa Cruz" N° 75508. Destinado a niños escuderos de 8 a 11 años, formándolos en virtudes morales.',
    longDescription: [
      'El Castillo de Escuderos es un cuerpo conexo diseñado especialmente para niños de 8 a 11 años de edad.',
      'Su propósito fundamental es brindar una formación moral temprana estructurada alrededor de la obediencia cívica, la devoción filial y el compañerismo sano.',
      'Bajo la guía del Mentor Escudero y asesores dedicados, los escuderos participan en actividades recreativas, rituales adaptados y labores de integración familiar.'
    ],
    structure: [
      'Castillo oficial: Castillo Guardianes de la Santa Cruz N° 75508',
      'Mentor Escudero: Alviery Anas (Gestión II-2026)',
      'Edad de admisión: Niños de 8 a 11 años de edad.',
      'Enfoque: Amor filial, compañerismo cívico y preparación ritual.'
    ],
    virtues: ['Amor Filial', 'Obediencia Cívica', 'Compañerismo', 'Puntualidad']
  }
];

export default function CuerposSection({ onOpenDetails }) {
  const getIcon = (cuerpo) => {
    if (cuerpo.logo) {
      return (
        <img
          src={cuerpo.logo}
          alt={cuerpo.title}
          loading="lazy"
          decoding="async"
          className="h-10 w-10 object-contain"
        />
      );
    }
    // Fallback Lucide icons for Priorato
    return <Award className="h-8 w-8 text-demolay-green" />;
  };

  return (
    <section id="cuerpos" className="py-20 bg-white border-b border-stone-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-demolay-green-800 mb-2">
            <Shield className="h-4 w-4 text-demolay-green" />
            <span className="text-xs uppercase tracking-widest font-bold font-sans text-demolay-green">Estructura Orgánica</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
            Cuerpos del Campamento
          </h2>
          <div className="h-1 w-20 bg-demolay-gold mx-auto mt-4 rounded-full" />
          <p className="text-stone-500 font-sans max-w-xl mx-auto mt-4 text-xs md:text-sm">
            Conozca los diferentes cuerpos constitutivos y conexos que integran y fortalecen la Orden DeMolay en la jurisdicción de Santa Cruz.
          </p>
        </div>

        {/* 4-Column Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cuerposData.map((cuerpo) => (
            <div
              key={cuerpo.id}
              className="bg-stone-50 rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300 group flex flex-col justify-between hover-premium-card"
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="h-16 w-16 bg-stone-900/5 border border-gold/30 rounded-xl flex items-center justify-center overflow-hidden p-2 transition-all duration-300">
                    {getIcon(cuerpo)}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-demolay-green bg-demolay-green-900/10 px-2 py-0.5 rounded border border-demolay-green/20">
                    {cuerpo.category}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-serif text-xl font-bold text-demolay-green-950 mb-1 leading-snug group-hover:text-demolay-green-900 transition-colors">
                  {cuerpo.title}
                </h3>

                <p className="text-xs md:text-sm font-serif font-bold italic text-stone-950 mb-3 block">
                  "{cuerpo.motto}"
                </p>

                <p className="text-stone-600 text-xs leading-relaxed mb-5 font-sans">
                  {cuerpo.description}
                </p>
              </div>

              {/* Action Trigger button */}
              <button
                onClick={() => onOpenDetails(cuerpo)}
                className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-white hover:bg-demolay-green-950 text-demolay-green-950 hover:text-stone-100 border border-stone-200 hover:border-demolay-green-950 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm group-hover:shadow-md hover-premium-button animate-fade-in"
              >
                Ver Información Detallada
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
