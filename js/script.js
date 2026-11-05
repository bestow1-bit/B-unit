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
   1. CONFIGURAÇÃO DO WHATSAPP OFICIAL (MUDE AQUI O SEU NÚMERO)
   ========================================================================== */
const CONFIG_WHATSAPP = {
    // Contacto oficial Black Unit (+258 86 621 1120)
    numero: "258866211120",

    // Mensagens predefinidas para cada área do website
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
    inicializarAnimacoesScroll();
    inicializarLinhaDoTempo();
    inicializarContadores();
});

/* ==========================================================================
   3. FUNÇÃO AUXILIAR DE SEGURANÇA (SANITIZAÇÃO CONTRA XSS)
   ========================================================================== */
function sanitizarTexto(str) {
    if (typeof str !== "string") return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .trim();
}

/* ==========================================================================
   4. MENU DE NAVEGAÇÃO MOBILE (HAMBÚRGUER COM TRANSIÇÃO SUAVE)
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

    // Fecha o menu suavemente ao clicar num link de navegação
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
   5. ATUALIZAR LINKS DE WHATSAPP DINAMICAMENTE
   ========================================================================== */
function inicializarLinksWhatsApp() {
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
   6. FORMULÁRIO DE CONTACTO COM VALIDAÇÃO, SEGURANÇA E FEEDBACK
   ========================================================================== */
function inicializarFormularioContacto() {
    const form = document.getElementById("form-contacto");
    if (!form) return;

    // Criar ou localizar elemento de feedback visual
    let feedback = document.getElementById("form-feedback");
    if (!feedback) {
        feedback = document.createElement("div");
        feedback.id = "form-feedback";
        feedback.className = "form-feedback";
        feedback.setAttribute("role", "status");
        feedback.setAttribute("aria-live", "polite");
        form.appendChild(feedback);
    }

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        // Recolher e sanitizar campos
        const campoNome = document.getElementById("campo-nome");
        const campoTelefone = document.getElementById("campo-telefone");
        const campoServico = document.getElementById("campo-servico");
        const campoMensagem = document.getElementById("campo-mensagem");

        const nome = campoNome ? sanitizarTexto(campoNome.value) : "";
        const telefone = campoTelefone ? sanitizarTexto(campoTelefone.value) : "";
        const servico = campoServico ? sanitizarTexto(campoServico.value) : "Geral";
        const mensagem = campoMensagem ? sanitizarTexto(campoMensagem.value) : "";

        // Validação básica
        if (!nome || nome.length < 2) {
            exibirFeedback(feedback, "Por favor, indique o seu nome completo.", "erro");
            if (campoNome) campoNome.focus();
            return;
        }

        if (!telefone || telefone.length < 8) {
            exibirFeedback(feedback, "Por favor, indique um número de telefone ou WhatsApp válido.", "erro");
            if (campoTelefone) campoTelefone.focus();
            return;
        }

        if (!mensagem || mensagem.length < 3) {
            exibirFeedback(feedback, "Por favor, escreva uma breve descrição do que precisa.", "erro");
            if (campoMensagem) campoMensagem.focus();
            return;
        }

        // Montagem da mensagem formatada para WhatsApp
        let textoWhatsApp = `*Mensagem enviada através do Website Black Unit*\n\n`;
        textoWhatsApp += `• *Nome:* ${nome}\n`;
        textoWhatsApp += `• *Telefone:* ${telefone}\n`;
        textoWhatsApp += `• *Serviço de Interesse:* ${servico}\n`;
        textoWhatsApp += `• *Mensagem:* ${mensagem}`;

        const urlWhatsApp = `https://wa.me/${CONFIG_WHATSAPP.numero}?text=${encodeURIComponent(textoWhatsApp)}`;

        // Feedback positivo de sucesso
        exibirFeedback(feedback, "Mensagem validada com sucesso! A abrir o WhatsApp oficial da Black Unit...", "sucesso");

        // Abertura segura sem vulnerabilidade de tabnabbing
        setTimeout(() => {
            window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
            form.reset();
        }, 600);
    });
}

function exibirFeedback(elemento, texto, tipo) {
    if (!elemento) return;
    elemento.textContent = texto;
    elemento.className = `form-feedback ${tipo}`;
    elemento.style.display = "block";
}

/* ==========================================================================
   7. ANIMAÇÕES DE SCROLL SUAVES (INTERSECTION OBSERVER)
   ========================================================================== */
function inicializarAnimacoesScroll() {
    // Se o utilizador prefere movimento reduzido, não aplica animações
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll(".animar-ao-scroll").forEach(el => el.classList.add("visivel"));
        return;
    }

    // Seleciona secções e blocos de conteúdo para fade-in suave
    const alvos = document.querySelectorAll(
        ".seccao-destaque, .seccao-servicos, .seccao-sobre, .seccao-contacto, " +
        ".beneficio-item, .card-escola, .cartao-caracteristica, .card-servico, " +
        ".formulario-caixa, .info-contacto, .mapa-container, .faq-item"
    );

    alvos.forEach(el => el.classList.add("animar-ao-scroll"));

    if (!("IntersectionObserver" in window)) {
        alvos.forEach(el => el.classList.add("visivel"));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    alvos.forEach(el => observer.observe(el));
}

/* ==========================================================================
   8. ANIMAÇÃO ESCALONADA DA LINHA DO TEMPO DA ROTA
   ========================================================================== */
function inicializarLinhaDoTempo() {
    const itensTimeline = document.querySelectorAll(".timeline-item");
    if (!itensTimeline.length) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        itensTimeline.forEach(it => it.classList.add("visivel"));
        return;
    }

    if (!("IntersectionObserver" in window)) {
        itensTimeline.forEach(it => it.classList.add("visivel"));
        return;
    }

    const observerTimeline = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Efeito em cascata sequencial
                itensTimeline.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("visivel");
                    }, index * 120);
                });
                obs.disconnect();
            }
        });
    }, { threshold: 0.2 });

    const containerTimeline = document.querySelector(".timeline-rotas-wrap") || itensTimeline[0];
    if (containerTimeline) {
        observerTimeline.observe(containerTimeline);
    }
}

/* ==========================================================================
   9. CONTADORES NUMÉRICOS ANIMADOS
   ========================================================================== */
function inicializarContadores() {
    const elementosContador = document.querySelectorAll("[data-contador]");
    if (!elementosContador.length) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        elementosContador.forEach(el => {
            el.textContent = el.getAttribute("data-contador");
        });
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const alvo = parseInt(el.getAttribute("data-contador"), 10) || 0;
                animarNumero(el, alvo);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    elementosContador.forEach(el => observer.observe(el));
}

function animarNumero(elemento, valorFinal, duracaoMs = 1200) {
    const inicio = 0;
    const tempoInicio = performance.now();

    function atualizar(agora) {
        const decorrido = agora - tempoInicio;
        const progresso = Math.min(decorrido / duracaoMs, 1);
        // Easing easeOutQuad
        const ease = progresso * (2 - progresso);
        const atual = Math.floor(inicio + (valorFinal - inicio) * ease);
        elemento.textContent = atual;

        if (progresso < 1) {
            requestAnimationFrame(atualizar);
        } else {
            elemento.textContent = valorFinal;
        }
    }

    requestAnimationFrame(atualizar);
}

/* ==========================================================================
   10. ATUALIZAÇÃO AUTOMÁTICA DO ANO NO RODAPÉ
   ========================================================================== */
function atualizarAnoRodape() {
    const spanAno = document.getElementById("ano-atual");
    if (spanAno) {
        spanAno.textContent = new Date().getFullYear();
    }
}
