/**
 * ==========================================================================
 * BLACK UNIT - TRANSPORTE ESCOLAR (Vanilla JavaScript)
 * ==========================================================================
 * 
 * GUIA DE EDIÇÃO RÁPIDA:
 * 1. Para adicionar ou modificar escolas atendidas, edite o array ESCOLAS_ATENDIDAS abaixo.
 * 2. O número de WhatsApp pode ser alterado no ficheiro js/script.js (CONFIG_WHATSAPP)
 *    ou na constante NUMERO_WHATSAPP abaixo caso este script seja executado isoladamente.
 */

/* ==========================================================================
   1. NÚMERO DE WHATSAPP (MUDE AQUI SE NECESSÁRIO)
   ========================================================================== */
const NUMERO_WHATSAPP_TRANSPORTE = (typeof CONFIG_WHATSAPP !== 'undefined' && CONFIG_WHATSAPP.numero) 
    ? CONFIG_WHATSAPP.numero 
    : "258840000000"; /* <-- EDITAR AQUI O SEU NÚMERO (Ex.: 258841234567) */

/* ==========================================================================
   2. ARRAY DE ESCOLAS ATENDIDAS (ADICIONE OU EDITE NOVAS ESCOLAS AQUI)
   ========================================================================== */
const ESCOLAS_ATENDIDAS = [
    {
        id: "comunhao-colheita",
        nome: "Escola Comunitária Comunhão na Colheita (Arco-Íris)",
        zona: "Cumbeza / Zona Norte",
        icone: "graduation-cap", /* Pode ser: "graduation-cap" ou "school" */
        descricao: "Transporte escolar dedicado com recolha porta-a-porta e acompanhamento rigoroso de monitora.",
        horarios: "Manhã (06:30 - 07:15) | Regresso (12:30 / 17:00)",
        turnos: "Turno da Manhã e Turno da Tarde",
        vagasDisponiveis: true /* true para Em Inscrições, false para Sob Consulta */
    },
    {
        id: "mais-saber",
        nome: "Escola / Colégio Mais Saber",
        zona: "Zimpeto",
        icone: "school",
        descricao: "Percurso direto e seguro ao longo do corredor Cumbeza-Zimpeto com horários rigorosos de chegada.",
        horarios: "Manhã (06:30 - 07:15) | Regresso (12:30 / 17:00)",
        turnos: "Turno da Manhã e Turno da Tarde",
        vagasDisponiveis: true
    }
    /* <!-- EDITAR AQUI: Para adicionar uma nova escola, copie e cole o modelo abaixo: -->
    ,
    {
        id: "nova-escola",
        nome: "Nome da Nova Escola ou Colégio",
        zona: "Bairro / Zona de Localização",
        icone: "graduation-cap",
        descricao: "Breve descrição sobre o serviço prestado nesta escola.",
        horarios: "Turno Manhã e Tarde",
        turnos: "Manhã e Tarde",
        vagasDisponiveis: true
    }
    */
];

/* ==========================================================================
   3. INICIALIZAÇÃO AO CARREGAR O DOCUMENTO
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    renderizarEscolas();
    popularSeletoresEscolas();
    inicializarPesquisaRotaBairro();
    inicializarFormularioReserva();
    inicializarFAQAccordion();
});

/* ==========================================================================
   4. RENDERIZAR OS CARTÕES DE ESCOLAS DINAMICAMENTE
   ========================================================================== */
function renderizarEscolas() {
    const container = document.getElementById("container-escolas");
    if (!container) return;

    // Constrói os cartões das escolas definidas no array
    const htmlCards = ESCOLAS_ATENDIDAS.map(escola => {
        // Ícone SVG correspondente
        const svgIcone = escola.icone === "school" 
            ? `<svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>`
            : `<svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;

        const mensagemWhatsApp = `Olá Black Unit! Gostaria de reservar vaga de transporte escolar para a ${escola.nome}.`;
        const linkWhatsApp = `https://wa.me/${NUMERO_WHATSAPP_TRANSPORTE}?text=${encodeURIComponent(mensagemWhatsApp)}`;

        return `
            <article class="card-escola">
                <div>
                    <div class="escola-cabecalho">
                        <div class="escola-icone-wrap">
                            ${svgIcone}
                        </div>
                        <div class="escola-info">
                            <h3>${escola.nome}</h3>
                            <span class="escola-zona-tag">
                                <svg class="icone-svg icone-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                ${escola.zona}
                            </span>
                        </div>
                    </div>

                    <p class="escola-descricao">${escola.descricao}</p>

                    <ul class="escola-detalhes-lista">
                        <li>
                            <svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span><strong>Horários:</strong> ${escola.horarios}</span>
                        </li>
                        <li>
                            <svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            <span><strong>Cobertura:</strong> ${escola.turnos}</span>
                        </li>
                        <li>
                            <svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <span><strong>Segurança:</strong> Cinto individual e acompanhante</span>
                        </li>
                    </ul>
                </div>

                <div style="margin-top: 1rem;">
                    <a href="${linkWhatsApp}" target="_blank" rel="noopener noreferrer" class="btn btn-destaque btn-bloco">
                        <svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
                        Reservar Lugar
                    </a>
                </div>
            </article>
        `;
    }).join("");

    // Cartão de convite para outras escolas
    const msgOutrasEscolas = "Olá Black Unit! Gostaria de consultar a possibilidade de transporte escolar para outra escola que não está listada no site.";
    const linkOutras = `https://wa.me/${NUMERO_WHATSAPP_TRANSPORTE}?text=${encodeURIComponent(msgOutrasEscolas)}`;

    const cardOutrasEscolas = `
        <article class="card-escola card-escola-outra">
            <div class="escola-icone-wrap">
                <svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--cor-texto-principal);">Outras Escolas?</h3>
            <p style="color: var(--cor-texto-secundario); font-size: 0.92rem; margin-bottom: 1.5rem; max-width: 300px;">
                O seu filho estuda noutra instituição ao longo da nossa rota? Consulte a viabilidade de nova paragem.
            </p>
            <a href="${linkOutras}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                <svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Fale Connosco no WhatsApp
            </a>
        </article>
    `;

    container.innerHTML = htmlCards + cardOutrasEscolas;
}

/* ==========================================================================
   5. POPULAR AUTOMATICAMENTE OS SELECTS DE ESCOLAS NOS FORMULÁRIOS
   ========================================================================== */
function popularSeletoresEscolas() {
    const seletores = [
        document.getElementById("pesquisa-escola-select"),
        document.getElementById("reserva-escola-select")
    ];

    seletores.forEach(select => {
        if (!select) return;

        // Limpa opções antigas preservando a primeira se for placeholder
        select.innerHTML = '<option value="">Selecione a escola pretendida...</option>';

        ESCOLAS_ATENDIDAS.forEach(escola => {
            const opt = document.createElement("option");
            opt.value = escola.nome;
            opt.textContent = escola.nome;
            select.appendChild(opt);
        });

        // Opção para outra escola
        const optOutra = document.createElement("option");
        optOutra.value = "Outra Escola (Sob Consulta)";
        optOutra.textContent = "Outra Escola (ao longo da rota)";
        select.appendChild(optOutra);
    });
}

/* ==========================================================================
   6. PESQUISA RÁPIDA DE ROTA POR BAIRRO (Onde mora o seu filho?)
   ========================================================================== */
function inicializarPesquisaRotaBairro() {
    const form = document.getElementById("form-pesquisa-bairro");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const campoBairro = document.getElementById("pesquisa-bairro-input");
        const selectEscola = document.getElementById("pesquisa-escola-select");

        const bairro = campoBairro ? campoBairro.value.trim() : "";
        const escola = selectEscola ? selectEscola.value.trim() : "";

        if (!bairro) {
            alert("Por favor, digite o nome do seu bairro ou paragem de referência.");
            if (campoBairro) campoBairro.focus();
            return;
        }

        const escolaTexto = escola ? `para a escola ${escola}` : "para o transporte escolar";
        
        // Mensagem exata solicitada: "Olá, gostaria de saber se atendem o bairro [bairro] para a escola [escola]."
        const mensagem = `Olá, gostaria de saber se atendem o bairro ${bairro} ${escolaTexto}.`;
        const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP_TRANSPORTE}?text=${encodeURIComponent(mensagem)}`;

        window.open(urlWhatsApp, "_blank");
    });
}

/* ==========================================================================
   7. FORMULÁRIO DE RESERVA COMPLETO -> WHATSAPP DIRETO
   ========================================================================== */
function inicializarFormularioReserva() {
    const form = document.getElementById("form-reserva-transporte");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const encarregado = document.getElementById("reserva-encarregado")?.value.trim() || "Não indicado";
        const telefone = document.getElementById("reserva-telefone")?.value.trim() || "Não indicado";
        const educando = document.getElementById("reserva-educando")?.value.trim() || "Não indicado";
        const idade = document.getElementById("reserva-idade")?.value.trim() || "Não indicada";
        const escola = document.getElementById("reserva-escola-select")?.value.trim() || "A definir";
        const bairro = document.getElementById("reserva-bairro")?.value.trim() || "Não indicado";
        const turno = document.getElementById("reserva-turno")?.value || "Manhã";
        const obs = document.getElementById("reserva-obs")?.value.trim() || "Sem observações adicionais";

        let texto = `*Pedido de Reserva de Transporte Escolar - Black Unit*\n\n`;
        texto += `• *Encarregado:* ${encarregado}\n`;
        texto += `• *Contacto:* ${telefone}\n`;
        texto += `• *Estudante:* ${educando} (${idade} anos)\n`;
        texto += `• *Escola Pretendida:* ${escola}\n`;
        texto += `• *Bairro / Ponto de Recolha:* ${bairro}\n`;
        texto += `• *Turno:* ${turno}\n`;
        if (obs !== "Sem observações adicionais") {
            texto += `• *Observações:* ${obs}\n`;
        }
        texto += `\nAguardo a confirmação da rota, disponibilidade de vaga e valor mensal. Obrigado!`;

        const url = `https://wa.me/${NUMERO_WHATSAPP_TRANSPORTE}?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank");
    });
}

/* ==========================================================================
   8. ACCORDION DE PERGUNTAS FREQUENTES (FAQ)
   ========================================================================== */
function inicializarFAQAccordion() {
    const botoesPergunta = document.querySelectorAll(".faq-pergunta");

    botoesPergunta.forEach(botao => {
        botao.addEventListener("click", () => {
            const itemPai = botao.closest(".faq-item");
            if (!itemPai) return;

            const estaAtivo = itemPai.classList.contains("ativo");

            // Fecha todos os outros itens para manter o acordeão limpo
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== itemPai) {
                    item.classList.remove("ativo");
                    const btn = item.querySelector(".faq-pergunta");
                    if (btn) btn.setAttribute("aria-expanded", "false");
                }
            });

            // Alterna o item atual
            if (estaAtivo) {
                itemPai.classList.remove("ativo");
                botao.setAttribute("aria-expanded", "false");
            } else {
                itemPai.classList.add("ativo");
                botao.setAttribute("aria-expanded", "true");
            }
        });
    });
}
