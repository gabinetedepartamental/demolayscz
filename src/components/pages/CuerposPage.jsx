import React from 'react';
import CuerposSection from '../CuerposSection';

export default function CuerposPage({ onOpenDetails }) {
  return (
    <div className="animate-fade-in">
      <CuerposSection onOpenDetails={onOpenDetails} />
    </div>
  );
}
