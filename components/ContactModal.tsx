import React, { useState } from 'react';
import { X, Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { sanitizeString, validatePhoneNumber, checkRateLimit } from '../utils/security';
import { Product } from '../types';
import { OFFICIAL_PHONE_DISPLAY, OFFICIAL_PHONE_RAW } from '../data/constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetProduct?: Product | null;
  subjectType?: 'general' | 'part' | 'transport';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  targetProduct,
  subjectType = 'general',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: targetProduct
      ? `Olá B-Unit, gostaria de obter informações e cotação sobre a peça: ${targetProduct.name} (Cat: ${targetProduct.category}).`
      : subjectType === 'transport'
      ? 'Olá B-Unit, pretendo solicitar informações sobre o transporte escolar para a Escola Arco-Íris.'
      : 'Olá B-Unit, gostaria de entrar em contacto.',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setStatus('error');
      setErrorMessage(rateCheck.message || 'Erro ao enviar.');
      return;
    }

    const cleanName = sanitizeString(formData.name);
    const cleanPhone = sanitizeString(formData.phone);
    const cleanMessage = sanitizeString(formData.message);

    if (!cleanName || cleanName.length < 2) {
      setStatus('error');
      setErrorMessage('Por favor introduza o seu nome completo.');
      return;
    }

    if (!validatePhoneNumber(cleanPhone)) {
      setStatus('error');
      setErrorMessage('Por favor introduza um número de contacto válido (ex: 841234567 ou +258...).');
      return;
    }

    if (!cleanMessage || cleanMessage.length < 5) {
      setStatus('error');
      setErrorMessage('Por favor escreva uma mensagem detalhada.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const whatsappUrl = `https://wa.me/${OFFICIAL_PHONE_RAW}?text=${encodeURIComponent(formData.message)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-950/30 text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 focus:outline-none"
          aria-label="Fechar contacto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-1">
            B-Unit Atendimento Directo
          </span>
          <h3 className="text-2xl font-bold font-serif text-white">
            {targetProduct ? 'Cotação & Disponibilidade' : 'Falar com a B-Unit'}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            WhatsApp / Telefone: <strong className="text-emerald-400 font-mono">{OFFICIAL_PHONE_DISPLAY}</strong>
          </p>
          {targetProduct && (
            <p className="text-xs text-zinc-400 mt-2 bg-zinc-900 p-2 rounded-lg border border-zinc-800 font-mono">
              Item: <span className="text-red-400 font-bold">{targetProduct.name}</span>
            </p>
          )}
        </div>

        {status === 'success' ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-white">Mensagem Enviada com Sucesso!</h4>
            <p className="text-sm text-zinc-300">
              A equipa B-Unit responderá em breve através do número <strong className="text-white font-mono">{OFFICIAL_PHONE_DISPLAY}</strong>. Obrigado!
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {status === 'error' && (
              <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Seu Nome *
              </label>
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Ex: João Silva"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Telefone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="Ex: 84 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                Mensagem / Detalhes *
              </label>
              <textarea
                rows={3}
                required
                maxLength={500}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm resize-none"
              />
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 hover:bg-emerald-900 flex items-center justify-center gap-2 font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Via WhatsApp</span>
              </a>

              <a
                href={`tel:+${OFFICIAL_PHONE_RAW}`}
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center gap-2 font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Ligar ({OFFICIAL_PHONE_DISPLAY})</span>
              </a>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'submitting' ? 'A enviar...' : 'Enviar Solicitação'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
