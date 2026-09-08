import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import DevelopersModal from './components/DevelopersModal';

// Pages
import Inicio from './components/pages/Inicio';
import MuralesPage from './components/pages/MuralesPage';
import CuerposPage from './components/pages/CuerposPage';
import ReconocimientosPage from './components/pages/ReconocimientosPage';
import MaterialesPage from './components/pages/MaterialesPage';
import CapitulosListPage from './components/pages/CapitulosListPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
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

      {/* Hero Section */}
      <Hero 
        onPageChange={setCurrentPage}
      />

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
