import React, { useState } from 'react';
import {
  Heart,
  HandHeart,
  Sparkles,
  MapPin,
  Calendar,
  Phone,
  MessageCircle,
  Share2,
  Copy,
  Check,
  Download,
  Eye,
  X,
  CheckCircle2,
  Gift,
  School,
  Utensils,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Users,
  Search
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
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

  // Filantropía Departamental Activa (Juguetes para Perros con Bolivia Shriners)
  const departamentalCampaign = {
    title: 'Filantropía: Juguetes para Perros',
    tagline: '¡Juguetes de EE. UU. para tu peludito! Cada compra es una donación.',
    organizer: 'Gabinete Departamental Santa Cruz & Bolivia Shriners',
    jurisdiction: 'Jurisdicción 075 - Región 9',
    period: 'Gestión 2026 • Activa Actualmente',
    flyerImg: flyerDepartamental,
    description: 'Actividad filantrópica oficial conjunta entre el Gabinete Departamental de Santa Cruz y Bolivia Shriners. ¡Juguetes importados de EE. UU. de excelente calidad para consentir a tu perro y apoyar nuestras obras solidarias! Cada compra es una donación directa para seguir transformando vidas en nuestra comunidad.',
    pricing: '1 x 40 Bs | 3 x 100 Bs',
    stats: [
      { label: 'Precio Unitario', value: '40 Bs' },
      { label: 'Oferta Especial', value: '3 x 100 Bs' },
      { label: 'Origen', value: 'EE. UU.' },
      { label: 'Estado', value: 'En Venta' }
    ],
    needs: [
      { icon: <Gift className="h-4 w-4 text-demolay-gold" />, name: 'Peluches y juguetes variados importados de EE. UU.' },
      { icon: <Heart className="h-4 w-4 text-demolay-gold" />, name: 'Diseños divertidos: hamburguesas, donas, estrellas, etc.' },
      { icon: <HandHeart className="h-4 w-4 text-demolay-gold" />, name: '100% de lo recaudado destinado a obras benéficas' },
      { icon: <ShieldCheck className="h-4 w-4 text-demolay-gold" />, name: 'En alianza con Bolivia Shriners y DeMolay Santa Cruz' }
    ],
    contacts: [
      {
        name: 'Pedidos y Consultas de Filantropía',
        role: 'Coordinación Filantropía DeMolay & Shriners',
        phone: '+591 79887357',
        displayPhone: '79887357',
        waMessage: 'Hola, deseo adquirir juguetes para perros de la Filantropía DeMolay Santa Cruz y Bolivia Shriners (1 x 40 Bs / 3 x 100 Bs).'
      }
    ]
  };

  // Filantropías activas de los Capítulos
  const chapterCampaigns = [
    {
      id: 'primax-mochila',
      chapter: 'Capítulo Primax Santa Cruz N° 294',
      code: '#75009',
      logo: logoPrimax,
      title: 'Mochila Solidaria Primax',
      status: 'Activa',
      period: 'Gestión I-2026',
      beneficiary: 'Escuela Especial y Hogar Infantil de Barrio Periurbano',
      description: 'Campaña enfocada en armar kits escolares completos para niños con capacidades diferentes y escasos recursos, asegurando su inclusión educativa.',
      items: 'Mochilas, cuadernos de dibujo, lápices de colores gruesos, plastilinas y tijeras adaptadas.',
      contactName: 'MC. Sebastián Claros',
      contactPhone: '+591 78460613',
      displayPhone: '78460613'
    },
    {
      id: 'jdo-pan-esperanza',
      chapter: 'Capítulo Juventud del Oriente N° 311',
      code: '#75006',
      logo: logoJdo,
      title: 'Pan y Esperanza JDO',
      status: 'Activa',
      period: 'Gestión I-2026',
      beneficiary: 'Hogar de Ancianos Santa Cruz',
      description: 'Jornadas de desayuno solidario, compañía y dotación mensual de insumos de primera necesidad para adultos mayores en situación de desamparo.',
      items: 'Avena, leche en polvo, pañales para adulto, artículos de higiene y frazadas.',
      contactName: 'MC. Sebastián Catacora',
      contactPhone: '+591 78460613',
      displayPhone: '78460613'
    },
    {
      id: 'grigota-abrigando',
      chapter: 'Capítulo Grigotá N° 476',
      code: '#75008',
      logo: logoGrigota,
      title: 'Abrigando Vidas Grigotá',
      status: 'Activa',
      period: 'Gestión I-2026',
      beneficiary: 'Comunidades vulnerables y personas en situación de calle',
      description: 'Recolección y distribución de ropa de abrigo, frazadas y bebidas calientes durante los descensos de temperatura en la ciudad.',
      items: 'Chompas, colchas, abrigos limpios, zapatos y alimentos calientes enlatados.',
      contactName: 'MC. Roberto Roca',
      contactPhone: '+591 78460613',
      displayPhone: '78460613'
    },
    {
      id: 'paititi-verde',
      chapter: 'Capítulo Gran Paititi N° 540',
      code: '#75007',
      logo: logoPaititi,
      title: 'Reforestación y Conciencia Verde',
      status: 'Activa',
      period: 'Gestión I-2026',
      beneficiary: 'Parques públicos y áreas verdes comunitarias',
      description: 'Jornada ecológica y siembra de árboles nativos de la región (Tajibo, Toborochi, Cupesí) junto a talleres de cuidado ambiental para la juventud.',
      items: 'Plantines nativos, abono orgánico, palas y voluntarios para la siembra.',
      contactName: 'MC. Thiago Arcienega',
      contactPhone: '+591 78460613',
      displayPhone: '78460613'
    },
    {
      id: 'ayf-gotas',
      chapter: 'Capítulo Amistad y Fidelidad',
      code: '#75014',
      logo: logoAyf,
      title: 'Gotas de Fraternidad',
      status: 'Activa',
      period: 'Gestión I-2026',
      beneficiary: 'Banco Regional de Sangre Santa Cruz',
      description: 'Campaña institucional de donación voluntaria y solidaria de sangre, fomentando la empatía y la ayuda directa a pacientes que requieren transfusiones.',
      items: 'Donantes voluntarios y apoyo en logística de difusión.',
      contactName: 'MC. Lucas Franco',
      contactPhone: '+591 78460613',
      displayPhone: '78460613'
    },
    {
      id: 'cna-infancia',
      chapter: 'Capítulo Caballeros de la Nueva Alianza',
      code: '#75017',
      logo: logoCna,
      title: 'Luz en la Infancia CNA',
      status: 'Activa',
      period: 'Gestión I-2026',
      beneficiary: 'Comedor Infantil Comunitario Los Lotes',
      description: 'Apoyo continuo con canastas de víveres secos y actividades recreativas mensuales con talleres de virtudes y valores para niños del barrio.',
      items: 'Arroz, fideo, aceite, azúcar, libros de cuentos y material lúdico.',
      contactName: 'MC. Lucas Morris',
      contactPhone: '+591 78460613',
      displayPhone: '78460613'
    },
    {
      id: 'cantera-sonrisas',
      chapter: 'Capítulo Cantera',
      code: '#75024',
      logo: logoCantera,
      title: 'Sembrando Sonrisas Cantera',
      status: 'Activa',
      period: 'Gestión I-2026',
      beneficiary: 'Hogar San José y Centros de Acogida Temporal',
      description: 'Agasajos solidarios, entrega de juguetes didácticos y actividades artísticas para devolver la sonrisa a niños en hogares de acogida temporal.',
      items: 'Juguetes no bélicos, juegos de mesa, ropa infantil y meriendas nutritivas.',
      contactName: 'MC. Nicolás Ballivián',
      contactPhone: '+591 78460613',
      displayPhone: '78460613'
    }
  ];

  const handleCopyPhone = (text, index) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2500);
    }
  };

  const filteredCampaigns = chapterCampaigns.filter(c =>
    c.chapter.toLowerCase().includes(searchFilter.toLowerCase()) ||
    c.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    c.beneficiary.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="animate-fade-in bg-stone-50 min-h-screen">

      {/* 1. Header Banner */}
      <section className="bg-demolay-green-950 text-stone-100 py-16 md:py-20 border-b border-demolay-gold/30 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-demolay-gold/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-demolay-green/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-demolay-green-900/90 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <HandHeart className="h-4 w-4 text-gold animate-pulse" />
            <span>Acción Social & Amor Fraterno</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-100 tracking-wide mb-4">
            Filantropías DeMolay Santa Cruz
          </h1>
          <div className="h-1 w-24 bg-demolay-gold mx-auto rounded-full mb-6" />

          <p className="max-w-3xl mx-auto text-sm md:text-base text-stone-300 font-sans leading-relaxed">
            El servicio a la comunidad y la ayuda al prójimo son pilares sagrados de la Orden DeMolay. A través de nuestras obras filantrópicas departamentales y capitulares, transformamos valores en acciones concretas que impactan positivamente en Santa Cruz.
          </p>
        </div>
      </section>

      {/* 2. Featured Departmental Philanthropy */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-demolay-green font-bold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="h-3.5 w-3.5 text-demolay-gold" />
              <span>Campaña Central del Campamento</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-demolay-green-950">
              Filantropía Departamental Activa
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-300 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-ping" />
            <span>Campaña Oficial en Curso</span>
          </div>
        </div>

        {/* Big Departmental Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden hover:border-gold/60 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left Column: Flyer & Visual Preview */}
            <div className="lg:col-span-5 bg-stone-900 p-6 sm:p-8 flex flex-col justify-between items-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-800">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,82,38,0.4),rgba(0,0,0,0.9))] pointer-events-none" />

              {/* Top flyer badge */}
              <div className="w-full flex items-center justify-between gap-2 mb-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gold text-stone-950 px-2.5 py-1 rounded shadow">
                  Flyer Oficial
                </span>
                <span className="text-[10px] font-semibold text-stone-300 flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-gold" />
                  Gestión 2026
                </span>
              </div>

              {/* Flyer Image Container with Hover Overlay */}
              <div
                onClick={() => setIsFlyerModalOpen(true)}
                className="relative group cursor-pointer w-full max-w-sm rounded-xl overflow-hidden shadow-2xl border border-gold/40 z-10 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={departamentalCampaign.flyerImg}
                  alt="Flyer Campaña Manos Unidas DeMolay Santa Cruz"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-stone-100 p-4">
                  <Eye className="h-8 w-8 text-gold animate-bounce" />
                  <span className="text-xs font-bold uppercase tracking-wider text-center">
                    Clic para ver Flyer en Pantalla Completa
                  </span>
                </div>
              </div>

              {/* Bottom Flyer Quick Actions */}
              <div className="w-full grid grid-cols-2 gap-2 mt-6 z-10">
                <button
                  onClick={() => setIsFlyerModalOpen(true)}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-bold uppercase tracking-wider border border-stone-700 transition-colors cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5 text-gold" />
                  <span>Ver Flyer</span>
                </button>

                <a
                  href="/flyer_departamental.jpg"
                  download="Flyer_Campana_Manos_Unidas_DeMolay_SCZ.jpg"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-demolay-green-950 hover:bg-demolay-green-900 text-gold rounded-lg text-xs font-bold uppercase tracking-wider border border-gold/40 transition-colors cursor-pointer shadow-sm text-center"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Descargar</span>
                </a>
              </div>
            </div>

            {/* Right Column: Campaign Information & Direct Contacts */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left">

              <div>
                {/* Organization & Title */}
                <div className="flex items-center gap-2 mb-2">
                  <img src={logoSC} alt="Logo Santa Cruz" className="h-7 w-7 object-contain" />
                  <span className="text-xs font-bold uppercase tracking-widest text-demolay-green-900">
                    {departamentalCampaign.organizer}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-demolay-green-950 leading-tight mb-2">
                  {departamentalCampaign.title}
                </h3>

                <p className="text-sm font-semibold text-demolay-gold font-sans mb-4">
                  {departamentalCampaign.tagline}
                </p>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans mb-6">
                  {departamentalCampaign.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  {departamentalCampaign.stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <span className="block font-serif text-base sm:text-lg font-bold text-demolay-green-950">{st.value}</span>
                      <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold font-sans">{st.label}</span>
                    </div>
                  ))}
                </div>

                {/* What we need / Donations List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
                    <Gift className="h-4 w-4 text-demolay-green" />
                    Donaciones Solicitadas:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {departamentalCampaign.needs.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-stone-700 text-xs">
                        <div className="p-1 bg-white rounded border border-emerald-200 shrink-0">
                          {item.icon}
                        </div>
                        <span className="leading-snug">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collection Points */}
                <div className="mb-8 p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs text-stone-700">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-950 text-[11px] mb-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-800" />
                    Puntos y Modalidades de Recepción:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-stone-600 text-xs">
                    <li><strong>Sede Central DeMolay SCZ:</strong> Coordinación directa para recepción en días y horarios acordados.</li>
                    <li><strong>Capítulos de Santa Cruz:</strong> Puntos de entrega mediante los Maestres Consejeros de cada Capítulo.</li>
                    <li><strong>Recojo a domicilio/oficina:</strong> Para donaciones en cantidad, nuestro equipo de voluntarios puede coordinar el recojo.</li>
                  </ul>
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="pt-6 border-t border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-demolay-green-950 mb-4 flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-demolay-green" />
                  Canales de Contacto Directo y Coordinación:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {departamentalCampaign.contacts.slice(0, 2).map((contact, cIdx) => (
                    <div key={cIdx} className="bg-stone-50 rounded-xl border border-stone-200 p-3.5 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold block mb-0.5">
                          {contact.role}
                        </span>
                        <h5 className="font-serif font-bold text-sm text-demolay-green-950 mb-1">
                          {contact.name}
                        </h5>
                        <p className="text-xs font-mono font-semibold text-stone-600 mb-3">
                          Tel: {contact.phone}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-stone-200">
                        {/* WhatsApp CTA Button */}
                        <a
                          href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contact.waMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        {/* Copy button */}
                        <button
                          onClick={() => handleCopyPhone(contact.displayPhone, cIdx)}
                          title="Copiar número de teléfono"
                          className="p-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-lg transition-colors cursor-pointer"
                        >
                          {copiedIndex === cIdx ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 3. Chapter Philanthropies Section */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="text-left">
              <div className="inline-flex items-center gap-1.5 text-demolay-green font-bold text-xs uppercase tracking-widest mb-2">
                <Users className="h-4 w-4 text-demolay-green" />
                <span>Impacto en la Comunidad</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-demolay-green-950 tracking-wide">
                Filantropías Activas de los Capítulos
              </h2>
              <div className="h-1 w-20 bg-demolay-gold mt-3 rounded-full" />
              <p className="text-stone-500 font-sans text-xs md:text-sm mt-3 max-w-xl">
                Cada Capítulo de Santa Cruz lidera iniciativas solidarias constantes en beneficio de asilos, hogares de niños, comedores y el medio ambiente.
              </p>
            </div>

            {/* Search / Filter bar */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Buscar por capítulo o campaña..."
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:border-demolay-gold text-stone-800"
              />
            </div>
          </div>

          {/* Chapter Campaigns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((camp) => (
              <div
                key={camp.id}
                className="bg-stone-50 rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:border-gold hover:shadow-lg transition-all duration-300 text-left hover-premium-card group"
              >
                <div>
                  {/* Top Chapter Badge & Logo */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={camp.logo}
                        alt={camp.chapter}
                        className="h-9 w-9 rounded-full object-cover border border-gold/40 shadow-sm"
                      />
                      <div>
                        <h4 className="font-serif font-bold text-xs text-demolay-green-950 leading-tight">
                          {camp.chapter}
                        </h4>
                        <span className="text-[9px] uppercase tracking-wider text-stone-500 font-semibold font-sans">
                          {camp.code} • {camp.period}
                        </span>
                      </div>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300 shrink-0">
                      {camp.status}
                    </span>
                  </div>

                  {/* Campaign Title */}
                  <h3 className="font-serif text-lg font-bold text-demolay-green-950 mb-2 group-hover:text-demolay-green-900 transition-colors">
                    {camp.title}
                  </h3>

                  {/* Beneficiary Tag */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-demolay-gold bg-demolay-green-950 px-2.5 py-1 rounded mb-3">
                    <Heart className="h-3 w-3 text-gold shrink-0" />
                    <span className="truncate max-w-[240px]">{camp.beneficiary}</span>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 text-xs font-sans leading-relaxed mb-4">
                    {camp.description}
                  </p>

                  {/* Items needed */}
                  <div className="bg-white p-3 rounded-lg border border-stone-200 mb-5 text-xs text-stone-700">
                    <span className="block font-bold text-[10px] uppercase tracking-wider text-stone-500 mb-1">
                      Insumos solicitados:
                    </span>
                    <p className="text-stone-600 leading-snug">{camp.items}</p>
                  </div>
                </div>

                {/* Footer & Contact button */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-2">
                  <div className="text-[11px] font-sans">
                    <span className="block text-stone-400 text-[9px] uppercase font-semibold">Contacto:</span>
                    <span className="font-bold text-demolay-green-950">{camp.contactName}</span>
                  </div>

                  <a
                    href={`https://wa.me/${camp.contactPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola ${camp.contactName}, deseo apoyar en la campaña "${camp.title}" del ${camp.chapter}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Apoyar</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12 text-stone-500 text-sm">
              No se encontraron campañas con el término "{searchFilter}".
            </div>
          )}

        </div>
      </section>

      {/* 4. Fullscreen Flyer Modal Lightbox */}
      {isFlyerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center bg-stone-900 border border-gold/40 rounded-2xl overflow-hidden shadow-2xl p-4">

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

            {/* Flyer Image */}
            <div className="w-full overflow-y-auto max-h-[70vh] flex justify-center rounded-lg bg-black/40 p-2">
              <img
                src={departamentalCampaign.flyerImg}
                alt="Flyer Oficial Pantalla Completa"
                className="max-w-full h-auto object-contain rounded shadow-lg"
              />
            </div>

            {/* Modal Bottom Actions */}
            <div className="w-full flex items-center justify-between gap-3 pt-4 mt-2 border-t border-stone-800">
              <span className="text-xs text-stone-400 font-sans hidden sm:inline">
                Campamento de Santa Cruz • Orden DeMolay Bolivia
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href="/flyer_departamental.jpg"
                  download="Flyer_Campana_Manos_Unidas_DeMolay_SCZ.jpg"
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
