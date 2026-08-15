import React, { useState } from 'react';
import {
  SCHOOL_NAME,
  SCHOOL_ZONES,
  TRANSPORT_SHIFTS,
  SAFETY_CARDS,
  BRAND_TAGLINE,
} from '../data/constants';
import { sanitizeString, validatePhoneNumber, checkRateLimit } from '../utils/security';
import {
  Bus,
  ShieldCheck,
  Clock,
  LayoutGrid,
  HeartHandshake,
  MapPin,
  CheckCircle2,
  Send,
  Sparkles,
  Users,
  AlertCircle,
  Camera,
} from 'lucide-react';

interface SchoolTransportPageProps {
  onOpenContact: () => void;
}

export const SchoolTransportPage: React.FC<SchoolTransportPageProps> = ({
  onOpenContact,
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    shift: 'Turno da Manhã',
    message: '',
    honeypot: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.honeypot) {
      setFormStatus('success');
      return;
    }

    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setFormStatus('error');
      setFormError(rateCheck.message || 'Muitas tentativas.');
      return;
    }

    const cleanName = sanitizeString(form.name);
    const cleanPhone = sanitizeString(form.phone);

    if (!cleanName || cleanName.length < 2) {
      setFormStatus('error');
      setFormError('Por favor introduza o seu nome.');
      return;
    }

    if (!validatePhoneNumber(cleanPhone)) {
      setFormStatus('error');
      setFormError('Por favor introduza um telefone válido (ex: 841234567).');
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 700);
  };

  const getSafetyIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-sky-600" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-8 h-8 text-amber-500" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-sky-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-rose-500" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-sky-600" />;
    }
  };

  return (
    <div className="bg-[#FAFBFD] text-slate-800 min-h-screen pt-28 pb-24 space-y-16">
      
      {/* ===================================================
          HERO SECTION
         =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                <Bus className="w-4 h-4 text-amber-400" />
                <span>SERVIÇO ESPECIALIZADO DE TRANSPORTE ESCOLAR</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                TRANSPORTE ESCOLAR <span className="text-amber-400">B-UNIT</span>
              </h1>

              <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                "Organização, responsabilidade e cuidado em cada viagem."
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold">
                <div className="px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Escola Atendida: <strong className="text-amber-300">{SCHOOL_NAME}</strong></span>
                </div>

                <div className="px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Zonas: {SCHOOL_ZONES.join(' • ')}</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#formulario-informacoes"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Bus className="w-5 h-5" />
                  <span>SOLICITAR INFORMAÇÕES</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-950/80 rounded-3xl p-6 border border-slate-800 shadow-2xl text-center space-y-4">
                <div className="w-full h-56 rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900 flex flex-col items-center justify-center text-slate-400 p-4">
                  <Camera className="w-12 h-12 text-slate-600 mb-2" />
                  <span className="text-xs font-bold text-slate-300">
                    Fotografia Real da Carrinha B-Unit
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">
                    (Espaço preparado para imagens da viatura)
                  </span>
                </div>

                <div className="text-xs text-slate-300 font-semibold bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  Carrinha devidamente inspecionada, limpa e equipada com cintos individuais.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================
          ESCOLA ATENDIDA & TURNOS (MANHÃ E TARDE)
         =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">
              ORGANIZAÇÃO DOS HORÁRIOS & CAPACIDADE
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-slate-900">
              Escola Atendida & Turnos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A B-Unit efetua o transporte exclusivo para a <strong className="text-slate-900">{SCHOOL_NAME}</strong> nas áreas de {SCHOOL_ZONES.join(' e ')}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSPORT_SHIFTS.map((shift) => (
              <div
                key={shift.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-sky-50 text-sky-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900">{shift.title}</h3>
                      <p className="text-xs text-slate-500 font-mono">{shift.timeRange}</p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                    Capacidade: {shift.capacity}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-semibold text-slate-500">Escola Destino:</div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>{SCHOOL_NAME}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full py-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>{shift.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================
          ZONAS DE ATUAÇÃO
         =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Zonas Cobertas</span>
            <h3 className="text-2xl font-bold font-serif">Cumbeza & Marracuene</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Rotas delineadas para otimizar o tempo de percurso das crianças com toda a segurança.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SCHOOL_ZONES.map((zone) => (
              <div
                key={zone}
                className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold text-sm tracking-wider uppercase"
              >
                {zone}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SEGURANÇA E RESPONSABILIDADE CARDS
         =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">
              NOSSOS COMPROMISSOS
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-slate-900">
              Segurança e Responsabilidade
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg shadow-slate-200/50 space-y-4 hover:border-sky-300 transition-all"
              >
                <div className="p-3.5 rounded-2xl bg-sky-50 inline-block">
                  {getSafetyIcon(card.iconName)}
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  "{card.description}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================
          GALERIA (PREPARED SPACE FOR REAL IMAGES)
         =================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Galeria da Viatura</h3>
              <p className="text-xs text-slate-500">Espaço preparado para fotografias reais da carrinha</p>
            </div>
            <Camera className="w-6 h-6 text-sky-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="h-48 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
              <Camera className="w-10 h-10 mb-2 text-slate-400" />
              <span className="text-xs font-bold text-slate-600">Fotografia Exterior da Carrinha</span>
              <span className="text-[10px] text-slate-400 mt-1">(Aguardando envio do proprietário)</span>
            </div>

            <div className="h-48 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
              <Camera className="w-10 h-10 mb-2 text-slate-400" />
              <span className="text-xs font-bold text-slate-600">Fotografia Interior dos Assentos</span>
              <span className="text-[10px] text-slate-400 mt-1">(Aguardando envio do proprietário)</span>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================
          FORMULÁRIO DE INFORMAÇÕES
         =================================================== */}
      <section id="formulario-informacoes" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              CONTACTO DIRECTO DE TRANSPORTE
            </span>
            <h3 className="font-serif text-3xl font-bold">Solicitar Informações de Transporte</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
              Preencha o formulário para saber mais detalhes sobre vagas e condições de atendimento.
            </p>
          </div>

          {formStatus === 'success' ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold">Solicitação Recebida com Sucesso!</h4>
              <p className="text-sm text-slate-300">
                Obrigado pelo contacto. A equipa B-Unit responderá com a máxima brevidade.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                className="hidden"
              />

              {formStatus === 'error' && (
                <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Fernandes"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-amber-500 focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Telefone de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: +258 84 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-amber-500 focus:outline-none text-sm font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Escola *
                  </label>
                  <input
                    type="text"
                    disabled
                    value={SCHOOL_NAME}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-amber-300 font-bold text-sm cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Turno *
                  </label>
                  <select
                    value={form.shift}
                    onChange={(e) => setForm({ ...form, shift: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-amber-500 focus:outline-none text-sm"
                  >
                    <option value="Turno da Manhã">Turno da Manhã (Manhã)</option>
                    <option value="Turno da Tarde">Turno da Tarde (Tarde)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Mensagem / Questões
                </label>
                <textarea
                  rows={3}
                  placeholder="Introduza a sua mensagem ou zona específica de residência..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-amber-500 focus:outline-none text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{formStatus === 'submitting' ? 'A enviar...' : 'SOLICITAR INFORMAÇÕES'}</span>
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
