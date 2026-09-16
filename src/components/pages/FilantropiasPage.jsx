import React, { useState } from 'react';
import { 
  Heart, 
  HandHeart, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  Copy, 
  Check, 
  Download, 
  Eye, 
  X, 
  Gift, 
  ShieldCheck, 
  Users, 
  Calendar,
  Clock,
  ExternalLink,
  Tag
} from 'lucide-react';

// Logos
import logoSC from '../../assets/images/logos/logo1.png';
import flyerDepartamental from '../../assets/images/filantropia/flyer_departamental.png';
import logoPrimax from '../../assets/images/logos/primax.jpeg';
import logoJdo from '../../assets/images/logos/jdo.jpeg';
import logoGrigota from '../../assets/images/logos/grigota.jpeg';
import logoPaititi from '../../assets/images/logos/paititi.jpeg';
import logoAyf from '../../assets/images/logos/ayf.png';
import logoCna from '../../assets/images/logos/cna.jpeg';
import logoCantera from '../../assets/images/logos/cantera.png';

export default function FilantropiasPage() {
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Filantropía Departamental Activa (Juguetes para Perros con Bolivia Shriners)
  const departamentalCampaign = {
    title: 'Filantropía: Juguetes para Perros',
    tagline: '¡Juguetes de EE. UU. para tu peludito! Cada compra es una donación.',
    organizer: 'Gabinete Departamental Santa Cruz & Bolivia Shriners',
    jurisdiction: 'Jurisdicción 075 - Región 9',
    period: 'Gestión 2026 • Campaña Activa',
    phone: '79887357',
    formattedPhone: '+591 79887357',
    flyerImg: flyerDepartamental,
    description: 'Actividad solidaria oficial organizada por el Gabinete Departamental de Santa Cruz en conjunto con Bolivia Shriners. ¡Consiente a tu mejor amigo con juguetes importados de EE. UU. de excelente calidad! Cada compra es una donación directa que nos ayuda a seguir transformando vidas y financiando obras sociales en Santa Cruz.',
    pricingOffers: [
      { qty: '1 Juguete', price: '40 Bs' },
      { qty: '3 Juguetes (Promo)', price: '100 Bs', featured: true }
    ],
    features: [
      { icon: <Gift className="h-4 w-4 text-demolay-gold" />, title: 'Juguetes importados de EE. UU.', desc: 'Peluches suaves y resistentes con divertidas formas (hamburguesas, donas, estrellas, etc.)' },
      { icon: <Heart className="h-4 w-4 text-demolay-gold" />, title: 'Cada compra es una donación', desc: 'El 100% de lo recaudado se destina al financiamiento de obras filantrópicas y ayuda comunitaria.' },
      { icon: <ShieldCheck className="h-4 w-4 text-demolay-gold" />, title: 'Alianza Institucional', desc: 'Iniciativa respaldada por el Gabinete Departamental DeMolay Santa Cruz y Bolivia Shriners.' },
      { icon: <HandHeart className="h-4 w-4 text-demolay-gold" />, title: 'Entrega y coordinación rápida', desc: 'Pide tus juguetes vía WhatsApp y coordinamos la entrega directa en Santa Cruz.' }
    ]
  };

  // Capítulos de la Jurisdicción (Próximamente)
  const capitulosList = [
    { name: 'Capítulo Primax Santa Cruz N° 294', code: '#75009', logo: logoPrimax },
    { name: 'Capítulo Juventud del Oriente N° 311', code: '#75006', logo: logoJdo },
    { name: 'Capítulo Grigotá N° 476', code: '#75008', logo: logoGrigota },
    { name: 'Capítulo Gran Paititi N° 540', code: '#75007', logo: logoPaititi },
    { name: 'Capítulo Amistad y Fidelidad', code: '#75014', logo: logoAyf },
    { name: 'Capítulo Caballeros de la Nueva Alianza', code: '#75017', logo: logoCna },
    { name: 'Capítulo Cantera', code: '#75024', logo: logoCantera }
  ];

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const whatsappUrl = `https://wa.me/59179887357?text=${encodeURIComponent(
    'Hola, me comunico desde la web oficial de DeMolay Santa Cruz. Deseo hacer un pedido de juguetes para perros de la Filantropía DeMolay & Bolivia Shriners (1 x 40 Bs / 3 x 100 Bs).'
  )}`;

  return (
    <div className="animate-fade-in bg-stone-50 min-h-screen">
      
      {/* 1. Featured Departmental Philanthropy Card */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Badge */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-demolay-green font-bold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="h-3.5 w-3.5 text-demolay-gold" />
              <span>Acción Social & Beneficencia</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-demolay-green-950">
              Filantropía Departamental Activa
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-300 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-ping" />
            <span>Campaña Oficial en Curso</span>
          </div>
        </div>

        {/* Departmental Campaign Main Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden hover:border-gold/60 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Flyer Preview */}
            <div className="lg:col-span-5 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 p-6 sm:p-8 flex flex-col justify-between items-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-800">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,82,38,0.45),rgba(0,0,0,0.95))] pointer-events-none" />

              {/* Flyer Top Tag */}
              <div className="w-full flex items-center justify-between gap-2 mb-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gold text-stone-950 px-3 py-1 rounded-full shadow">
                  Flyer Oficial
                </span>
                <span className="text-[10px] font-semibold text-stone-300 flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-gold" />
                  Gestión 2026
                </span>
              </div>

              {/* Interactive Flyer Thumbnail */}
              <div 
                onClick={() => setIsFlyerModalOpen(true)}
                className="relative group cursor-pointer w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl border border-gold/40 z-10 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img 
                  src={departamentalCampaign.flyerImg} 
                  alt="Flyer Filantropía Juguetes para Perros" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Hover overlay with pulse */}
                <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-stone-100 p-4">
                  <Eye className="h-8 w-8 text-gold animate-bounce" />
                  <span className="text-xs font-bold uppercase tracking-wider text-center">
                    Clic para ver Flyer en Pantalla Completa
                  </span>
                </div>
              </div>

              {/* Bottom Flyer Buttons */}
              <div className="w-full grid grid-cols-2 gap-2.5 mt-6 z-10">
                <button
                  onClick={() => setIsFlyerModalOpen(true)}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold uppercase tracking-wider border border-stone-700 transition-colors cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5 text-gold" />
                  <span>Ver Flyer</span>
                </button>

                <a
                  href="/flyer_departamental.png"
                  download="Flyer_Filantropia_Juguetes_Perros_DeMolay_SCZ.png"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-demolay-green-950 hover:bg-demolay-green-900 text-gold rounded-xl text-xs font-bold uppercase tracking-wider border border-gold/40 transition-colors cursor-pointer shadow-sm text-center"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Descargar</span>
                </a>
              </div>
            </div>

            {/* Right Column: Information, Pricing & Order Button */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left">
              
              <div>
                {/* Organizers / Partners Header */}
                <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                  <img src={logoSC} alt="Logo SC" className="h-7 w-7 object-contain" />
                  <span className="text-xs font-bold uppercase tracking-widest text-demolay-green-900">
                    {departamentalCampaign.organizer}
                  </span>
                </div>

                {/* Main Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-demolay-green-950 leading-tight mb-2">
                  {departamentalCampaign.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm sm:text-base font-semibold text-demolay-gold font-sans mb-4">
                  {departamentalCampaign.tagline}
                </p>

                {/* Description */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans mb-6">
                  {departamentalCampaign.description}
                </p>

                {/* Pricing / Offer Banner */}
                <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-demolay-green-950 via-demolay-green-900 to-demolay-green-950 text-stone-100 border border-gold/40 shadow-md">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold font-bold mb-2">
                    <Tag className="h-3.5 w-3.5" />
                    <span>Precios & Promoción Oficial:</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                      <span className="block text-xs uppercase text-stone-300 font-semibold mb-0.5">Precio Unitario</span>
                      <strong className="text-xl sm:text-2xl font-serif text-white">1 x 40 BS</strong>
                    </div>

                    <div className="p-3 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl border border-gold/40 text-center relative overflow-hidden">
                      <div className="absolute top-1 right-1 bg-gold text-stone-950 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                        Mejor Opción
                      </div>
                      <span className="block text-xs uppercase text-gold font-bold mb-0.5">Super Promo</span>
                      <strong className="text-xl sm:text-2xl font-serif text-amber-300">3 x 100 BS</strong>
                    </div>
                  </div>
                </div>

                {/* Campaign Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {departamentalCampaign.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-start gap-2.5">
                      <div className="p-1.5 bg-white rounded-lg border border-stone-200 shrink-0 mt-0.5">
                        {feat.icon}
                      </div>
                      <div>
                        <strong className="block text-demolay-green-950 font-bold text-xs">{feat.title}</strong>
                        <span className="text-stone-500 text-[11px] leading-snug">{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Order & WhatsApp Section */}
              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-400">
                    Línea Oficial de Pedidos y Donaciones:
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Phone className="h-4 w-4 text-emerald-600" />
                    <span className="font-mono text-lg font-bold text-demolay-green-950">
                      {departamentalCampaign.phone}
                    </span>
                    <button
                      onClick={() => handleCopy(departamentalCampaign.phone)}
                      title="Copiar número de teléfono"
                      className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-lg text-xs transition-colors cursor-pointer flex items-center gap-1"
                    >
                      {copiedPhone ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      <span className="text-[10px]">{copiedPhone ? '¡Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>

                {/* Big WhatsApp CTA Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer text-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Pedir por WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 3. Chapter Philanthropies (Próximamente...) */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-demolay-green font-bold text-xs uppercase tracking-widest mb-2">
              <Users className="h-4 w-4 text-demolay-green" />
              <span>Acción en los Capítulos</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-demolay-green-950 tracking-wide">
              Filantropías Capitulares
            </h2>
            <div className="h-1 w-20 bg-demolay-gold mx-auto mt-3 rounded-full" />
            <p className="text-stone-500 font-sans text-xs md:text-sm mt-4 leading-relaxed">
              Próximamente estaremos publicando las iniciativas y campañas de acción social activas de cada uno de los 7 Capítulos de Santa Cruz.
            </p>
          </div>

          {/* Chapter Cards Preview (Próximamente Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {capitulosList.map((cap, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-2xl border border-stone-200 p-5 flex flex-col items-center text-center justify-between hover:border-gold/60 transition-all duration-300 shadow-sm group hover-premium-card"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-3">
                    <img 
                      src={cap.logo} 
                      alt={cap.name} 
                      className="h-16 w-16 rounded-full object-cover border-2 border-stone-200 group-hover:border-gold shadow-sm transition-all duration-300"
                    />
                  </div>

                  <h3 className="font-serif font-bold text-xs text-demolay-green-950 mb-1 leading-snug">
                    {cap.name}
                  </h3>
                  <span className="text-[10px] text-stone-500 font-mono font-semibold">
                    {cap.code}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 w-full flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 py-1.5 px-2 rounded-lg border border-amber-200/80">
                  <Clock className="h-3 w-3 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Próximamente...</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Fullscreen Flyer Lightbox Modal */}
      {isFlyerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-xl w-full max-h-[92vh] flex flex-col items-center bg-stone-900 border border-gold/40 rounded-2xl overflow-hidden shadow-2xl p-4">
            
            {/* Close button */}
            <button
              onClick={() => setIsFlyerModalOpen(false)}
              className="absolute top-4 right-4 text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700 p-2 rounded-full transition-colors cursor-pointer z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Header info */}
            <div className="w-full text-left mb-3 px-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Campaña Departamental Oficial</span>
              <h3 className="text-lg font-serif font-bold text-stone-100">{departamentalCampaign.title}</h3>
            </div>

            {/* Flyer Image Container */}
            <div className="w-full overflow-y-auto max-h-[70vh] flex justify-center rounded-lg bg-black/40 p-2">
              <img 
                src={departamentalCampaign.flyerImg} 
                alt="Flyer Oficial Pantalla Completa" 
                className="max-w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Bottom Actions */}
            <div className="w-full flex items-center justify-between gap-3 pt-4 mt-2 border-t border-stone-800">
              <span className="text-xs text-stone-400 font-sans hidden sm:inline">
                Campamento de Santa Cruz • Bolivia Shriners
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href="/flyer_departamental.png"
                  download="Flyer_Filantropia_Juguetes_Perros_DeMolay_SCZ.png"
                  className="inline-flex items-center gap-1.5 py-2 px-4 bg-demolay-green-950 hover:bg-demolay-green-900 text-gold rounded-xl text-xs font-bold uppercase tracking-wider border border-gold/40 transition-colors shadow-sm cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Descargar Flyer</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsFlyerModalOpen(false)}
                  className="py-2 px-4 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
