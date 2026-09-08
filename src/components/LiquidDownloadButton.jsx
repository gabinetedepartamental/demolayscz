import React, { useState, useEffect, useRef } from 'react';
import { Download, Check, ExternalLink } from 'lucide-react';

export default function LiquidDownloadButton({
  fileUrl,
  fileName,
  title = 'Documento PDF',
  className = ''
}) {
  const [state, setState] = useState('idle'); // 'idle' | 'work' | 'done'
  const [progress, setProgress] = useState(0); // 0 to 100
  const progressTimerRef = useRef(null);

  // Reset state when file changes
  useEffect(() => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    setState('idle');
    setProgress(0);
  }, [fileUrl]);

  useEffect(() => {
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, []);

  const targetFileName = fileName || (fileUrl ? fileUrl.split('/').pop() : 'documento.pdf');

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = decodeURIComponent(targetFileName);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAction = (e) => {
    e.stopPropagation();

    // If already downloaded, clicking opens the document in a new tab
    if (state === 'done') {
      window.open(fileUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    if (state === 'work') return; // already in progress

    setState('work');
    setProgress(15);

    // Trigger browser file download
    try {
      triggerDownload();
    } catch (err) {
      console.error('Error triggering download:', err);
    }

    // Smooth liquid filling animation (0% -> 100%)
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    let currentProgress = 15;
    progressTimerRef.current = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 12;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(progressTimerRef.current);

        setTimeout(() => {
          setState('done');
        }, 200);
      } else {
        setProgress(currentProgress);
      }
    }, 60);
  };

  return (
    <div className={`relative inline-flex items-center w-full ${className}`}>
      {/* The Brim Glass Liquid Button */}
      <button
        type="button"
        data-state={state}
        onClick={handleAction}
        className={`brim-btn-glass group relative overflow-hidden rounded-xl w-full py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer select-none flex items-center justify-center border ${
          state === 'done'
            ? 'border-emerald-400/80 text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:scale-[1.02]'
            : state === 'work'
            ? 'border-amber-400/90 text-amber-100 shadow-[0_0_25px_rgba(245,158,11,0.5)]'
            : 'border-demolay-gold/60 hover:border-demolay-gold text-amber-200 hover:text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.02]'
        }`}
        aria-label={state === 'done' ? 'Abrir archivo PDF' : 'Descargar archivo PDF'}
      >
        {/* Shimmer Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        {/* Liquid Vessel Container */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          {/* Liquid Fill Level (Rises smoothly with wave effect) */}
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-150 ease-out ${
              state === 'done' ? 'brim-liquid-done h-full' : 'brim-liquid-fill'
            }`}
            style={{
              height: state === 'idle' ? '0%' : state === 'done' ? '100%' : `${progress}%`
            }}
          >
            {/* Liquid Surface Waves */}
            {state === 'work' && (
              <div className="absolute -top-3 left-0 right-0 h-4 overflow-hidden opacity-85">
                <svg
                  className="w-[200%] h-full animate-[brimWave_2s_linear_infinite]"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 C150,90 350,-40 500,45 C650,130 900,-30 1200,40 L1200,120 L0,120 Z"
                    fill="rgba(251, 191, 36, 0.9)"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Liquid Droplet Stream (Falls from top down into the liquid while working) */}
          {state === 'work' && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full pointer-events-none opacity-70 overflow-hidden">
              <div className="w-full h-8 bg-gradient-to-b from-transparent via-amber-200 to-transparent animate-[brimStream_0.6s_ease-in-out_infinite]" />
            </div>
          )}
        </div>

        {/* Content & Labels Layer (Positioned above the liquid) */}
        <div className="relative z-10 flex items-center justify-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-sans">
          {/* State Icon */}
          {state === 'idle' && (
            <div className="relative flex items-center justify-center">
              <Download className="h-4 w-4 text-amber-300 transform group-hover:translate-y-0.5 group-hover:scale-110 transition-transform duration-300 stroke-[2.5]" />
            </div>
          )}

          {state === 'work' && (
            <div className="relative flex items-center justify-center">
              <div className="h-4 w-4 rounded-full border-2 border-amber-200/40 border-t-amber-300 animate-spin" />
            </div>
          )}

          {state === 'done' && (
            <div className="relative flex items-center justify-center">
              <div className="p-0.5 rounded-full bg-emerald-950/80 border border-emerald-300/80 animate-[brimCheckPop_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
                <Check className="h-3.5 w-3.5 text-emerald-300 stroke-[3]" />
              </div>
            </div>
          )}

          {/* Text Label */}
          <span className="font-extrabold tracking-wider text-xs whitespace-nowrap">
            {state === 'idle' && 'Descargar PDF'}
            {state === 'work' && `Descargando... ${progress}%`}
            {state === 'done' && 'Abrir PDF'}
          </span>

          {state === 'done' && (
            <ExternalLink className="h-3.5 w-3.5 text-emerald-200/80 group-hover:translate-x-0.5 transition-transform" />
          )}
        </div>
      </button>
    </div>
  );
}
