import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ShieldCheck, Car, Bus } from 'lucide-react';
import { PageType } from '../types';
import { OFFICIAL_LOGO_URL, BRAND_TAGLINE } from '../data/constants';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNavLinkClass = (page: PageType) => {
    const isActive = currentPage === page;
    const baseClass = "relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg flex items-center gap-2 ";
    
    if (isActive) {
      return baseClass + "text-white bg-red-600/90 shadow-md shadow-red-950/50 border border-red-500/30";
    }
    return baseClass + "text-zinc-300 hover:text-white hover:bg-zinc-800/60";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md py-3 shadow-xl border-b border-zinc-800/60'
          : 'bg-gradient-to-b from-black/90 via-black/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO CONTAINER (Unaltered official logo) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1"
          aria-label="B-Unit Página Inicial"
        >
          <div className="h-10 sm:h-12 w-auto p-1 bg-black/80 rounded-md border border-zinc-800 group-hover:border-red-600/50 transition-colors">
            <img
              src={OFFICIAL_LOGO_URL}
              alt="B-Unit Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <span className="block text-white font-bold tracking-wider text-base leading-none">
              B-UNIT
            </span>
            <span className="block text-red-500 text-[10px] tracking-wider font-semibold uppercase mt-0.5">
              {BRAND_TAGLINE}
            </span>
          </div>
        </button>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <button
            onClick={() => handleNavClick('home')}
            className={getNavLinkClass('home')}
          >
            INÍCIO
          </button>
          <button
            onClick={() => handleNavClick('parts')}
            className={getNavLinkClass('parts')}
          >
            <Car className="w-4 h-4 text-red-400" />
            PEÇAS AUTOMÓVEIS
          </button>
          <button
            onClick={() => handleNavClick('transport')}
            className={getNavLinkClass('transport')}
          >
            <Bus className="w-4 h-4 text-amber-400" />
            TRANSPORTE ESCOLAR
          </button>
        </nav>

        {/* CONTACT BUTTON & MOBILE HAMBURGER */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-red-950/50 border border-red-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>CONTACTO</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-900/90 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 shadow-2xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-center p-3 mb-2 bg-black/60 rounded-xl border border-zinc-800">
            <img
              src={OFFICIAL_LOGO_URL}
              alt="B-Unit Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-sm flex items-center justify-between ${
              currentPage === 'home'
                ? 'bg-red-600 text-white'
                : 'text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <span>INÍCIO</span>
            <ShieldCheck className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleNavClick('parts')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-sm flex items-center justify-between ${
              currentPage === 'parts'
                ? 'bg-red-600 text-white'
                : 'text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <span className="flex items-center gap-2">
              <Car className="w-4 h-4 text-red-400" />
              PEÇAS E ACESSÓRIOS AUTOMÓVEIS
            </span>
          </button>

          <button
            onClick={() => handleNavClick('transport')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-sm flex items-center justify-between ${
              currentPage === 'transport'
                ? 'bg-red-600 text-white'
                : 'text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <span className="flex items-center gap-2">
              <Bus className="w-4 h-4 text-amber-400" />
              TRANSPORTE ESCOLAR
            </span>
          </button>

          <div className="pt-2 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-lg shadow-red-950/40"
            >
              <PhoneCall className="w-4 h-4" />
              ENTRAR EM CONTACTO
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
