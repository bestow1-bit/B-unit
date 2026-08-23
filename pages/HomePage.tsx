import React from 'react';
import { PageType } from '../types';
import { BrandSignatureSection } from '../components/BrandSignatureSection';
import { OFFICIAL_LOGO_URL, OWNER_INFO, BRAND_TAGLINE } from '../data/constants';
import { Car, Bus, ArrowRight, ShieldCheck, Users, Wrench, Sparkles, CheckCircle2, UserCheck, Quote } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="space-y-0 bg-[#08080a] text-zinc-100 min-h-screen">
      
      {/* ===================================================
          HERO SECTION
         =================================================== */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-[#08080a]">
        
        <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-12 pointer-events-none select-none overflow-hidden opacity-[0.03]">
          <span className="font-serif text-[40vw] font-bold text-red-600">B</span>
          <span className="font-serif text-[40vw] font-bold text-red-600">U</span>
        </div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                <span>Empresa Individual & Equipa de Apoio</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                B-UNIT — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400">{BRAND_TAGLINE.toUpperCase()}</span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Peças e acessórios automóveis, além de transporte escolar com dedicação, organização e confiança.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('parts')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-red-950/60 border border-red-500/30 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
                >
                  <Car className="w-5 h-5" />
                  <span>VER PEÇAS</span>
                </button>

                <button
                  onClick={() => onNavigate('transport')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm uppercase tracking-wider border border-zinc-700 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Bus className="w-5 h-5 text-amber-400" />
                  <span>TRANSPORTE ESCOLAR</span>
                </button>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 text-center lg:text-left text-xs font-semibold text-zinc-400">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span>Seriedade & Rigor</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Users className="w-4 h-4 text-red-500" />
                  <span>Atendimento Próximo</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Wrench className="w-4 h-4 text-red-500" />
                  <span>Suporte Dedicado</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-zinc-900/90 rounded-3xl p-8 border border-zinc-800 shadow-2xl shadow-red-950/40 text-center">
                <div className="p-6 bg-black rounded-2xl border border-red-950/60 shadow-inner mb-4">
                  <img
                    src={OFFICIAL_LOGO_URL}
                    alt="Logótipo Oficial B-Unit"
                    className="w-full h-auto object-contain max-h-56 mx-auto"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300 font-semibold">
                  {BRAND_TAGLINE}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================
          SOBRE A B-UNIT
         =================================================== */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a0a0d] rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>APRESENTAÇÃO DA EMPRESA</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              SOBRE A B-UNIT
            </h2>

            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                A B-Unit é uma empresa individual dedicada à venda de peças e acessórios automóveis e ao transporte escolar.
              </p>
              <p>
                A empresa pode contar com uma pequena equipa de apoio para atendimento, vendas, organização e logística.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
                <span className="block text-white font-bold text-sm">Atendimento</span>
                <span className="text-xs text-zinc-400">Apoio Personalizado</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
                <span className="block text-white font-bold text-sm">Vendas</span>
                <span className="text-xs text-zinc-400">Peças Automóveis</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
                <span className="block text-white font-bold text-sm">Organização</span>
                <span className="text-xs text-zinc-400">Percursos Escolares</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
                <span className="block text-white font-bold text-sm">Logística</span>
                <span className="text-xs text-zinc-400">Eficiência e Cuidado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SERVIÇOS
         =================================================== */}
      <section className="py-24 bg-[#08080a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">
              ÁREAS DE ATUAÇÃO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Nossos Serviços Principais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl p-8 border border-zinc-800 hover:border-red-600/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-red-950/80 border border-red-800/50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <Car className="w-7 h-7" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                  PEÇAS E ACESSÓRIOS AUTOMÓVEIS
                </h3>

                <p className="text-zinc-300 text-base leading-relaxed">
                  "Soluções para o seu veículo, com atendimento próximo e ajuda para encontrar aquilo que procura."
                </p>

                <ul className="space-y-2 text-xs text-zinc-400 font-medium pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span>Catálogo por categorias (Motor, Travagem, Suspensão, etc.)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span>Ajuda técnica para localização de componentes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span>Cotação direta sem complicações</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('parts')}
                  className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all"
                >
                  <span>EXPLORAR PEÇAS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl p-8 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-950/80 border border-amber-800/50 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Bus className="w-7 h-7" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                  TRANSPORTE ESCOLAR
                </h3>

                <p className="text-zinc-300 text-base leading-relaxed">
                  "Um serviço organizado e responsável para ajudar as crianças a chegarem à escola e regressarem a casa."
                </p>

                <ul className="space-y-2 text-xs text-zinc-400 font-medium pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Atendimento à Escola Arco-Íris</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Zonas: Cumbeza e Marracuene</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Lugares e horários devidamente organizados</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('transport')}
                  className="w-full py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-zinc-700 transition-all"
                >
                  <span>CONHECER TRANSPORTE</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PROPRIETÁRIO SECTION — HILÁRIO HERNESTO COME
         =================================================== */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest">
              <UserCheck className="w-4 h-4" />
              <span>PROPRIETÁRIO & RESPONSÁVEL</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Real Owner Photo */}
              <div className="lg:col-span-5 text-center">
                <div className="relative mx-auto w-56 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden border-2 border-red-600/40 shadow-2xl shadow-red-950/50 group">
                  <img
                    src={OWNER_INFO.photoUrl}
                    alt={OWNER_INFO.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 text-left">
                    <span className="text-white font-serif font-bold text-lg leading-tight">
                      {OWNER_INFO.name}
                    </span>
                    <span className="text-red-400 text-xs font-semibold">
                      {OWNER_INFO.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact Bio Text Provided by User */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {OWNER_INFO.name}
                </h3>
                
                <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {OWNER_INFO.bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Quote Box */}
                <div className="mt-6 p-5 rounded-2xl bg-black/60 border-l-4 border-red-600 border-zinc-800 text-zinc-200 text-sm italic space-y-2">
                  <div className="flex items-start gap-2">
                    <Quote className="w-5 h-5 text-red-500 shrink-0" />
                    <p className="font-serif leading-relaxed text-zinc-100">
                      {OWNER_INFO.quote}
                    </p>
                  </div>
                  <div className="text-right text-xs font-bold text-red-400 not-italic pt-1">
                    — {OWNER_INFO.name}, {OWNER_INFO.title}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===================================================
          DIV ESPECIAL DA MARCA
         =================================================== */}
      <BrandSignatureSection />

    </div>
  );
};
