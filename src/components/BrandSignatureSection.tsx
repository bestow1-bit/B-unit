import React from 'react';
import { OFFICIAL_LOGO_URL, BRAND_TAGLINE } from '../data/constants';
import { ShieldCheck } from 'lucide-react';

export const BrandSignatureSection: React.FC = () => {
  return (
    <section
      className="relative bg-[#050507] text-white py-20 overflow-hidden border-y border-red-950/40"
      aria-label="Assinatura da Marca B-Unit"
    >
      <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-16 pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <span className="font-serif text-[38vw] leading-none font-bold text-red-600 transform -translate-x-1/4">
          B
        </span>
        <span className="font-serif text-[38vw] leading-none font-bold text-red-600 transform translate-x-1/4">
          U
        </span>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-widest mb-8">
          <ShieldCheck className="w-4 h-4" />
          <span>ASSINATURA DA MARCA</span>
        </div>

        <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md p-8 sm:p-10 bg-black/90 rounded-3xl border border-red-900/40 shadow-2xl shadow-red-950/50 backdrop-blur-sm transform hover:scale-[1.01] transition-transform duration-500">
          <img
            src={OFFICIAL_LOGO_URL}
            alt="B-Unit Oficial Logo"
            className="w-full h-auto object-contain max-h-64 mx-auto drop-shadow-[0_0_25px_rgba(229,0,0,0.3)]"
          />
        </div>

        <h2 className="mt-8 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase">
          B-UNIT — {BRAND_TAGLINE}
        </h2>

        <p className="mt-3 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Compromisso com o rigor na venda de peças automóveis e dedicação humana no transporte escolar.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-red-600" />
          <div className="w-2 h-2 rounded-full bg-red-600" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-red-600" />
        </div>
      </div>
    </section>
  );
};
