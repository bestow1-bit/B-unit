/**
 * ==========================================================================
 * BLACK UNIT - SCRIPT PRINCIPAL (Vanilla JavaScript)
 * ==========================================================================
 * 
 * GUIA RÁPIDO PARA O UTILIZADOR:
 * Para alterar o número de WhatsApp em todo o site, basta modificar a variável
 * "numero" abaixo, mantendo apenas números (código de Moçambique: 258).
 */

/* ==========================================================================
   1. CONFIGURAÇÃO DO WHATSAPP (MUDE AQUI O SEU NÚMERO)
   ========================================================================== */
const CONFIG_WHATSAPP = {
    // Altere este número para o seu contacto oficial (formato internacional: 258XXXXXXXXX)
    numero: "258840000000",

    // Mensagens predefinidas para cada área
    mensagens: {
        geral: "Olá Black Unit! Gostaria de obter informações sobre os vossos serviços.",
        pecas: "Olá Black Unit! Gostaria de solicitar uma cotação para peças automóveis.",
        transporte: "Olá Black Unit! Gostaria de informações sobre vagas e rotas de Transporte Escolar."
    }
};

/* ==========================================================================
   2. INICIALIZAÇÃO APÓS CARREGAMENTO DA PÁGINA
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    inicializarMenuMobile();
    inicializarLinksWhatsApp();
    inicializarFormularioContacto();
    atualizarAnoRodape();
});

/* ==========================================================================
   3. MENU DE NAVEGAÇÃO MOBILE (HAMBÚRGUER)
   ========================================================================== */
function inicializarMenuMobile() {
    const botaoMenu = document.getElementById("btn-menu-mobile");
    const menuNav = document.getElementById("menu-principal");

    if (!botaoMenu || !menuNav) return;

    botaoMenu.addEventListener("click", () => {
        const aberto = menuNav.classList.toggle("ativo");
        botaoMenu.classList.toggle("ativo");
        botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    // Fecha o menu ao clicar num link de navegação
    const links = menuNav.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            menuNav.classList.remove("ativo");
            botaoMenu.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
        });
    });
}

/* ==========================================================================
   4. ATUALIZAR LINKS DE WHATSAPP DINAMICAMENTE
   ========================================================================== */
function inicializarLinksWhatsApp() {
    // Seleciona todos os botões e links configurados para WhatsApp
    const elementosWhatsApp = document.querySelectorAll("[data-whatsapp]");

    elementosWhatsApp.forEach(elem => {
        const tipo = elem.getAttribute("data-whatsapp") || "geral";
        const mensagemCustom = elem.getAttribute("data-mensagem");
        const mensagemFinal = mensagemCustom || CONFIG_WHATSAPP.mensagens[tipo] || CONFIG_WHATSAPP.mensagens.geral;
        
        const url = `https://wa.me/${CONFIG_WHATSAPP.numero}?text=${encodeURIComponent(mensagemFinal)}`;
        elem.setAttribute("href", url);
        elem.setAttribute("target", "_blank");
        elem.setAttribute("rel", "noopener noreferrer");
    });
}

/* ==========================================================================
   5. FORMULÁRIO DE CONTACTO -> ENVIO DIRECTO PARA WHATSAPP
   ========================================================================== */
function inicializarFormularioContacto() {
    const form = document.getElementById("form-contacto");
    if (!form) return;

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        // Recolher os campos do formulário
        const nome = document.getElementById("campo-nome") ? document.getElementById("campo-nome").value.trim() : "";
        const telefone = document.getElementById("campo-telefone") ? document.getElementById("campo-telefone").value.trim() : "";
        const servico = document.getElementById("campo-servico") ? document.getElementById("campo-servico").value : "Geral";
        const mensagem = document.getElementById("campo-mensagem") ? document.getElementById("campo-mensagem").value.trim() : "";

        // Montagem do texto em português
        let textoWhatsApp = `*Mensagem enviada através do Website Black Unit*\n\n`;
        textoWhatsApp += `• *Nome:* ${nome || "Não informado"}\n`;
        textoWhatsApp += `• *Telefone:* ${telefone || "Não informado"}\n`;
        textoWhatsApp += `• *Serviço de Interesse:* ${servico}\n`;
        textoWhatsApp += `• *Mensagem:* ${mensagem || "Gostaria de falar com um atendente."}`;

        // Gerar o link final e abrir o WhatsApp
        const urlWhatsApp = `https://wa.me/${CONFIG_WHATSAPP.numero}?text=${encodeURIComponent(textoWhatsApp)}`;
        window.open(urlWhatsApp, "_blank");
    });
}

/* ==========================================================================
   6. ATUALIZAÇÃO AUTOMÁTICA DO ANO NO RODAPÉ
   ========================================================================== */
function atualizarAnoRodape() {
    const spanAno = document.getElementById("ano-atual");
    if (spanAno) {
        spanAno.textContent = new Date().getFullYear();
    }
}
