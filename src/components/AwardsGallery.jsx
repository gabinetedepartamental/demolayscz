import React from 'react';
import { Award, Star, ShieldCheck, Map, Globe } from 'lucide-react';

const recognitions = [
  {
    id: 'mejor-priorato-2025',
    title: 'Mejor Priorato de Bolivia (Gestión 2025)',
    scope: 'Nacional',
    authority: 'Oficialia Ejecutiva de la Orden DeMolay para Bolivia',
    description: 'Otorgado al Priorato "Caballeros Templarios del Oriente N° 82" (#75800) de Santa Cruz, en mérito a su excepcional desempeño litúrgico, administrativo y filantrópico durante el año 2025.',
    criteria: 'Excelencia Litúrgica y Orgánica'
  },
  {
    id: 'mejor-demolay-2025',
    title: 'DeMolay del Año de Bolivia 2025',
    scope: 'Nacional',
    authority: 'Oficialia Ejecutiva de la Orden DeMolay para Bolivia',
    description: 'Otorgado a Lord Enzo Nicolas Ortiz Peralta, investido de la Corte Chevalier "Nobles Defensores de la Independencia Boliviana N° 75904" y miembro del Capítulo Cantera (#75024), en testimonio de su liderazgo y devoción.',
    criteria: 'Liderazgo y Fidelidad Ejemplar'
  },
  {
    id: 'ilustre-comendador-caballero-2025',
    title: 'Ilustre Comendador Caballero del Año de Bolivia 2025',
    scope: 'Nacional',
    authority: 'Oficialia Ejecutiva de la Orden DeMolay para Bolivia',
    description: 'Otorgado al Sir Leonardo Antelo Sánchez, distinguido como el Mejor Ilustre Caballero de la gestión 2025 por su honor, destacada conducción y servicio a la Orden de Caballería.',
    criteria: 'Servicio de un Caballero Ejemplar'
  }
];

export default function AwardsGallery() {
  return (
    <section id="reconocimientos" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-demolay-green mb-2">
            <Award className="h-4 w-4 text-demolay-green" />
            <span className="text-xs uppercase tracking-widest font-bold font-sans text-demolay-green-800">Méritos Oficiales</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
            Reconocimientos & Honores
          </h2>
          <div className="h-1 w-20 bg-demolay-gold mx-auto mt-4 rounded-full" />
          <p className="text-stone-500 font-sans max-w-xl mx-auto mt-4 text-xs md:text-sm">
            La Orden DeMolay exalta la excelencia. Esta galería reúne los galardones nacionales e internacionales que distinguen a los hermanos del Campamento.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recognitions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300 relative overflow-hidden group flex flex-col justify-between hover-premium-card"
            >
              {/* Premium Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-demolay-gold/5 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Gold Badge Icon and Header */}
                <div className="flex items-start justify-between mb-6">
                  {/* Glowing Gold Badge */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-md group-hover:bg-gold/30 transition-colors" />
                    <div className="relative p-3.5 bg-demolay-green-950 border border-gold/50 rounded-full text-gold">
                      <Award className="h-6 w-6 animate-pulse" />
                    </div>
                  </div>

                  {/* Scope Badge */}
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 ${item.scope === 'Internacional'
                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                    {item.scope === 'Internacional' ? <Globe className="h-2.5 w-2.5" /> : <Map className="h-2.5 w-2.5" />}
                    {item.scope}
                  </span>
                </div>

                {/* Text Title */}
                <h3 className="font-serif text-xl font-bold text-demolay-green-950 mb-1 leading-tight group-hover:text-demolay-green-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-[10px] text-stone-400 uppercase font-semibold tracking-wider mb-4 font-sans">
                  Otorgado por: <span className="text-stone-500">{item.authority}</span>
                </p>

                <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>
              </div>

              {/* Criteria / Footnote */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[9px] uppercase font-bold text-demolay-green-800 tracking-widest flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-demolay-green" />
                  Criterio de Mérito
                </span>
                <span className="text-[11px] font-semibold text-stone-500 font-sans">
                  {item.criteria}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
