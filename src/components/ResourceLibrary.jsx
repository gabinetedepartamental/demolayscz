import React, { useState } from 'react';
import { Unlock, FileText, Eye, X, BookOpen, Sparkles, BookMarked } from 'lucide-react';
import LiquidDownloadButton from './LiquidDownloadButton';

const documents = [
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

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <section id="materiales" className="py-20 bg-white border-b border-stone-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-demolay-green font-bold text-xs uppercase tracking-widest mb-2">
            <BookOpen className="h-4 w-4 text-demolay-green" />
            <span>Biblioteca y Archivo Histórico</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-demolay-green-950 tracking-wide">
            Materiales y Biblioteca Oficial
          </h2>
          <div className="h-1 w-20 bg-demolay-gold mx-auto mt-4 rounded-full" />
          <p className="text-stone-500 font-sans max-w-xl mx-auto mt-4 text-xs md:text-sm">
            Repositorio digital de lecturas públicas, historia y obras bibliográficas de la Orden DeMolay disponibles para lectura y descarga libre.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="max-w-xl mx-auto">
          {documents.map((doc) => (
            <div
              key={doc.id}
              onClick={() => handleDocClick(doc)}
              className="bg-stone-50 rounded-2xl border border-stone-200 hover:border-gold p-7 sm:p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover-premium-card group"
            >
              {/* Unlock badge */}
              <div className="absolute top-5 right-5 text-emerald-700 z-10 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5 shadow-sm">
                <Unlock className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-700">Acceso Público</span>
              </div>

              {/* Main Content wrapper */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-demolay-gold bg-demolay-green-950 px-2.5 py-0.5 rounded">
                    {doc.type}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-demolay-green-950 mb-3 leading-snug group-hover:text-demolay-green-900 transition-colors">
                  {doc.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed mb-5">
                  {doc.content}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-[10px] font-semibold bg-stone-200 text-stone-700 px-2.5 py-1 rounded">
                    {doc.size}
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded border bg-emerald-50 text-emerald-800 border-emerald-200">
                    Nivel: {doc.requiredGrade}
                  </span>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-sans">
                <span className="text-emerald-700 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Unlock className="h-3.5 w-3.5 text-emerald-600" />
                  Descarga Libre
                </span>
                
                <span className="text-demolay-green font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                  Abrir y Descargar
                  <Eye className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

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
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Obra Bibliográfica Oficial</span>
                  <h3 className="text-xl font-serif font-bold text-stone-100 leading-snug">{selectedDoc.title}</h3>
                </div>
              </div>

              <div className="bg-stone-950 rounded-lg p-5 border border-stone-800 font-sans text-stone-300 text-sm leading-relaxed max-h-52 overflow-y-auto mb-6">
                <p className="font-semibold text-xs text-gold uppercase tracking-wider mb-2 border-b border-stone-800 pb-1">
                  Descripción:
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
                    <span className="text-stone-500 font-medium">Acceso:</span>
                    <strong className="text-emerald-400 font-semibold">
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
