// Black Unit (B-Unit) - Lógica da Aplicação, Segurança & Catálogo Real de Peças Automóveis

// Número Oficial WhatsApp do Proprietário Hilário Hernesto Come
const WHATSAPP_NUMBER = "258866211120";

// Catálogo com as Peças Automóveis Reais Fornecidas pelo Proprietário (SEM PREÇOS)
const productsData = [
  {
    id: 1,
    name: "Caixa de Direção",
    category: "Direção",
    desc: "Caixa de direção de alta precisão e durabilidade para condução estável, macia e segura.",
    image: "assets/images/steering.svg",
    available: true
  },
  {
    id: 2,
    name: "Caixa de Aceleração / Transmissão",
    category: "Caixa de velocidades",
    desc: "Caixa de aceleração e transmissão de alta performance para engates precisos e tração eficiente.",
    image: "assets/images/gearbox.svg",
    available: true
  },
  {
    id: 3,
    name: "Alternador",
    category: "Sistema elétrico",
    desc: "Alternador automotivo de alta capacidade para geração e carregamento estável da bateria.",
    image: "assets/images/alternator.svg",
    available: true
  },
  {
    id: 4,
    name: "Motor de Arranque",
    category: "Sistema elétrico",
    desc: "Motor de arranque reforçado de elevada resistência para partida rápida em qualquer viatura.",
    image: "assets/images/starter.svg",
    available: true
  }
];

// Categorias Oficiais Preparadas para o Catálogo da B-Unit
const availableCategories = [
  "Todos",
  "Direção",
  "Caixa de velocidades",
  "Sistema elétrico",
  "Motor",
  "Travagem",
  "Suspensão",
  "Embraiagem",
  "Arrefecimento",
  "Escape",
  "Combustível",
  "Ar condicionado",
  "Filtros",
  "Baterias",
  "Pneus",
  "Jantes",
  "Iluminação",
  "Carroçaria",
  "Interior",
  "Acessórios",
  "Lubrificantes",
  "Ferramentas",
  "Outros"
];

// Estado da Aplicação
let currentCategory = "Todos";
let searchQuery = "";

// Função de Sanitização de Segurança contra XSS
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, function(match) {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    };
    return escapeMap[match];
  }).trim();
}

// Inicialização da Aplicação
document.addEventListener("DOMContentLoaded", () => {
  initLoadingScreen();
  initNavigation();
  renderProducts();
  initCategoryFilters();
  initSearch();
  initModals();
  initForms();
});

// 1. Ecrã de Carregamento
function initLoadingScreen() {
  const loader = document.getElementById("loading-screen");
  setTimeout(() => {
    if (loader) {
      loader.classList.add("hidden-loader");
    }
  }, 800);
}

// 2. Navegação entre as 3 Páginas (SPA)
function initNavigation() {
  const navLinks = document.querySelectorAll("[data-target-page]");
  const pages = document.querySelectorAll(".page-section");

  function switchPage(pageId) {
    pages.forEach(page => {
      if (page.id === pageId) {
        page.classList.add("active-page");
      } else {
        page.classList.remove("active-page");
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("data-target-page") === pageId) {
        link.classList.add("active-nav");
      } else {
        link.classList.remove("active-nav");
      }
    });

    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Garantir renderização dos produtos caso mude para a página de produtos
    if (pageId === "produtos") {
      renderProducts();
    }

    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute("data-target-page");
      switchPage(targetPage);
    });
  });

  const currentHash = window.location.hash.replace("#", "");
  if (currentHash && document.getElementById(currentHash)) {
    switchPage(currentHash);
  }

  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// 3. Renderização do Catálogo de Peças (Sem preços, com imagem vetorial SVG/JPG garantida)
function renderProducts() {
  const container = document.getElementById("products-grid");
  const emptyState = document.getElementById("products-empty");
  if (!container) return;

  const filtered = productsData.filter(item => {
    const matchesCat = (currentCategory === "Todos" || item.category === currentCategory);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  container.innerHTML = filtered.map(item => `
    <div class="dark-card p-5 flex flex-col justify-between group shadow-lg">
      <div class="relative h-56 bg-black rounded-xl overflow-hidden mb-4 border border-slate-800 flex items-center justify-center p-3">
        <img src="${item.image}" alt="${sanitizeInput(item.name)}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy">
        <span class="absolute top-3 right-3 bg-black/90 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/40 shadow-md">
          ${sanitizeInput(item.category)}
        </span>
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-cyan-400 mb-2 leading-snug font-serif-heading">${sanitizeInput(item.name)}</h3>
          <p class="text-slate-300 text-sm leading-relaxed mb-4">${sanitizeInput(item.desc)}</p>
        </div>
        <div>
          <div class="text-xs text-emerald-400 font-semibold mb-3 flex items-center gap-1.5">
            <i class="fa-solid fa-circle-check text-xs"></i>
            <span>Disponível sob consulta</span>
          </div>
          <button onclick="openQuoteModal('${sanitizeInput(item.name)}')" class="w-full btn-red py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2 font-bold shadow-md">
            <i class="fa-brands fa-whatsapp text-lg"></i>
            <span>Entrar em contacto</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// 4. Filtros de Categoria
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".category-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-cyan-500", "text-black", "font-bold");
        b.classList.add("bg-slate-900", "text-slate-300", "hover:bg-slate-800");
      });

      btn.classList.remove("bg-slate-900", "text-slate-300", "hover:bg-slate-800");
      btn.classList.add("bg-cyan-500", "text-black", "font-bold");

      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });
}

// 5. Pesquisa de Peças
function initSearch() {
  const searchInput = document.getElementById("product-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = sanitizeInput(e.target.value);
      renderProducts();
    });
  }
}

// 6. Modais de Cotação
function initModals() {
  const modal = document.getElementById("quote-modal");
  const closeBtns = document.querySelectorAll(".close-modal");

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (modal) modal.classList.add("hidden");
    });
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }
}

window.openQuoteModal = function(productName = "") {
  const modal = document.getElementById("quote-modal");
  const itemInput = document.getElementById("modal-product-name");
  if (itemInput) itemInput.value = sanitizeInput(productName);
  if (modal) modal.classList.remove("hidden");
};

// 7. Formulários com Validação e Proteção de Segurança
function initForms() {
  const quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = sanitizeInput(document.getElementById("modal-user-name").value);
      const phone = sanitizeInput(document.getElementById("modal-user-phone").value);
      const product = sanitizeInput(document.getElementById("modal-product-name").value);
      const details = sanitizeInput(document.getElementById("modal-user-details").value);

      if (!name || !phone) {
        alert("Por favor, preencha o seu nome e telefone de contacto.");
        return;
      }

      const message = `*Solicitação de Cotação - B-Unit*%0A%0A` +
                      `*Cliente:* ${encodeURIComponent(name)}%0A` +
                      `*Contacto:* ${encodeURIComponent(phone)}%0A` +
                      `*Peça Pretendida:* ${encodeURIComponent(product || 'Consulta geral')}%0A` +
                      `*Detalhes:* ${encodeURIComponent(details || 'Sem observações adicionais.')}`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
      document.getElementById("quote-modal").classList.add("hidden");
      quoteForm.reset();
    });
  }

  const transportForm = document.getElementById("school-transport-form");
  if (transportForm) {
    transportForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const parentName = sanitizeInput(document.getElementById("trans-parent-name").value);
      const phone = sanitizeInput(document.getElementById("trans-phone").value);
      const school = sanitizeInput(document.getElementById("trans-school").value);
      const shift = sanitizeInput(document.getElementById("trans-shift").value);
      const notes = sanitizeInput(document.getElementById("trans-notes") ? document.getElementById("trans-notes").value : "");

      if (!parentName || !phone) {
        alert("Por favor, preencha o seu nome e contacto.");
        return;
      }

      const message = `*Solicitação de Informações - Transporte Escolar B-Unit*%0A%0A` +
                      `*Encarregado:* ${encodeURIComponent(parentName)}%0A` +
                      `*Contacto:* ${encodeURIComponent(phone)}%0A` +
                      `*Escola:* ${encodeURIComponent(school)}%0A` +
                      `*Turno Pretendido:* ${encodeURIComponent(shift)}%0A` +
                      `*Mensagem:* ${encodeURIComponent(notes || 'Gostaria de solicitar informações sobre o transporte escolar.')}`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
      alert("Obrigado pela sua mensagem! Entraremos em contacto rapidamente.");
      transportForm.reset();
    });
  }
}
