import React from 'react';
import { Globe, MapPin, ExternalLink, Mail } from 'lucide-react';
import logo from '../assets/images/logos/logo1.png';

export default function Footer({ onOpenDevelopers }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 border-t border-demolay-gold/30 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-stone-800">

          {/* Brand Col */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
              <div>
                <h4 className="font-serif text-sm font-bold text-stone-100 tracking-wider">CAMPAMENTO DE SANTA CRUZ</h4>
                <p className="text-[9px] uppercase tracking-widest text-demolay-gold font-bold">Orden DeMolay Bolivia</p>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Institución consagrada a la formación moral, intelectual y cívica de jóvenes líderes. Promoviendo las virtudes que forjan mejores ciudadanos bajo la luz de la fraternidad en la Jurisdicción 075 - Región 9.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-demolay-gold mb-3 font-sans">
              Enlaces Institucionales
            </h4>
            <ul className="text-xs space-y-2">
              <li>
                <a
                  href="https://demolay.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-demolay-gold flex items-center gap-1 transition-colors"
                >
                  DeMolay International
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-demolay-gold mb-3 font-sans">
              Contacto y Ubicación
            </h4>
            <ul className="text-xs space-y-2.5 text-stone-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-demolay-gold shrink-0" />
                <a
                  href="https://maps.app.goo.gl/iNsdfyxRa4E2s3iU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-demolay-gold transition-colors font-medium"
                >
                  Valle de Santa Cruz de la Sierra, Bolivia
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-demolay-gold shrink-0" />
                <a
                  href="mailto:asf102016@gmail.com"
                  className="hover:text-demolay-gold transition-colors font-medium"
                >
                  asf102016@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-demolay-gold shrink-0" />
                <a
                  href="https://demolayscz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-demolay-gold transition-colors font-medium"
                >
                  demolayscz.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-demolay-gold shrink-0"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <a
                  href="https://www.instagram.com/demolay_santacruz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-demolay-gold transition-colors font-medium"
                >
                  @demolay_santacruz
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal Copyright and Developer Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[10px] md:text-xs">

          {/* Copyright */}
          <div className="text-center sm:text-left leading-normal font-sans">
            <p>© {currentYear} Campamento de Santa Cruz. Todos los derechos reservados.</p>
            <p className="text-[10px] text-stone-600 mt-0.5">Jurisdicción 075 - Región 9. Autorizado por la Delegación Regional para Santa Cruz.</p>
          </div>

          {/* Developer Credit Button */}
          <div className="text-center sm:text-right">
            <button
              onClick={onOpenDevelopers}
              className="group inline-flex items-center px-3.5 py-1.5 rounded-xl bg-stone-950 border border-stone-800 hover:border-gold/60 text-stone-300 hover:text-gold transition-all duration-300 transform hover:scale-102 cursor-pointer shadow-sm hover:shadow-md"
              title="Ver mural de creadores y desarrolladores"
            >
              <span className="text-[11px] font-sans font-medium text-stone-300 group-hover:text-stone-100">
                Desarrollado por <strong className="text-gold group-hover:underline">Jose Alberto Vargas & Armando Sandoval</strong>
              </span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
