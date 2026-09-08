import React from 'react';
import { ArrowLeft, Calendar, User, Users, Swords } from 'lucide-react';
import logoCantera from '../../assets/images/cantera.png';
import logoAyf from '../../assets/images/ayf.png';
import logoPrimax from '../../assets/images/primax.jpeg';
import logoCna from '../../assets/images/cna.jpeg';
import logoPaititi from '../../assets/images/paititi.jpeg';
import logoGrigota from '../../assets/images/grigota.jpeg';
import logoJdo from '../../assets/images/jdo.jpeg';

const capitulos = [
  {
    number: '294',
    code: '#75009',
    name: 'Capítulo Primax Santa Cruz N° 294',
    logo: logoPrimax,
    founded: '31 de Agosto de 1996',
    founder: 'Patrick Seoane',
    members: 34,
    motto: 'Precursores de la Fraternidad'
  },
  {
    number: '311',
    code: '#75006',
    name: 'Capítulo Juventud del Oriente N° 311',
    logo: logoJdo,
    founded: '20 Marzo de 1997',
    founder: 'T. Julio David Pérez',
    members: 38,
    motto: 'Luz y Virtud en el Sendero'
  },
  {
    number: '476',
    code: '#75008',
    name: 'Capítulo Grigota N° 476',
    logo: logoGrigota,
    founded: '15 de Marzo de 2001',
    founder: 'H. Eduardo Inchasute',
    members: 40,
    motto: 'Fidelidad que Inspira'
  },
  {
    number: '540',
    code: '#75007',
    name: 'Capítulo Gran Paititi N° 540',
    logo: logoPaititi,
    founded: '06 de Diciembre de 2001',
    founder: 'H. Alex Moreira',
    members: 31,
    motto: 'Sabiduría y Progreso Colectivo'
  },
  {
    number: '75014',
    code: '#75014',
    name: 'Capítulo Amistad y Fidelidad',
    logo: logoAyf,
    founded: '28 de Octubre de 2002',
    founder: 'Carlos Balcázar',
    members: 22,
    motto: 'Guiados por la Estrella del Deber'
  },
  {
    number: '75017',
    code: '#75017',
    name: 'Capítulo Caballeros de la Nueva Alianza',
    logo: logoCna,
    founded: '20 de Octubre de 2005',
    founder: 'Lord Christian Rivero',
    members: 21,
    motto: 'Fuerza, Unión y Fraternidad'
  },
  {
    number: '75024',
    code: '#75024',
    name: 'Capítulo Cantera',
    logo: logoCantera,
    founded: '07 de Abril de 2012',
    founder: 'Lord Flavio Palma',
    members: 25,
    motto: 'Donde se pule la piedra bruta a diamantes'
  }
];

export default function CapitulosListPage({ onBack }) {
  return (
    <section className="py-16 bg-stone-50 min-h-screen animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 text-left font-sans">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-stone-500 hover:text-demolay-green font-bold uppercase tracking-wider text-xs mb-3 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver a Cuerpos
            </button>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
              Capítulos Constituyentes
            </h2>
            <p className="text-xs text-stone-400 uppercase tracking-widest font-semibold mt-1">
              Jurisdicción 075 - Región 9 • Gestión II-2026
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-demolay-green-950 text-stone-100 border border-gold/30 text-xs font-bold uppercase tracking-wider">
            <Swords className="h-4.5 w-4.5 text-gold" />
            <span>7 Capítulos Activos</span>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capitulos.map((cap) => (
            <div
              key={cap.number}
              className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300 flex flex-col justify-between hover-premium-card"
            >
              <div>
                {/* Shield Image & Registration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/10 rounded-full blur-md" />
                    <div className="relative h-16 w-16 bg-stone-900/5 border border-gold/35 rounded-xl flex items-center justify-center overflow-hidden p-2 transition-all duration-300">
                      <img src={cap.logo} alt={cap.name} className="h-full w-full object-contain" />
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 font-sans text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-demolay-green bg-demolay-green-900/10 border border-demolay-green/20 px-2.5 py-1 rounded">
                      {cap.code}
                    </span>
                  </div>
                </div>

                {/* Chapter Name */}
                <h3 className="font-serif text-xl font-bold text-demolay-green-950 mb-1 leading-snug">
                  {cap.name}
                </h3>
                <p className="text-[10px] italic font-serif text-stone-400 mb-4">
                  "{cap.motto}"
                </p>

                {/* Metadata List */}
                <ul className="space-y-2.5 text-xs text-stone-600 border-t border-stone-100 pt-4 text-left font-sans">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-demolay-green shrink-0" />
                    <span>Fundación: <strong className="text-stone-800">{cap.founded}</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <User className="h-4 w-4 text-demolay-green shrink-0" />
                    <span>Fundador: <strong className="text-stone-800">{cap.founder}</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-demolay-green shrink-0" />
                    <span>Membresía: <strong className="text-stone-800">{cap.members} Hermanos Activos</strong></span>
                  </li>
                </ul>
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-3 border-t border-stone-100 flex justify-end">
                <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-sans">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Columnas en Pie
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
