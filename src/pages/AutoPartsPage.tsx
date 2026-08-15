import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { AUTO_PARTS_CATEGORIES } from '../data/constants';
import { Search, Filter, Wrench, MessageSquare, PhoneCall, ShieldCheck, Settings, AlertCircle, Sparkles } from 'lucide-react';

interface AutoPartsPageProps {
  products: Product[];
  onOpenProductContact: (product: Product) => void;
  onOpenGeneralContact: () => void;
  onOpenAdmin: () => void;
}

export const AutoPartsPage: React.FC<AutoPartsPageProps> = ({
  products,
  onOpenProductContact,
  onOpenGeneralContact,
  onOpenAdmin,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas as Categorias');

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'Todas as Categorias' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="bg-[#0b0f19] text-slate-100 min-h-screen pt-28 pb-24">
      
      {/* Background Subtle Automotive Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ===================================================
            HEADER BANNER & SEARCH BAR
           =================================================== */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest">
                <Wrench className="w-4 h-4 text-red-500" />
                <span>CATÁLOGO AUTOMÓVEL B-UNIT</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Peças e Acessórios Automóveis
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                Soluções para o seu veículo, com atendimento próximo e ajuda para encontrar aquilo que procura.
              </p>
            </div>

            {/* Admin trigger button for owner */}
            <button
              onClick={onOpenAdmin}
              className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold flex items-center gap-2 transition-colors"
              title="Área restrita de gestão de peças"
            >
              <Settings className="w-4 h-4 text-red-400" />
              <span>Gestão do Proprietário</span>
            </button>
          </div>

          {/* SEARCH BAR & CATEGORY SELECTOR */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 border-t border-slate-800">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="PESQUISAR PEÇAS OU ACESSÓRIOS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm tracking-wide font-medium shadow-inner"
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-4 relative">
              <Filter className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-8 py-4 rounded-2xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm font-semibold appearance-none cursor-pointer"
              >
                {AUTO_PARTS_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-900 text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Category Badges Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <span className="text-slate-500 font-bold uppercase tracking-wider shrink-0 mr-2">
              Categorias Rápidas:
            </span>
            {AUTO_PARTS_CATEGORIES.slice(1, 10).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg border shrink-0 transition-all font-semibold ${
                  selectedCategory === cat
                    ? 'bg-red-600 border-red-500 text-white shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ===================================================
            PRODUCT CATALOG GRID & EMPTY STATE
           =================================================== */}
        {filteredProducts.length === 0 ? (
          
          /* Exact Empty State Required in Section 18 */
          <div className="bg-slate-900/90 rounded-3xl p-12 text-center border border-slate-800 space-y-6 max-w-3xl mx-auto shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-red-950/70 border border-red-800/60 flex items-center justify-center mx-auto text-red-500">
              <AlertCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-serif text-white">
              Pesquisa no Catálogo
            </h3>

            <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto">
              "Estamos a preparar o nosso catálogo. Não encontrou o que procura? Entre em contacto connosco e teremos todo o gosto em ajudar."
            </p>

            <button
              onClick={onOpenGeneralContact}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm uppercase tracking-wider inline-flex items-center gap-3 shadow-xl shadow-red-950/60 transition-all hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              <span>ENTRAR EM CONTACTO</span>
            </button>
          </div>

        ) : (

          /* Product Cards Grid */
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Exibindo {filteredProducts.length} peças encontradas
              </span>
              <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                Cotações fornecidas sob consulta direta
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 rounded-3xl border border-slate-800 hover:border-red-600/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-300 flex flex-col justify-between"
                >
                  
                  {/* Image Container */}
                  <div className="relative h-52 bg-slate-950 overflow-hidden border-b border-slate-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).setAttribute(
                          'src',
                          'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=500'
                        );
                      }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-red-400 uppercase tracking-wider">
                      {product.category}
                    </div>

                    {/* Availability Badge */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-emerald-950/90 border border-emerald-700 text-[11px] font-bold text-emerald-400">
                      {product.availability}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price Prohibition Notice: No prices displayed */}
                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-[11px] text-slate-400 italic mb-3">
                        Entre em contacto para saber a disponibilidade e obter uma cotação.
                      </div>

                      <button
                        onClick={() => onOpenProductContact(product)}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-red-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>ENTRAR EM CONTACTO</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        )}

        {/* Bottom Help Banner */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-serif">Procura uma Peça Específica?</h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              A nossa equipa de apoio auxilia na localização de componentes automóveis para a sua viatura.
            </p>
          </div>
          <button
            onClick={onOpenGeneralContact}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 shrink-0"
          >
            Falar com a Equipa
          </button>
        </div>

      </div>
    </div>
  );
};
