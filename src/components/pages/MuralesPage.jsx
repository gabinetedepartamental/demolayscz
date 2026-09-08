import React from 'react';
import McdCarousel from '../McdCarousel';
import CabinetTabs from '../CabinetTabs';

export default function MuralesPage() {
  return (
    <div className="animate-fade-in">
      {/* Historical carousel */}
      <McdCarousel />
      
      {/* Current leaders & cabinet */}
      <CabinetTabs />
    </div>
  );
}
