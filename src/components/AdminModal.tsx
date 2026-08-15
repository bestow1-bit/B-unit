import React, { useState } from 'react';
import { X, Lock, Plus, ShieldCheck, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { AUTO_PARTS_CATEGORIES } from '../data/constants';
import { sanitizeProductInput } from '../utils/security';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddProduct,
  onDeleteProduct,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // New product state
  const [name, setName] = useState('');
  const [category, setCategory] = useState<string>(AUTO_PARTS_CATEGORIES[1]);
  const [description, setDescription] = useState('');
  const [availability, setAvailability] = useState<'Em Estoque' | 'Sob Consulta' | 'Especial'>('Em Estoque');
  const [image, setImage] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'bunit2026' || passwordInput === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Palavra-passe incorreta.');
    }
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    const sanitized = sanitizeProductInput({
      name,
      category,
      description,
      availability,
      image: image || '/images/placeholder-part.jpg',
    });

    const newProd: Product = {
      id: `prod-${Date.now()}`,
      name: sanitized.name,
      category: sanitized.category,
      description: sanitized.description,
      availability: sanitized.availability as any,
      image: sanitized.image,
      isRealUploaded: true,
    };

    onAddProduct(newProd);
    setFeedbackMsg('Peça adicionada com sucesso ao catálogo!');

    // Reset fields
    setName('');
    setDescription('');
    setImage('');

    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-950/40 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800"
          aria-label="Fechar painel de gestão"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-red-950/80 border border-red-800/60 rounded-2xl text-red-500">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif">Área de Gestão do Proprietário</h3>
            <p className="text-xs text-zinc-400">Adicionar e organizar peças do catálogo B-Unit</p>
          </div>
        </div>

        {!isAuthenticated ? (
          /* Authentication Screen */
          <form onSubmit={handleLogin} className="space-y-4 py-4">
            <p className="text-sm text-zinc-300">
              Introduza a palavra-passe de acesso restrito para gerir os produtos do website.
            </p>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                Palavra-passe *
              </label>
              <input
                type="password"
                required
                placeholder="Introduza a palavra-passe"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:border-red-500 focus:outline-none text-sm"
              />
              <p className="text-[10px] text-zinc-500 mt-1">
                (Dica de demonstração: <code className="text-zinc-400">bunit2026</code>)
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Entrar no Painel</span>
            </button>
          </form>
        ) : (
          /* Admin Dashboard */
          <div className="space-y-8">
            {feedbackMsg && (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{feedbackMsg}</span>
              </div>
            )}

            {/* Add Product Form */}
            <form onSubmit={handleCreateProduct} className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>Adicionar Nova Peça ao Catálogo</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">Nome da Peça *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Filtro de Óleo Bosch"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">Categoria *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white text-xs"
                  >
                    {AUTO_PARTS_CATEGORIES.filter((c) => c !== 'Todas as Categorias').map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">URL / Caminho da Imagem</label>
                <input
                  type="text"
                  placeholder="Ex: file:///... ou https://..."
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">Descrição</label>
                <textarea
                  rows={2}
                  placeholder="Breve especificação técnica da peça..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white text-xs resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-amber-400 font-semibold">
                  * Os preços não são apresentados publicamente.
                </span>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Guardar Peça
                </button>
              </div>
            </form>

            {/* List of current catalog items */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Peças Atuais no Catálogo ({products.length})
              </h4>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {products.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-10 h-10 object-cover rounded-lg bg-black border border-zinc-800"
                        onError={(e) => {
                          (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=100');
                        }}
                      />
                      <div>
                        <div className="font-bold text-white">{prod.name}</div>
                        <div className="text-zinc-500 font-mono text-[10px]">{prod.category}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => onDeleteProduct(prod.id)}
                      className="p-2 text-zinc-500 hover:text-rose-400 hover:bg-rose-950/40 rounded-lg transition-colors"
                      title="Eliminar produto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
