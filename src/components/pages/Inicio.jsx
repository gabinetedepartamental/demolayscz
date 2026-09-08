import React from 'react';
import { Heart, Compass, Users, UserPlus, ShieldCheck, Sparkles, Flag, BookOpen, Award, Calendar } from 'lucide-react';
import logo from '../../assets/images/logo1.png';
import imgLand from '../../assets/images/land.png';
import imgJaques from '../../assets/images/jaques.png';

export default function Inicio() {
  const virtues = [
    {
      name: 'Amor Filial',
      description: 'El afecto y respeto incondicional hacia nuestros padres. Es la base de un hogar sólido y el pilar fundamental que guía nuestras vidas.',
      icon: <Heart className="h-6 w-6 text-demolay-green" />
    },
    {
      name: 'Reverencia por las cosas sagradas',
      description: 'La fe profunda en lo divino y el respeto sincero hacia las creencias religiosas de los demás, fomentando la tolerancia y la devoción.',
      icon: <Compass className="h-6 w-6 text-demolay-green" />
    },
    {
      name: 'Cortesía',
      description: 'La amabilidad y caballerosidad manifestadas en nuestras acciones cotidianas. Es el respeto recíproco hacia la dignidad de cada persona.',
      icon: <Users className="h-6 w-6 text-demolay-green" />
    },
    {
      name: 'Compañerismo',
      description: 'El lazo fraterno y honesto compartido con nuestros pares. Construir amistades verdaderas basadas en la confianza y el apoyo mutuo.',
      icon: <UserPlus className="h-6 w-6 text-demolay-green" />
    },
    {
      name: 'Fidelidad',
      description: 'La observancia rigurosa de nuestras promesas y juramentos. Mantenerse firme ante los ideales de justicia y honor bajo cualquier circunstancia.',
      icon: <ShieldCheck className="h-6 w-6 text-demolay-green" />
    },
    {
      name: 'Pureza',
      description: 'La integridad en pensamientos, palabras y obras. Mantener un comportamiento limpio que honre nuestra reputación y la de la Orden.',
      icon: <Sparkles className="h-6 w-6 text-demolay-green" />
    },
    {
      name: 'Patriotismo',
      description: 'El amor y el servicio cívico a nuestra patria. Ser buenos ciudadanos y defensores constantes de las libertades y la democracia.',
      icon: <Flag className="h-6 w-6 text-demolay-green" />
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Introduction Section */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide mb-4">
              ¿Qué es la Orden DeMolay?
            </h2>
            <div className="h-1 w-20 bg-demolay-gold mx-auto rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-left text-sm text-stone-600 leading-relaxed font-sans">
              <p>
                La <strong>Orden DeMolay</strong> es la organización juvenil fraternal más grande del mundo. Fundada bajo los auspicios de la Francmasonería, está dedicada a preparar a jóvenes de entre 12 y 21 años para ser mejores ciudadanos y líderes íntegros en sus comunidades.
              </p>
              <p>
                A través del compañerismo, la autodisciplina y el desarrollo del carácter, los DeMolays participan activamente en la gestión de sus propios capítulos. Aprenden oratoria, administración financiera, resolución de problemas y servicio cívico.
              </p>
              <p>
                La Orden no es una sociedad secreta ni una religión, sino un espacio de crecimiento moral que recibe a jóvenes de diversos trasfondos cívicos y religiosos, unidos por el deseo de su superación personal e institucionalidad.
              </p>
            </div>
            
            {/* Visual Callout Box with Logo and stats */}
            <div className="bg-demolay-green-950 text-stone-100 p-8 rounded-xl border border-demolay-gold/40 shadow-xl relative overflow-hidden text-left hover-premium-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-demolay-gold/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-4">
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-demolay-gold leading-tight">Campamento de Santa Cruz</h3>
                  <p className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider">Orden DeMolay Bolivia</p>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed mb-6 font-sans">
                "Proporcionar una experiencia de liderazgo y desarrollo del carácter que empodere a los jóvenes a construir vidas con propósito, guiadas por valores morales y fraternos."
              </p>
              
              <div className="grid grid-cols-3 gap-2 text-center border-t border-stone-850 pt-4">
                <div className="border-r border-stone-850">
                  <span className="block text-base font-serif font-bold text-demolay-gold">075</span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold font-sans">Jurisdicción</span>
                </div>
                <div className="border-r border-stone-850">
                  <span className="block text-base font-serif font-bold text-demolay-gold">Reg. 9</span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold font-sans">Región</span>
                </div>
                <div>
                  <span className="block text-base font-serif font-bold text-demolay-gold">1996</span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold font-sans">Fundación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Virtues Section */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 text-demolay-green mb-2">
              <Award className="h-4 w-4 text-demolay-green" />
              <span className="text-xs uppercase tracking-widest font-bold font-sans text-demolay-green-800">Nuestros Pilares</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
              Las Siete Virtudes Cardinales
            </h2>
            <div className="h-1 w-20 bg-demolay-gold mx-auto mt-4 rounded-full" />
            <p className="text-stone-500 font-sans max-w-xl mx-auto mt-4 text-xs md:text-sm">
              Cada miembro de la Orden se esfuerza por incorporar estas luces en sus acciones diarias, guiando su crecimiento cívico e individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtues.map((v, i) => (
              <div 
                key={i}
                className={`bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-lg hover:border-gold/60 transition-all duration-300 text-left flex gap-4 hover-premium-card ${
                  i === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2 md:max-w-md md:mx-auto lg:w-full' : ''
                }`}
              >
                <div className="shrink-0 p-3 bg-demolay-green-900/10 border border-demolay-green/20 rounded-lg h-fit">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-demolay-green-950 mb-1">
                    {v.name}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed font-sans">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 text-demolay-green mb-2">
              <BookOpen className="h-4 w-4 text-demolay-green" />
              <span className="text-xs uppercase tracking-widest font-bold font-sans text-demolay-green-800">Orígenes Históricos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
              Nuestros Cimientos e Historia
            </h2>
            <div className="h-1 w-20 bg-demolay-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 mt-12">
            {/* Frank S. Land Card */}
            <div className="relative mt-20 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover-premium-card text-left flex flex-col justify-between pt-24 pb-8 px-8 group">
              {/* Backdrop Gold Glow for the character head */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-demolay-gold/20 to-demolay-gold/5 rounded-full blur-md z-10 pointer-events-none" />
              
              {/* Floating PNG */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-44 w-auto z-20 pointer-events-none select-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={imgLand} 
                  alt="Frank S. Land" 
                  className="h-full w-auto object-contain" 
                />
              </div>

              <div>
                <div className="mb-3 text-center">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-stone-100 bg-demolay-green-950 px-2 py-0.5 rounded border border-gold/30">
                    El Fundador
                  </span>
                </div>

                <div className="p-2">
                  <h3 className="font-serif text-2xl font-bold text-demolay-green-950 mb-1 text-center">
                    Frank S. Land (Dad Land)
                  </h3>
                  <p className="text-stone-500 text-[10px] font-semibold tracking-wider uppercase mb-4 flex items-center justify-center gap-1 font-sans">
                    <Calendar className="h-3.5 w-3.5 text-demolay-green" />
                    1890 - 1959 • Kansas City
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed font-sans mb-4">
                    En 1919, tras el fin de la Primera Guerra Mundial, Frank Sherman Land percibió la necesidad de guiar a jóvenes huérfanos que carecían de figuras paternas de referencia. 
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed font-sans">
                    Reunió a Louis Lower y a sus amigos, fundando la Orden DeMolay. Su liderazgo bondadoso y visión de mentor le valieron el apodo fraterno de "Dad Land" (Papá Land). Dedicó el resto de su vida al crecimiento global de la Orden.
                  </p>
                </div>
              </div>
              <div className="p-2 pt-0 mt-2">
                <div className="border-t border-stone-200 pt-4 text-[10px] text-stone-500 font-sans italic">
                  "Dad Frank S. Land inculcó que la mayor riqueza radica en guiar el potencial de la juventud."
                </div>
              </div>
            </div>

            {/* Jacques de Molay Card */}
            <div className="relative mt-20 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover-premium-card text-left flex flex-col justify-between pt-24 pb-8 px-8 group">
              {/* Backdrop Gold Glow for the character head */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-demolay-gold/20 to-demolay-gold/5 rounded-full blur-md z-10 pointer-events-none" />
              
              {/* Floating PNG */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-44 w-auto z-20 pointer-events-none select-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={imgJaques} 
                  alt="Jacques de Molay" 
                  className="h-full w-auto object-contain" 
                />
              </div>

              <div>
                <div className="mb-3 text-center">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-stone-100 bg-demolay-green-950 px-2 py-0.5 rounded border border-gold/30">
                    El Mártir Histórico
                  </span>
                </div>

                <div className="p-2">
                  <h3 className="font-serif text-2xl font-bold text-demolay-green-950 mb-1 text-center">
                    Jacques de Molay
                  </h3>
                  <p className="text-stone-500 text-[10px] font-semibold tracking-wider uppercase mb-4 flex items-center justify-center gap-1 font-sans">
                    <Calendar className="h-3.5 w-3.5 text-demolay-green" />
                    1244 - 1314 • París, Francia
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed font-sans mb-4">
                    Jacques de Molay fue el 23º y último Gran Maestre de los Caballeros Templarios. En 1307, el rey Felipe IV de Francia y el papa Clemente V disolvieron la orden bajo acusaciones infundadas para apoderarse de sus bienes.
                  </p>
                  <p className="text-stone-600 text-xs leading-relaxed font-sans">
                    De Molay pasó siete años en prisión soportando torturas. El 18 de marzo de 1314, en una isla del río Sena, prefirió ser quemado en la hoguera antes que mentir y traicionar a sus hermanos. Su ejemplo de fidelidad devela el nombre de la Orden.
                  </p>
                </div>
              </div>
              <div className="p-2 pt-0 mt-2">
                <div className="border-t border-stone-200 pt-4 text-[10px] text-stone-500 font-sans italic">
                  "Su sacrificio legó el máximo símbolo de lealtad, fidelidad y valentía fraternal."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
