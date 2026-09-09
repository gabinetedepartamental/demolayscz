import React, { useState } from 'react';
import { Lock, Unlock, FileText, Download, Eye, X, Award, Key, Copy, Check, ExternalLink, Shield, BookOpen, Sparkles, Filter } from 'lucide-react';
import ChallengeModal from './ChallengeModal';
import LiquidDownloadButton from './LiquidDownloadButton';

const documents = [
  {
    id: 'guia-rapida-caballero',
    title: 'Guía Rápida de un Caballero',
    code: 'pCTO82.75800',
    type: 'PDF • Caballería',
    category: 'Caballería',
    requiredGrade: 'Caballero',
    size: '547 KB',
    fileUrl: '/materiales/Guía rápida de un Caballero (pCTO82.75800).pdf',
    passwordHint: 'pCTO82.75800',
    content: 'Guía oficial de referencia rápida para Caballeros DeMolay del Priorato "Caballeros Templarios del Oriente" N° 82. Contiene las directrices ritualísticas, operativas y protocolarias esenciales para el servicio activo en la Orden de Caballería.'
  },
  {
    id: 'manual-instruccion-caballero',
    title: 'Manual de Instrucción del Grado Caballero SC',
    code: 'Priorato SC',
    type: 'PDF • Caballería',
    category: 'Caballería',
    requiredGrade: 'Caballero',
    size: '3.7 MB',
    fileUrl: '/materiales/Manual de Instrucción del Grado Caballero SC.pdf',
    content: 'Manual oficial de formación e instrucción ceremonial para el Grado de Caballero en el Campamento de Santa Cruz. Incluye el estudio de las Capillas de la Caballería Moral, la lealtad templaria, deberes del Sir Caballero y la estructura de investidura.'
  },
  {
    id: 'manual-templario',
    title: 'Manual Templario',
    code: 'Grado II',
    type: 'PDF • Grado DeMolay',
    category: 'DeMolay',
    requiredGrade: 'DeMolay',
    size: '1.6 MB',
    fileUrl: '/materiales/Manual Templario.pdf',
    content: 'Manual de formación histórica y ritualística templaria para hermanos que ostentan el Grado DeMolay. Detalla el contexto medieval de la Orden del Temple, el juicio y martirio de Jacques de Molay y la aplicación de los principios caballerescos en la vida diaria.'
  },
  {
    id: 'manual-gi-corte-chev',
    title: 'Manual GI - Feat. C. Chev (Edición 2023)',
    code: 'Grado I',
    type: 'PDF • Grado Iniciático',
    category: 'Iniciático',
    requiredGrade: 'Iniciático',
    size: '1.8 MB',
    fileUrl: '/materiales/Manual GI - Feat. C. Chev - Edición 2023.pdf',
    content: 'Manual de Instrucción para el Grado Iniciático enriquecido con anotaciones, guías y comentarios didácticos de la Corte Chevalier (Edición 2023). Contiene el estudio profundo de las 7 Virtudes Cardinales y el desenvolvimiento dentro del templo.'
  },
  {
    id: 'hi-dad-frank-land',
    title: 'Hi Dad! - Una historia sobre Frank Land',
    code: 'Biografía',
    type: 'PDF • Histórico & Biográfico',
    category: 'Público',
    requiredGrade: 'Público',
    size: '2.2 MB',
    fileUrl: '/materiales/Hi Dad - una historia sobre Frank Land.pdf',
    content: 'Obra biográfica e histórica completa sobre Frank Sherman Land ("Dad Land"), fundador de la Orden DeMolay. Un relato inspirador sobre el nacimiento de la Orden en 1919 en Kansas City, los primeros nueve jóvenes fundadores y el legado de fraternidad universal.'
  }
];

export default function ResourceLibrary() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [activeChallengeDoc, setActiveChallengeDoc] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [copiedPass, setCopiedPass] = useState(false);

  const handleDocClick = (doc) => {
    if (doc.requiredGrade === 'Público') {
      setSelectedDoc(doc);
    } else {
      setActiveChallengeDoc(doc);
    }
  };

  const handleChallengeSuccess = () => {
    const docToOpen = activeChallengeDoc;
    setActiveChallengeDoc(null);
    setSelectedDoc(docToOpen);
  };

  const filterCategories = [
    { key: 'Todos', label: 'Todos los Materiales' },
    { key: 'Público', label: 'Acceso Público' },
    { key: 'Iniciático', label: 'Grado Iniciático' },
    { key: 'DeMolay', label: 'Grado DeMolay' },
    { key: 'Caballería', label: 'Caballería' }
  ];

  const filteredDocs = activeFilter === 'Todos'
    ? documents
    : documents.filter((d) => d.category === activeFilter || (activeFilter === 'Iniciático' && d.requiredGrade === 'Iniciático'));

  const handleCopyPassword = (pass) => {
    if (navigator.clipboard && pass) {
      navigator.clipboard.writeText(pass);
      setCopiedPass(true);
      setTimeout(() => setCopiedPass(false), 2500);
    }
  };

  return (
    <section id="materiales" className="py-20 bg-white border-b border-stone-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-demolay-green font-bold text-xs uppercase tracking-widest mb-2">
            <Lock className="h-4 w-4 text-demolay-green" />
            <span>Biblioteca y Archivos Oficiales</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
            Manuales y Materiales Oficiales
          </h2>
          <div className="h-1 w-20 bg-demolay-gold mx-auto mt-4 rounded-full" />
          <p className="text-stone-500 font-sans max-w-xl mx-auto mt-4 text-xs md:text-sm">
            Repositorio digital de manuales ceremoniales, reglamentos y guías oficiales. Ciertos archivos están restringidos según su Grado mediante verificación de conocimientos.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {filterCategories.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                activeFilter === tab.key
                  ? 'bg-demolay-green-950 text-gold border-gold/40 shadow-sm'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-600 border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredDocs.map((doc) => {
            const isRestricted = doc.requiredGrade !== 'Público';
            return (
              <div
                key={doc.id}
                onClick={() => handleDocClick(doc)}
                className="bg-stone-50 rounded-xl border p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer border-stone-200 hover:border-gold shadow-sm hover:shadow-xl hover-premium-card group"
              >
                {/* Lock / Unlock badge */}
                {isRestricted ? (
                  <div className="absolute top-4 right-4 text-gold z-10 bg-demolay-green-950 px-2 py-1 rounded border border-gold/30 flex items-center gap-1">
                    <Lock className="h-3 w-3 text-gold" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-gold">Grado</span>
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 text-emerald-700 z-10 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 flex items-center gap-1">
                    <Unlock className="h-3 w-3 text-emerald-600" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-700">Público</span>
                  </div>
                )}

                {/* Main Content wrapper */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400">
                      {doc.type}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-demolay-green-950 mb-2 leading-snug group-hover:text-demolay-green-900 transition-colors">
                    {doc.title}
                  </h3>

                  <p className="text-stone-600 text-xs font-sans leading-relaxed mb-4 line-clamp-3">
                    {doc.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-[10px] font-semibold bg-stone-200 text-stone-700 px-2 py-0.5 rounded">
                      {doc.size}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                      !isRestricted
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : doc.requiredGrade === 'Caballero'
                        ? 'bg-purple-50 text-purple-900 border-purple-200'
                        : 'bg-amber-50 text-amber-900 border-amber-200'
                    }`}>
                      Nivel: {doc.requiredGrade}
                    </span>
                    {doc.passwordHint && (
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 flex items-center gap-1">
                        <Key className="h-2.5 w-2.5" /> Protegido
                      </span>
                    )}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs font-sans">
                  {isRestricted ? (
                    <span className="text-demolay-gold font-bold uppercase tracking-wider text-[10px] flex items-center gap-1">
                      <Lock className="h-3 w-3" />
                      Requiere {doc.requiredGrade}
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1">
                      <Unlock className="h-3 w-3 text-emerald-600" />
                      Descarga Libre
                    </span>
                  )}
                  
                  <span className="text-demolay-green font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px]">
                    {isRestricted ? 'Desafío Ritual' : 'Abrir Documento'}
                    <Eye className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Challenge Validation Modal */}
      <ChallengeModal
        isOpen={!!activeChallengeDoc}
        grade={activeChallengeDoc?.requiredGrade}
        onClose={() => setActiveChallengeDoc(null)}
        onSuccess={handleChallengeSuccess}
      />

      {/* Document Viewer & Download Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={() => setSelectedDoc(null)} />
          
          <div className="relative w-full max-w-xl overflow-hidden rounded-xl border border-gold/50 bg-stone-900 text-stone-100 shadow-2xl z-10 animate-fade-in">
            <div className="h-1.5 w-full bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
            
            <button 
              onClick={() => setSelectedDoc(null)}
              className="absolute right-4 top-5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-demolay-green-950 border border-gold/30 rounded-lg text-gold shrink-0">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Material Oficial Desbloqueado</span>
                  <h3 className="text-xl font-serif font-bold text-stone-100 leading-snug">{selectedDoc.title}</h3>
                </div>
              </div>

              {/* Password Banner if file has password */}
              {selectedDoc.passwordHint && (
                <div className="mb-5 p-4 bg-amber-950/40 border border-gold/60 rounded-xl flex items-start gap-3 shadow-inner">
                  <Key className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div className="text-left w-full">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-gold mb-1">
                      Contraseña del archivo PDF:
                    </span>
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono font-bold bg-stone-950 border border-gold/50 text-amber-300 px-3 py-1 rounded select-all tracking-wider">
                        {selectedDoc.passwordHint}
                      </code>
                      <button
                        onClick={() => handleCopyPassword(selectedDoc.passwordHint)}
                        className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 px-2.5 py-1.5 rounded border border-stone-600 transition-colors cursor-pointer"
                      >
                        {copiedPass ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                        {copiedPass ? '¡Copiada!' : 'Copiar'}
                      </button>
                    </div>
                    <p className="text-[11px] text-stone-300 mt-2 leading-relaxed font-sans">
                      Al abrir el archivo PDF descargado, ingrese la contraseña anterior para desbloquear la lectura.
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-stone-950 rounded-lg p-5 border border-stone-800 font-sans text-stone-300 text-sm leading-relaxed max-h-52 overflow-y-auto mb-6">
                <p className="font-semibold text-xs text-gold uppercase tracking-wider mb-2 border-b border-stone-800 pb-1">
                  Descripción Oficial:
                </p>
                {selectedDoc.content}
              </div>

              {/* Modal Actions Footer */}
              <div className="pt-5 border-t border-stone-800 space-y-4">
                {/* Action Buttons: 3 symmetric, uniform action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
                  {/* Dynamic Glass Liquid Download Button (Brim) */}
                  <div className="w-full">
                    <LiquidDownloadButton
                      fileUrl={selectedDoc.fileUrl}
                      fileName={selectedDoc.title + '.pdf'}
                      title={selectedDoc.title}
                      className="w-full"
                    />
                  </div>

                  {/* Open in new tab button */}
                  <a
                    href={selectedDoc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-stone-800/90 hover:bg-stone-700 text-stone-200 hover:text-amber-300 rounded-xl text-xs font-bold uppercase tracking-wider border border-stone-700 hover:border-amber-400/50 transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95 text-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ver Online</span>
                  </a>

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setSelectedDoc(null)}
                    className="w-full inline-flex items-center justify-center py-3 px-4 bg-stone-900/90 hover:bg-stone-800 text-stone-400 hover:text-stone-100 rounded-xl text-xs font-bold uppercase tracking-wider border border-stone-800 hover:border-stone-700 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-95 text-center"
                  >
                    Cerrar
                  </button>
                </div>

                {/* Metadata Row: Tamaño y Grado placed neatly below the buttons */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-400 font-sans pt-1">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="text-stone-500 font-medium">Tamaño:</span>
                    <strong className="text-stone-200 font-semibold">{selectedDoc.size}</strong>
                  </span>
                  <span className="text-stone-700 hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="text-stone-500 font-medium">Nivel Requerido:</span>
                    <strong className={`font-semibold ${
                      selectedDoc.requiredGrade === 'Público'
                        ? 'text-emerald-400'
                        : selectedDoc.requiredGrade === 'Caballero'
                        ? 'text-purple-400'
                        : 'text-amber-400'
                    }`}>
                      {selectedDoc.requiredGrade}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
