import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import DevelopersModal from './components/DevelopersModal';

// Pages
import Inicio from './components/pages/Inicio';
import MuralesPage from './components/pages/MuralesPage';
import CuerposPage from './components/pages/CuerposPage';
import FilantropiasPage from './components/pages/FilantropiasPage';
import ReconocimientosPage from './components/pages/ReconocimientosPage';
import MaterialesPage from './components/pages/MaterialesPage';
import CapitulosListPage from './components/pages/CapitulosListPage';

const PAGES = ['inicio', 'murales', 'cuerpos', 'filantropias', 'reconocimientos', 'materiales', 'capitulos-list'];
const pageFromHash = () => {
  const id = window.location.hash.slice(1);
  return PAGES.includes(id) ? id : 'inicio';
};

export default function App() {
  // La sección vive en la URL (#filantropias) para poder compartir links y usar el botón "atrás"
  const [currentPage, setPageState] = useState(pageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setPageState(pageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setCurrentPage = (id) => {
    if (id === currentPage) window.scrollTo({ top: 0, behavior: 'smooth' });
    else window.location.hash = id;
  };
  const [activeCuerpoDetail, setActiveCuerpoDetail] = useState(null);
  const [isDevelopersModalOpen, setIsDevelopersModalOpen] = useState(false);

  // State-based router
  const renderContent = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio />;
      case 'murales':
        return <MuralesPage />;
      case 'cuerpos':
        return <CuerposPage onOpenDetails={(body) => setActiveCuerpoDetail(body)} />;
      case 'filantropias':
        return <FilantropiasPage />;
      case 'reconocimientos':
        return <ReconocimientosPage />;
      case 'materiales':
        return <MaterialesPage />;
      case 'capitulos-list':
        return <CapitulosListPage onBack={() => setCurrentPage('cuerpos')} />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans selection:bg-demolay-green-900 selection:text-amber-100">
      {/* Responsive Glassmorphism Navbar */}
      <Navbar 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* Hero solo en Inicio: en las demás secciones el contenido queda arriba */}
      {currentPage === 'inicio' && <Hero onPageChange={setCurrentPage} />}

      {/* Main Pages Content rendering area */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Minimal Footer & Credits */}
      <Footer onOpenDevelopers={() => setIsDevelopersModalOpen(true)} />

      {/* Modals & Overlays */}
      <DetailModal 
        body={activeCuerpoDetail} 
        onClose={() => setActiveCuerpoDetail(null)} 
        onViewCapitulos={() => setCurrentPage('capitulos-list')}
      />

      {/* Developers & Creators Modal */}
      <DevelopersModal
        isOpen={isDevelopersModalOpen}
        onClose={() => setIsDevelopersModalOpen(false)}
      />
    </div>
  );
}
