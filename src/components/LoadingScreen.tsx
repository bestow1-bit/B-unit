import React, { useEffect, useState } from 'react';
import { OFFICIAL_LOGO_URL, BRAND_TAGLINE } from '../data/constants';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [stage, setStage] = useState<'bg' | 'logo' | 'fadeout'>('bg');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('logo'), 300);
    const timer2 = setTimeout(() => setStage('fadeout'), 1500);
    const timer3 = setTimeout(() => onFinish(), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] transition-opacity duration-700 ${
        stage === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Carregando B-Unit"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex justify-between items-center px-8 opacity-[0.03]">
        <span className="font-serif text-[30vw] font-bold text-red-600">B</span>
        <span className="font-serif text-[30vw] font-bold text-red-600">U</span>
      </div>

      <div className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div
        className={`relative z-10 transition-all duration-700 ease-out transform ${
          stage === 'bg'
            ? 'opacity-0 scale-90 translate-y-4'
            : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        <div className="relative p-6 bg-black/80 rounded-2xl border border-red-900/30 shadow-2xl shadow-red-950/40 max-w-[280px] sm:max-w-[320px]">
          <img
            src={OFFICIAL_LOGO_URL}
            alt="B-Unit - Black Unit Logo"
            className="w-full h-auto object-contain max-h-48 drop-shadow-[0_0_15px_rgba(229,0,0,0.25)]"
          />
        </div>

        <div className="mt-8 w-56 mx-auto h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div
            className={`h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-1000 ease-out ${
              stage === 'bg' ? 'w-0' : stage === 'logo' ? 'w-3/4' : 'w-full'
            }`}
          />
        </div>

        <p className="mt-3 text-center text-xs tracking-wider text-zinc-400 font-semibold uppercase">
          {BRAND_TAGLINE}
        </p>
      </div>
    </div>
  );
};
