import React from 'react';
import { PageType } from '../types';
import { OFFICIAL_LOGO_URL, SCHOOL_NAME, SCHOOL_ZONES, BRAND_TAGLINE, OFFICIAL_PHONE_DISPLAY, OFFICIAL_WHATSAPP_URL } from '../data/constants';
import { ShieldCheck, Phone, ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-zinc-400 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.02] flex justify-between items-center px-12">
        <span className="font-serif text-[25vw] font-bold text-red-600">B</span>
        <span className="font-serif text-[25vw] font-bold text-red-600">U</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-black rounded-lg border border-zinc-800 w-12 h-12 flex items-center justify-center">
                <img
                  src={OFFICIAL_LOGO_URL}
                  alt="B-Unit Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-wider block leading-none font-serif">
                  B-UNIT
                </span>
                <span className="text-red-500 text-[10px] tracking-wider font-semibold uppercase">
                  {BRAND_TAGLINE}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Empresa dedicada ao fornecimento de peças e acessórios automóveis e ao transporte escolar responsável com foco na segurança e organização.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Atendimento Próximo & Personalizado</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-3">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-red-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('parts')}
                  className="hover:text-red-400 transition-colors"
                >
                  Peças & Acessórios Automóveis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('transport')}
                  className="hover:text-red-400 transition-colors"
                >
                  Transporte Escolar ({SCHOOL_NAME})
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-3">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li className="text-zinc-300">Venda de Peças & Acessórios</li>
              <li className="text-zinc-300">Transporte Escolar Dedicado</li>
              <li className="text-zinc-400 text-[11px] pt-1">
                Escola Atendida: <span className="text-amber-400 font-bold">{SCHOOL_NAME}</span>
              </li>
              <li className="text-zinc-400 text-[11px]">
                Zonas: <span className="text-white font-semibold">{SCHOOL_ZONES.join(' e ')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-3">
              Contacto Direto
            </h4>
            
            <div className="space-y-2 mb-4 text-xs">
              <div className="text-zinc-300 font-semibold flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span className="font-mono text-white">{OFFICIAL_PHONE_DISPLAY}</span>
              </div>
              <a
                href={OFFICIAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:underline font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contacto WhatsApp</span>
              </a>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Solicitar Atendimento</span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} B-Unit — Todos os direitos reservados. "{BRAND_TAGLINE}."</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors flex items-center gap-2"
            aria-label="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
