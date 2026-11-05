/**
 * ==========================================================================
 * BLACK UNIT - SISTEMA DE CATÁLOGO, FILTROS, MODAL E CARRINHO WHATSAPP
 * Ícones Oficiais: Lucide Icons (MIT) & Font Awesome Free (Brand Icons)
 * ==========================================================================
 */

// Biblioteca de Ícones SVG locais (traço consistente Lucide 2px, currentColor)
const ICONES = {
    car: `<svg class="icone-svg" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
    cart: `<svg class="icone-svg" viewBox="0 0 24 24"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    eye: `<svg class="icone-svg" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    search: `<svg class="icone-svg" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    whatsapp: `<svg class="icone-svg icone-svg-fill" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.15c-.24.68-1.39 1.3-1.92 1.38-.49.08-1.12.11-3.23-.76-2.52-1.05-4.13-3.64-4.25-3.81-.13-.17-1.02-1.36-1.02-2.6 0-1.24.65-1.85.88-2.1.24-.24.52-.3.7-.3.17 0 .35 0 .5.01.16.01.38-.06.59.45.23.54.78 1.91.85 2.05.07.15.11.32.02.5-.1.17-.15.28-.29.45-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.17.3 1.05 1.73 2.27 2.82 1.57 1.39 2.89 1.83 3.3 2 .41.17.65.15.89-.13.24-.28 1.03-1.2 1.31-1.62.27-.41.55-.35.92-.21.38.14 2.39 1.13 2.8 1.33.41.21.69.31.79.48.1.18.1 1.03-.14 1.71z"/></svg>`,
    heart: `<svg class="icone-svg" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    wrench: `<svg class="icone-svg" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    sliders: `<svg class="icone-svg" viewBox="0 0 24 24"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>`,
    x: `<svg class="icone-svg" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    chevronDown: `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>`,
    
    // Ícones específicos por categoria de peça
    categoria: {
        "Todas": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
        "Motor": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><path d="M3 10v8"/><path d="M7 10v8"/><path d="M3 14h4"/><path d="M7 8h4l2 -3h4v3h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"/><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/></svg>`,
        "Travões": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="6" r="1" fill="currentColor"/><circle cx="12" cy="18" r="1" fill="currentColor"/><circle cx="6" cy="12" r="1" fill="currentColor"/><circle cx="18" cy="12" r="1" fill="currentColor"/></svg>`,
        "Suspensão e Direção": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><path d="M12 2v3"/><path d="M9 5h6"/><path d="M9 5l6 2.5l-6 2.5l6 2.5l-6 2.5l6 2.5l-6 2.5l3 1"/><path d="M12 21v1"/><circle cx="12" cy="22" r="1"/></svg>`,
        "Transmissão e Embraiagem": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
        "Elétrica e Baterias": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/><path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"/><line x1="11" x2="9" y1="7" y2="17"/><path d="m13 12-2 5"/><line x1="22" x2="22" y1="11" y2="13"/></svg>`,
        "Arrefecimento e AC": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
        "Filtros": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
        "Óleos e Lubrificantes": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
        "Carroçaria e Iluminação": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.6 5H8.4a2 2 0 0 0-1.9 1.3L5 10l-2-2"/><path d="M7 17h10"/><path d="M5 12h14"/><rect width="18" height="8" x="3" y="10" rx="2"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/></svg>`,
        "Pneus e Jantes": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v5"/><path d="M12 16v5"/><path d="M3 12h5"/><path d="M16 12h5"/><path d="m5.6 5.6 3.6 3.6"/><path d="m14.8 14.8 3.6 3.6"/><path d="m5.6 18.4 3.6-3.6"/><path d="m14.8 9.2 3.6-3.6"/></svg>`,
        "Acessórios e Interior": `<svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>`
    }
};

// Estado global do catálogo
const ESTADO_CATALOGO = {
    categoria: "Todas",
    pesquisa: "",
    marca: "Todas",
    ano: "Todos",
    estado: "Todos",
    disponibilidade: "Todas",
    ordenacao: "recentes",
    apenasFavoritos: false,
    itensVisiveis: CONFIG_LOJA.itensPorPagina || 12,
    favoritos: new Set(),
    carrinho: []
};

/* ==========================================================================
   INICIALIZAÇÃO NO CARREGAMENTO DA PÁGINA
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    carregarArmazenamentoLocal();
    renderizarBotoesCategorias();
    preencherFiltrosDinamicos();
    configurarEventosUI();
    renderizarCatalogo();
    atualizarContadorCarrinho();
    inicializarFAQ();
});

/* ==========================================================================
   1. GESTÃO DO LOCALSTORAGE (FAVORITOS E CARRINHO)
   ========================================================================== */
function carregarArmazenamentoLocal() {
    try {
        const favs = localStorage.getItem("blackunit_favoritos");
        if (favs) {
            ESTADO_CATALOGO.favoritos = new Set(JSON.parse(favs));
        }

        const cart = localStorage.getItem("blackunit_carrinho");
        if (cart) {
            ESTADO_CATALOGO.carrinho = JSON.parse(cart);
        }
    } catch (e) {
        console.warn("Erro ao ler localStorage:", e);
    }
}

function salvarFavoritos() {
    try {
        localStorage.setItem("blackunit_favoritos", JSON.stringify(Array.from(ESTADO_CATALOGO.favoritos)));
    } catch (e) {
        console.warn("Erro ao guardar favoritos:", e);
    }
}

function salvarCarrinho() {
    try {
        localStorage.setItem("blackunit_carrinho", JSON.stringify(ESTADO_CATALOGO.carrinho));
    } catch (e) {
        console.warn("Erro ao guardar carrinho:", e);
    }
}

/* ==========================================================================
   2. FORMATAÇÃO DE PREÇO (ENTRAR EM CONTACTO / SOB CONSULTA)
   ========================================================================== */
function formatarPreco(valor) {
    return CONFIG_LOJA.textoPreco || "Entrar em Contacto";
}

/* ==========================================================================
   3. CATEGORIAS EM CHIPS / BOTÕES COM ÍCONES ESPECÍFICOS
   ========================================================================== */
function renderizarBotoesCategorias() {
    const container = document.getElementById("chips-categorias");
    if (!container) return;

    container.innerHTML = "";

    CATEGORIAS_PECAS.forEach(cat => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = `chip-categoria ${ESTADO_CATALOGO.categoria === cat ? "ativo" : ""}`;
        
        const qtd = cat === "Todas" 
            ? LISTA_PRODUTOS.length 
            : LISTA_PRODUTOS.filter(p => p.categoria.toLowerCase() === cat.toLowerCase()).length;

        const iconeSvg = ICONES.categoria[cat] || ICONES.wrench;

        botao.innerHTML = `
            ${iconeSvg}
            <span>${cat}</span>
            <span class="chip-qtd">(${qtd})</span>
        `;

        botao.addEventListener("click", () => {
            ESTADO_CATALOGO.categoria = cat;
            ESTADO_CATALOGO.itensVisiveis = CONFIG_LOJA.itensPorPagina;
            
            document.querySelectorAll(".chip-categoria").forEach(c => c.classList.remove("ativo"));
            botao.classList.add("ativo");

            renderizarCatalogo();
        });

        container.appendChild(botao);
    });
}

/* ==========================================================================
   4. PREENCHIMENTO DINÂMICO DOS SELETORES DE FILTRO
   ========================================================================== */
function preencherFiltrosDinamicos() {
    const selectMarca = document.getElementById("filtro-marca");
    const selectMarcaViatura = document.getElementById("viatura-marca");

    const marcas = Array.from(new Set(LISTA_PRODUTOS.map(p => p.marca))).sort();

    [selectMarca, selectMarcaViatura].forEach(select => {
        if (!select) return;
        marcas.forEach(m => {
            const opt = document.createElement("option");
            opt.value = m;
            opt.textContent = m;
            select.appendChild(opt);
        });
    });

    const selectAno = document.getElementById("filtro-ano");
    const selectAnoViatura = document.getElementById("viatura-ano");

    [selectAno, selectAnoViatura].forEach(select => {
        if (!select) return;
        for (let ano = 2024; ano >= 2005; ano--) {
            const opt = document.createElement("option");
            opt.value = ano;
            opt.textContent = ano;
            select.appendChild(opt);
        }
    });
}

/* ==========================================================================
   5. INICIALIZAR CONTROLO DE PREÇO (SLIDER)
   ========================================================================== */
function inicializarPrecoSlider() {
    const slider = document.getElementById("filtro-preco-slider");
    const display = document.getElementById("filtro-preco-valor");

    if (slider && display) {
        slider.addEventListener("input", (e) => {
            const valor = parseInt(e.target.value, 10);
            ESTADO_CATALOGO.precoMaximo = valor;
            display.textContent = formatarPreco(valor);
            renderizarCatalogo();
        });
    }
}

/* ==========================================================================
   6. CONFIGURAÇÃO DE EVENTOS DE INTERFACE
   ========================================================================== */
function configurarEventosUI() {
    const inputPesquisa = document.getElementById("input-pesquisa-pecas");
    if (inputPesquisa) {
        inputPesquisa.addEventListener("input", (e) => {
            ESTADO_CATALOGO.pesquisa = e.target.value.trim().toLowerCase();
            ESTADO_CATALOGO.itensVisiveis = CONFIG_LOJA.itensPorPagina;
            renderizarCatalogo();
        });
    }

    const btnLimparPesquisa = document.getElementById("btn-limpar-pesquisa");
    if (btnLimparPesquisa && inputPesquisa) {
        btnLimparPesquisa.addEventListener("click", () => {
            inputPesquisa.value = "";
            ESTADO_CATALOGO.pesquisa = "";
            renderizarCatalogo();
        });
    }

    const selectOrdenacao = document.getElementById("select-ordenacao");
    if (selectOrdenacao) {
        selectOrdenacao.addEventListener("change", (e) => {
            ESTADO_CATALOGO.ordenacao = e.target.value;
            renderizarCatalogo();
        });
    }

    const selectMarca = document.getElementById("filtro-marca");
    if (selectMarca) {
        selectMarca.addEventListener("change", (e) => {
            ESTADO_CATALOGO.marca = e.target.value;
            renderizarCatalogo();
        });
    }

    const selectAno = document.getElementById("filtro-ano");
    if (selectAno) {
        selectAno.addEventListener("change", (e) => {
            ESTADO_CATALOGO.ano = e.target.value;
            renderizarCatalogo();
        });
    }

    const selectEstado = document.getElementById("filtro-estado");
    if (selectEstado) {
        selectEstado.addEventListener("change", (e) => {
            ESTADO_CATALOGO.estado = e.target.value;
            renderizarCatalogo();
        });
    }

    const selectDisponibilidade = document.getElementById("filtro-disponibilidade");
    if (selectDisponibilidade) {
        selectDisponibilidade.addEventListener("change", (e) => {
            ESTADO_CATALOGO.disponibilidade = e.target.value;
            renderizarCatalogo();
        });
    }

    const btnLimparTodos = document.getElementById("btn-limpar-filtros");
    if (btnLimparTodos) {
        btnLimparTodos.addEventListener("click", resetarFiltros);
    }

    const btnFavToggle = document.getElementById("btn-ver-favoritos");
    if (btnFavToggle) {
        btnFavToggle.addEventListener("click", () => {
            ESTADO_CATALOGO.apenasFavoritos = !ESTADO_CATALOGO.apenasFavoritos;
            btnFavToggle.classList.toggle("ativo", ESTADO_CATALOGO.apenasFavoritos);
            renderizarCatalogo();
        });
    }

    const btnAbrirDrawer = document.getElementById("btn-abrir-drawer-filtros");
    const btnFecharDrawer = document.getElementById("btn-fechar-drawer-filtros");
    const drawerFiltros = document.getElementById("drawer-filtros");

    if (btnAbrirDrawer && drawerFiltros) {
        btnAbrirDrawer.addEventListener("click", () => {
            drawerFiltros.classList.add("ativo");
            document.body.style.overflow = "hidden";
        });
    }

    if (btnFecharDrawer && drawerFiltros) {
        btnFecharDrawer.addEventListener("click", () => {
            drawerFiltros.classList.remove("ativo");
            document.body.style.overflow = "";
        });
    }

    const formViatura = document.getElementById("form-seletor-viatura");
    if (formViatura) {
        formViatura.addEventListener("submit", (e) => {
            e.preventDefault();
            const marcaSel = document.getElementById("viatura-marca").value;
            const anoSel = document.getElementById("viatura-ano").value;

            if (marcaSel) ESTADO_CATALOGO.marca = marcaSel;
            if (anoSel) ESTADO_CATALOGO.ano = anoSel;

            if (selectMarca) selectMarca.value = marcaSel;
            if (selectAno) selectAno.value = anoSel;

            renderizarCatalogo();

            const catalogoSection = document.getElementById("catalogo-produtos");
            if (catalogoSection) {
                catalogoSection.scrollIntoView({ behavior: "smooth" });
            }

            mostrarToast(`Filtro de viatura aplicado: ${marcaSel || 'Todas'} ${anoSel || ''}`);
        });
    }

    const formNaoEncontrou = document.getElementById("form-peca-personalizada");
    if (formNaoEncontrou) {
        formNaoEncontrou.addEventListener("submit", (e) => {
            e.preventDefault();
            const peca = document.getElementById("input-peca-nome").value.trim();
            const carro = document.getElementById("input-peca-carro").value.trim();
            const ano = document.getElementById("input-peca-ano").value.trim();

            let msg = `*Pedido de Peça Sob Encomenda - Black Unit*\n\n`;
            msg += `Olá! Não encontrei a seguinte peça no vosso site e gostaria de saber se conseguem encomendar:\n\n`;
            msg += `• Peça pretendida: ${peca || "Não especificada"}\n`;
            msg += `• Viatura (Marca/Modelo): ${carro || "Não especificado"}\n`;
            msg += `• Ano de Fabrico: ${ano || "Não especificado"}\n\n`;
            msg += `Aguardo cotação e prazo de entrega. Obrigado!`;

            const url = `https://wa.me/${CONFIG_LOJA.numeroWhatsApp}?text=${encodeURIComponent(msg)}`;
            window.open(url, "_blank");
        });
    }

    const btnAbrirCarrinho = document.getElementById("btn-abrir-carrinho");
    const btnFecharCarrinho = document.getElementById("btn-fechar-carrinho");
    const drawerCarrinho = document.getElementById("drawer-carrinho");

    if (btnAbrirCarrinho && drawerCarrinho) {
        btnAbrirCarrinho.addEventListener("click", () => {
            drawerCarrinho.classList.add("ativo");
            document.body.style.overflow = "hidden";
            renderizarItensCarrinho();
        });
    }

    if (btnFecharCarrinho && drawerCarrinho) {
        btnFecharCarrinho.addEventListener("click", () => {
            drawerCarrinho.classList.remove("ativo");
            document.body.style.overflow = "";
        });
    }

    const btnEnviarWhatsAppCarrinho = document.getElementById("btn-enviar-pedido-whatsapp");
    if (btnEnviarWhatsAppCarrinho) {
        btnEnviarWhatsAppCarrinho.addEventListener("click", enviarPedidoCarrinhoWhatsApp);
    }

    const btnEsvaziarCarrinho = document.getElementById("btn-esvaziar-carrinho");
    if (btnEsvaziarCarrinho) {
        btnEsvaziarCarrinho.addEventListener("click", () => {
            if (ESTADO_CATALOGO.carrinho.length === 0) return;
            if (confirm("Tem certeza que deseja esvaziar o seu pedido?")) {
                ESTADO_CATALOGO.carrinho = [];
                salvarCarrinho();
                atualizarContadorCarrinho();
                renderizarItensCarrinho();
                mostrarToast("Pedido esvaziado.");
            }
        });
    }

    const btnFecharModal = document.getElementById("btn-fechar-modal");
    const modalDetalhes = document.getElementById("modal-detalhes-produto");

    if (btnFecharModal && modalDetalhes) {
        btnFecharModal.addEventListener("click", () => fecharModal());
    }

    if (modalDetalhes) {
        modalDetalhes.addEventListener("click", (e) => {
            if (e.target === modalDetalhes) fecharModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            fecharModal();
            if (drawerFiltros) drawerFiltros.classList.remove("ativo");
            if (drawerCarrinho) drawerCarrinho.classList.remove("ativo");
            document.body.style.overflow = "";
        }
    });
}

/* ==========================================================================
   7. REINICIALIZAR / LIMPAR FILTROS
   ========================================================================== */
function resetarFiltros() {
    ESTADO_CATALOGO.categoria = "Todas";
    ESTADO_CATALOGO.pesquisa = "";
    ESTADO_CATALOGO.marca = "Todas";
    ESTADO_CATALOGO.ano = "Todos";
    ESTADO_CATALOGO.estado = "Todos";
    ESTADO_CATALOGO.disponibilidade = "Todas";
    ESTADO_CATALOGO.precoMaximo = 35000;
    ESTADO_CATALOGO.ordenacao = "recentes";
    ESTADO_CATALOGO.apenasFavoritos = false;
    ESTADO_CATALOGO.itensVisiveis = CONFIG_LOJA.itensPorPagina;

    const inpPesquisa = document.getElementById("input-pesquisa-pecas");
    if (inpPesquisa) inpPesquisa.value = "";

    const selMarca = document.getElementById("filtro-marca");
    if (selMarca) selMarca.value = "Todas";

    const selAno = document.getElementById("filtro-ano");
    if (selAno) selAno.value = "Todos";

    const selEstado = document.getElementById("filtro-estado");
    if (selEstado) selEstado.value = "Todos";

    const selDisp = document.getElementById("filtro-disponibilidade");
    if (selDisp) selDisp.value = "Todas";

    const slider = document.getElementById("filtro-preco-slider");
    const displayPreco = document.getElementById("filtro-preco-valor");
    if (slider) slider.value = 35000;
    if (displayPreco) displayPreco.textContent = formatarPreco(35000);

    const selOrd = document.getElementById("select-ordenacao");
    if (selOrd) selOrd.value = "recentes";

    const btnFav = document.getElementById("btn-ver-favoritos");
    if (btnFav) btnFav.classList.remove("ativo");

    renderizarBotoesCategorias();
    renderizarCatalogo();
    mostrarToast("Filtros limpos!");
}

/* ==========================================================================
   8. FILTRAGEM E ORDENAÇÃO DOS PRODUTOS
   ========================================================================== */
function obterProdutosFiltrados() {
    return LISTA_PRODUTOS.filter(produto => {
        if (ESTADO_CATALOGO.categoria !== "Todas" && produto.categoria.toLowerCase() !== ESTADO_CATALOGO.categoria.toLowerCase()) {
            return false;
        }

        if (ESTADO_CATALOGO.pesquisa) {
            const termo = ESTADO_CATALOGO.pesquisa;
            const correspondeNome = produto.nome.toLowerCase().includes(termo);
            const correspondeRef = produto.referencia.toLowerCase().includes(termo);
            const correspondeModelos = produto.modelos.toLowerCase().includes(termo);
            const correspondeMarca = produto.marca.toLowerCase().includes(termo);

            if (!correspondeNome && !correspondeRef && !correspondeModelos && !correspondeMarca) {
                return false;
            }
        }

        if (ESTADO_CATALOGO.marca !== "Todas" && produto.marca !== "Universal" && produto.marca !== ESTADO_CATALOGO.marca) {
            return false;
        }

        if (ESTADO_CATALOGO.ano !== "Todos") {
            const anoNum = parseInt(ESTADO_CATALOGO.ano, 10);
            if (produto.anoInicio && produto.anoFim) {
                if (anoNum < produto.anoInicio || anoNum > produto.anoFim) {
                    return false;
                }
            }
        }

        if (ESTADO_CATALOGO.estado !== "Todos" && produto.estado !== ESTADO_CATALOGO.estado) {
            return false;
        }

        if (ESTADO_CATALOGO.disponibilidade !== "Todas" && produto.disponibilidade !== ESTADO_CATALOGO.disponibilidade) {
            return false;
        }

        if (ESTADO_CATALOGO.apenasFavoritos && !ESTADO_CATALOGO.favoritos.has(produto.id)) {
            return false;
        }

        return true;
    }).sort((a, b) => {
        switch (ESTADO_CATALOGO.ordenacao) {
            case "nome-desc":
                return b.nome.localeCompare(a.nome);
            case "nome-asc":
                return a.nome.localeCompare(b.nome);
            case "marca-asc":
                return a.marca.localeCompare(b.marca) || a.nome.localeCompare(b.nome);
            case "recentes":
            default:
                return (b.novidade ? 1 : 0) - (a.novidade ? 1 : 0) || b.id - a.id;
        }
    });
}

/* ==========================================================================
   9. RENDERIZAÇÃO DO CATÁLOGO DE PRODUTOS
   ========================================================================== */
function renderizarCatalogo() {
    const grid = document.getElementById("grid-catalogo-produtos");
    const contador = document.getElementById("contador-resultados");
    const containerVerMais = document.getElementById("container-ver-mais");

    if (!grid) return;

    const produtosFiltrados = obterProdutosFiltrados();

    if (contador) {
        contador.textContent = `${produtosFiltrados.length} ${produtosFiltrados.length === 1 ? "peça encontrada" : "peças encontradas"}`;
    }

    if (produtosFiltrados.length === 0) {
        grid.innerHTML = `
            <div class="sem-resultados">
                <div class="sem-resultados-icone">${ICONES.search}</div>
                <h3>Nenhuma peça encontrada</h3>
                <p>Não encontramos peças compatíveis com a sua pesquisa ou filtros selecionados.</p>
                <div class="sem-resultados-botoes">
                    <button type="button" class="btn btn-destaque" onclick="resetarFiltros()">Limpar Filtros</button>
                    <a href="https://wa.me/${CONFIG_LOJA.numeroWhatsApp}?text=${encodeURIComponent('Olá Black Unit! Procuro a seguinte peça e não encontrei no vosso site: ' + (ESTADO_CATALOGO.pesquisa || 'Peça Automóvel'))}" target="_blank" rel="noopener" class="btn btn-whatsapp">
                        ${ICONES.whatsapp} Pedir esta Peça no WhatsApp
                    </a>
                </div>
            </div>
        `;
        if (containerVerMais) containerVerMais.style.display = "none";
        return;
    }

    const produtosExibidos = produtosFiltrados.slice(0, ESTADO_CATALOGO.itensVisiveis);

    grid.innerHTML = produtosExibidos.map(produto => {
        const isFavorito = ESTADO_CATALOGO.favoritos.has(produto.id);
        const mensagemWhatsApp = `Olá Black Unit! Gostaria de consultar o preço e a disponibilidade da peça:\n\n• Peça: ${produto.nome}\n• Ref: ${produto.referencia}\n• Viatura: ${produto.marca} (${produto.modelos})\n• Estado: ${produto.estado}\n\nPor favor informem a cotação e prazos de entrega. Obrigado!`;
        const linkWhatsApp = `https://wa.me/${CONFIG_LOJA.numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;

        return `
            <article class="card-produto-loja" data-id="${produto.id}">
                <div class="produto-foto-wrap">
                    <span class="badge-estado ${produto.estado === 'Nova' ? 'badge-nova' : 'badge-usada'}">${produto.estado}</span>
                    <span class="badge-stock ${produto.disponibilidade === 'Em stock' ? 'badge-em-stock' : 'badge-encomenda'}">${produto.disponibilidade}</span>

                    <button type="button" class="btn-favorito ${isFavorito ? 'ativo' : ''}" onclick="alternarFavorito(${produto.id}, this)" aria-label="Guardar nos favoritos">
                        ${ICONES.heart}
                    </button>

                    <img src="${produto.imagem}" alt="${produto.nome}" class="produto-foto" loading="lazy" onerror="this.onerror=null; this.src='img/disco-travao.jpg';">
                </div>

                <div class="produto-corpo">
                    <div class="produto-meta-topo">
                        <span class="produto-categoria-tag">${produto.categoria}</span>
                        <span class="produto-ref-tag">Ref: ${produto.referencia}</span>
                    </div>

                    <h3 class="produto-titulo" onclick="abrirModal(${produto.id})" title="${produto.nome}">
                        ${produto.nome}
                    </h3>

                    <div class="produto-compatibilidade">
                        <span class="compat-icone">${ICONES.car}</span>
                        <span class="compat-texto" title="${produto.marca} • ${produto.modelos} (${produto.ano})">
                            <strong>${produto.marca}</strong>: ${produto.modelos} (${produto.ano})
                        </span>
                    </div>

                    <div class="produto-preco-box">
                        <span class="preco-sob-consulta">Entrar em Contacto</span>
                        <span class="preco-sob-consulta-aviso">Cotação imediata via WhatsApp</span>
                    </div>

                    <div class="produto-acoes">
                        <a href="${linkWhatsApp}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-comprar-wa" title="Pedir cotação no WhatsApp">
                            ${ICONES.whatsapp} Pedir Cotação no WhatsApp
                        </a>

                        <div class="produto-sub-acoes">
                            <button type="button" class="btn btn-secundario btn-add-carrinho" onclick="adicionarAoCarrinho(${produto.id})" title="Adicionar ao pedido de cotação">
                                ${ICONES.cart} + Pedido
                            </button>
                            <button type="button" class="btn btn-secundario btn-ver-detalhes" onclick="abrirModal(${produto.id})" title="Ver ficha técnica completa">
                                ${ICONES.eye} Detalhes
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    if (containerVerMais) {
        if (produtosFiltrados.length > ESTADO_CATALOGO.itensVisiveis) {
            containerVerMais.style.display = "block";
            containerVerMais.innerHTML = `
                <button type="button" class="btn btn-secundario btn-carregar-mais" onclick="carregarMaisProdutos()">
                    Ver Mais Peças (${produtosFiltrados.length - ESTADO_CATALOGO.itensVisiveis} restantes)
                </button>
            `;
        } else {
            containerVerMais.style.display = "none";
        }
    }
}

function carregarMaisProdutos() {
    ESTADO_CATALOGO.itensVisiveis += (CONFIG_LOJA.itensPorPagina || 8);
    renderizarCatalogo();
}

/* ==========================================================================
   10. FAVORITOS (LOCALSTORAGE)
   ========================================================================== */
function alternarFavorito(id, botao) {
    if (ESTADO_CATALOGO.favoritos.has(id)) {
        ESTADO_CATALOGO.favoritos.delete(id);
        if (botao) botao.classList.remove("ativo");
        mostrarToast("Peça removida dos favoritos.");
    } else {
        ESTADO_CATALOGO.favoritos.add(id);
        if (botao) botao.classList.add("ativo");
        mostrarToast("Peça guardada nos seus favoritos!");
    }
    salvarFavoritos();

    if (ESTADO_CATALOGO.apenasFavoritos) {
        renderizarCatalogo();
    }
}

/* ==========================================================================
   11. MODAL DE DETALHES DA PEÇA
   ========================================================================== */
function abrirModal(id) {
    const produto = LISTA_PRODUTOS.find(p => p.id === id);
    if (!produto) return;

    const modal = document.getElementById("modal-detalhes-produto");
    const conteudoModal = document.getElementById("conteudo-modal-produto");
    if (!modal || !conteudoModal) return;

    const msgWA = `Olá Black Unit! Gostaria de consultar o preço e obter mais detalhes da peça:\n\n• Peça: ${produto.nome}\n• Ref: ${produto.referencia}\n• Viatura: ${produto.marca} (${produto.modelos})\n• Estado: ${produto.estado}\n\nAguardo cotação e prazos de entrega. Obrigado!`;
    const linkWA = `https://wa.me/${CONFIG_LOJA.numeroWhatsApp}?text=${encodeURIComponent(msgWA)}`;

    conteudoModal.innerHTML = `
        <div class="modal-grid-detalhes">
            <div class="modal-foto-coluna">
                <div class="modal-foto-wrap">
                    <img src="${produto.imagem}" alt="${produto.nome}" class="modal-foto-principal" onerror="this.onerror=null; this.src='img/disco-travao.jpg';">
                    <div class="modal-badges-float">
                        <span class="badge-estado ${produto.estado === 'Nova' ? 'badge-nova' : 'badge-usada'}">${produto.estado}</span>
                        <span class="badge-stock ${produto.disponibilidade === 'Em stock' ? 'badge-em-stock' : 'badge-encomenda'}">${produto.disponibilidade}</span>
                    </div>
                </div>
            </div>

            <div class="modal-info-coluna">
                <div class="modal-cabecalho-info">
                    <span class="produto-categoria-tag">${produto.categoria}</span>
                    <span class="produto-ref-tag">Ref: ${produto.referencia}</span>
                </div>

                <h2 class="modal-titulo">${produto.nome}</h2>

                <div class="modal-preco-destaque" style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.35rem; margin-bottom: 1.25rem;">
                    <span class="preco-sob-consulta" style="font-size: 1.05rem; padding: 0.5rem 1.1rem;">Entrar em Contacto</span>
                    <span style="font-size: 0.85rem; color: var(--cor-texto-secundario);">Cotação personalizada e imediata via WhatsApp oficial</span>
                </div>

                <p class="modal-descricao-detalhada">${produto.descricaoDetalhada || produto.descricaoCurta}</p>

                <div class="modal-bloco-compat">
                    <h4>${ICONES.car} Compatibilidade Veicular:</h4>
                    <p><strong>Marca:</strong> ${produto.marca}</p>
                    <p><strong>Modelos:</strong> ${produto.modelos}</p>
                    <p><strong>Anos de Fabrico:</strong> ${produto.ano}</p>
                </div>

                <div class="modal-bloco-specs">
                    <h4>${ICONES.sliders} Ficha Técnica & Especificações:</h4>
                    <ul class="lista-especificacoes">
                        ${produto.especificacoes.map(esp => `
                            <li><strong>${esp.rotulo}:</strong> <span>${esp.valor}</span></li>
                        `).join("")}
                    </ul>
                </div>

                <div class="modal-botoes-acao">
                    <a href="${linkWA}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1;">
                        ${ICONES.whatsapp} Pedir Esta Peça no WhatsApp
                    </a>
                    <button type="button" class="btn btn-destaque" onclick="adicionarAoCarrinho(${produto.id}); fecharModal();">
                        ${ICONES.cart} Adicionar ao Pedido
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    const modal = document.getElementById("modal-detalhes-produto");
    if (modal) {
        modal.classList.remove("ativo");
        document.body.style.overflow = "";
    }
}

/* ==========================================================================
   12. CARRINHO DE ENCOMENDA MULTI-PEÇAS (WHATSAPP)
   ========================================================================== */
function adicionarAoCarrinho(id) {
    const produto = LISTA_PRODUTOS.find(p => p.id === id);
    if (!produto) return;

    const itemExistente = ESTADO_CATALOGO.carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        ESTADO_CATALOGO.carrinho.push({ id, quantidade: 1 });
    }

    salvarCarrinho();
    atualizarContadorCarrinho();
    mostrarToast(`"${produto.nome}" adicionada ao pedido!`);
}

function alterarQuantidadeCarrinho(id, delta) {
    const item = ESTADO_CATALOGO.carrinho.find(i => i.id === id);
    if (!item) return;

    item.quantidade += delta;
    if (item.quantidade <= 0) {
        ESTADO_CATALOGO.carrinho = ESTADO_CATALOGO.carrinho.filter(i => i.id !== id);
    }

    salvarCarrinho();
    atualizarContadorCarrinho();
    renderizarItensCarrinho();
}

function removerItemCarrinho(id) {
    ESTADO_CATALOGO.carrinho = ESTADO_CATALOGO.carrinho.filter(i => i.id !== id);
    salvarCarrinho();
    atualizarContadorCarrinho();
    renderizarItensCarrinho();
    mostrarToast("Item removido do pedido.");
}

function atualizarContadorCarrinho() {
    const badge = document.getElementById("badge-carrinho-qtd");
    const totalItens = ESTADO_CATALOGO.carrinho.reduce((acc, cur) => acc + cur.quantidade, 0);

    if (badge) {
        badge.textContent = totalItens;
        badge.style.display = totalItens > 0 ? "inline-flex" : "none";
    }
}

function renderizarItensCarrinho() {
    const listaWrap = document.getElementById("lista-itens-carrinho");
    const totalValorElem = document.getElementById("carrinho-total-valor");
    const btnEnviar = document.getElementById("btn-enviar-pedido-whatsapp");

    if (!listaWrap || !totalValorElem) return;

    if (ESTADO_CATALOGO.carrinho.length === 0) {
        listaWrap.innerHTML = `
            <div class="carrinho-vazio">
                <div style="margin-bottom: 0.8rem; color: var(--cor-texto-secundario);">${ICONES.cart}</div>
                <h4>O seu pedido está vazio</h4>
                <p>Navegue pelo catálogo e clique em "+ Pedido" nas peças que deseja orçar.</p>
            </div>
        `;
        totalValorElem.textContent = "0 Peças";
        if (btnEnviar) btnEnviar.setAttribute("disabled", "true");
        return;
    }

    if (btnEnviar) btnEnviar.removeAttribute("disabled");

    const totalItens = ESTADO_CATALOGO.carrinho.reduce((acc, cur) => acc + cur.quantidade, 0);

    listaWrap.innerHTML = ESTADO_CATALOGO.carrinho.map(item => {
        const produto = LISTA_PRODUTOS.find(p => p.id === item.id);
        if (!produto) return "";

        return `
            <div class="item-carrinho-linha">
                <img src="${produto.imagem}" alt="${produto.nome}" class="item-carrinho-img" onerror="this.onerror=null; this.src='img/disco-travao.jpg';">
                <div class="item-carrinho-info">
                    <h5 class="item-carrinho-titulo">${produto.nome}</h5>
                    <span class="item-carrinho-ref">Ref: ${produto.referencia}</span>
                    <div class="item-carrinho-preco" style="color: var(--cor-destaque); font-weight: 700; font-size: 0.85rem;">Preço: Entrar em Contacto</div>
                </div>
                <div class="item-carrinho-qtd-controles">
                    <button type="button" class="btn-qtd" onclick="alterarQuantidadeCarrinho(${produto.id}, -1)">-</button>
                    <span class="qtd-num">${item.quantidade}</span>
                    <button type="button" class="btn-qtd" onclick="alterarQuantidadeCarrinho(${produto.id}, 1)">+</button>
                </div>
                <button type="button" class="btn-remover-item" onclick="removerItemCarrinho(${produto.id})" title="Remover item">${ICONES.x}</button>
            </div>
        `;
    }).join("");

    totalValorElem.textContent = `${totalItens} ${totalItens === 1 ? 'item' : 'itens'} (Sob Consulta)`;
}

function enviarPedidoCarrinhoWhatsApp() {
    if (ESTADO_CATALOGO.carrinho.length === 0) return;

    let mensagem = `*Pedido de Cotação de Peças - Black Unit (Website)*\n\n`;
    mensagem += `Olá! Gostaria de solicitar cotação e verificar a disponibilidade das seguintes peças para a minha viatura:\n\n`;

    ESTADO_CATALOGO.carrinho.forEach((item, index) => {
        const produto = LISTA_PRODUTOS.find(p => p.id === item.id);
        if (!produto) return;

        mensagem += `${index + 1}. *${produto.nome}*\n`;
        mensagem += `   • Ref: ${produto.referencia}\n`;
        mensagem += `   • Viatura: ${produto.marca} (${produto.modelos})\n`;
        mensagem += `   • Quantidade: ${item.quantidade}\n`;
        mensagem += `   • Estado: ${produto.estado}\n\n`;
    });

    mensagem += `--------------------------------------\n`;
    mensagem += `*Cotação:* Solicito os preços individuais e o valor total em Meticais (MT).\n\n`;
    mensagem += `Por favor, confirmem a disponibilidade em stock e as condições de entrega ou levantamento. Obrigado!`;

    const url = `https://wa.me/${CONFIG_LOJA.numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

/* ==========================================================================
   13. PERGUNTAS FREQUENTES (FAQ ACCORDION)
   ========================================================================== */
function inicializarFAQ() {
    const itensFAQ = document.querySelectorAll(".item-faq-pergunta");

    itensFAQ.forEach(item => {
        item.addEventListener("click", () => {
            const pai = item.parentElement;
            const aberto = pai.classList.contains("ativo");

            document.querySelectorAll(".item-faq").forEach(f => f.classList.remove("ativo"));

            if (!aberto) {
                pai.classList.add("ativo");
            }
        });
    });
}

/* ==========================================================================
   14. TOAST NOTIFICATION
   ========================================================================== */
function mostrarToast(mensagem) {
    let toast = document.getElementById("toast-notificacao");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-notificacao";
        toast.className = "toast-notificacao";
        document.body.appendChild(toast);
    }

    toast.textContent = mensagem;
    toast.classList.add("visivel");

    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
        toast.classList.remove("visivel");
    }, 2800);
}
