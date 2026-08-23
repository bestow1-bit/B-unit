import React, { useState } from 'react';
import { UserCheck, Shield, Sparkles, Navigation, DoorOpen, Play, RotateCcw } from 'lucide-react';

export const VanSeatingMap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // 22 Seats representation matching capacity 20-23
  const totalSeats = 22;
  const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const handleStartSimulation = () => {
    setIsSimulating(true);
    setActiveStep(1);

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          setIsSimulating(false);
          return 4;
        }
        return prev + 1;
      });
    }, 1200);
  };

  const handleResetSimulation = () => {
    setActiveStep(0);
    setIsSimulating(false);
  };

  return (
    <div className="bg-white/80 rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-xl shadow-sky-900/5">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORGANIZAÇÃO DA CARRINHA</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            "TUDO NO SEU LUGAR"
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Representação gráfica dos lugares, acessos e protocolo de embarque e desembarque organizado.
          </p>
        </div>

        {/* Interactive Simulation Trigger */}
        <div className="flex items-center gap-2">
          {!isSimulating && activeStep === 0 ? (
            <button
              onClick={handleStartSimulation}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-sky-600/20 transition-all hover:scale-105 active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Simular Fluxo de Embarque</span>
            </button>
          ) : (
            <button
              onClick={handleResetSimulation}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reiniciar</span>
            </button>
          )}
        </div>
      </div>

      {/* Simulation Stepper Notice */}
      {activeStep > 0 && (
        <div className="mt-4 p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 text-xs sm:text-sm font-semibold flex items-center justify-between animate-in fade-in duration-300">
          <span className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-sky-600 animate-spin" />
            {activeStep === 1 && "Passo 1: Verificação de segurança e abertura das portas pelo responsável."}
            {activeStep === 2 && "Passo 2: Embarque ordenado por fila com apoio presencial constante."}
            {activeStep === 3 && "Passo 3: Acomodação nos lugares atribuídos e colocação dos cintos de segurança."}
            {activeStep === 4 && "Passo 4: Carrinha pronta para viagem com todos os passageiros devidamente seguros."}
          </span>
          <span className="text-xs bg-sky-200/80 px-2 py-0.5 rounded-md font-mono">
            {activeStep}/4
          </span>
        </div>
      )}

      {/* GRAPHIC VAN DIAGRAM */}
      <div className="mt-8 relative max-w-2xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-inner">
        
        {/* Front of Vehicle Indicator */}
        <div className="mb-6 flex items-center justify-between px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            FRENTE DA CARRINHA (MOTORISTA & APÓIO)
          </span>
          <span className="text-slate-400 font-mono text-[10px]">LADO DO CONDUTOR</span>
        </div>

        {/* Cockpit Row */}
        <div className="grid grid-cols-4 gap-3 mb-8 p-3 bg-slate-200/70 rounded-2xl border border-slate-300">
          <div className="col-span-2 p-3 bg-emerald-600 text-white rounded-xl flex items-center justify-center gap-2 text-xs font-bold shadow">
            <UserCheck className="w-4 h-4" />
            <span>Condutor Responsável</span>
          </div>
          <div className="col-span-2 p-3 bg-sky-700 text-white rounded-xl flex items-center justify-center gap-2 text-xs font-bold shadow">
            <UserCheck className="w-4 h-4" />
            <span>Acompanhante de Bordo</span>
          </div>
        </div>

        {/* Main Entrance Door Indicator */}
        <div className="relative mb-6 flex justify-end">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm animate-pulse">
            <DoorOpen className="w-4 h-4" />
            <span>Entrada / Saída Principal</span>
          </div>
        </div>

        {/* Passenger Seats Grid (2x2 with central aisle) */}
        <div className="space-y-3">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Lugares Organizados (Cintos de Segurança Individuais)
          </div>

          <div className="grid grid-cols-4 gap-3">
            {seats.map((seatNum) => {
              // Highlight based on simulation step
              const isFilledInStep = activeStep >= 3 || (activeStep === 2 && seatNum <= 12);

              return (
                <div
                  key={seatNum}
                  className={`p-3 rounded-xl border text-center transition-all duration-500 ${
                    isFilledInStep
                      ? 'bg-sky-600 text-white border-sky-700 shadow-md shadow-sky-600/20 scale-100'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase opacity-80">Lugar</div>
                  <div className="text-base font-extrabold font-mono">{seatNum < 10 ? `0${seatNum}` : seatNum}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Back Emergency Door Indicator */}
        <div className="mt-8 flex items-center justify-center p-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-bold uppercase tracking-wider">
          <span>Saída de Emergência Traseira</span>
        </div>
      </div>

      {/* Caption Footnote */}
      <p className="mt-6 text-center text-xs text-slate-500 font-medium">
        * A atribuição de lugares é feita no início do ano letivo considerando a faixa etária e a ergonomia dos assentos.
      </p>
    </div>
  );
};
