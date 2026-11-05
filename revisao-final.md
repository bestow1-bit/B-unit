# Relatório de Revisão Final — Website Black Unit

**Data da Revisão:** Novembro de 2026  
**Empresa:** Black Unit (Moçambique — Maputo e Matola)  
**Atividades:** Venda de Peças de Automóvel & Transporte Escolar  
**Estado Geral:** Concluído, testado e pronto para publicação no GitHub Pages.

---

## 1. Auditoria Geral: O Que Foi Verificado e Corrigido

| Item Auditado | Diagnóstico Inicial | Ação e Correção Realizada | Estado |
|:---|:---|:---|:---:|
| **Número de WhatsApp** | Disperso em vários ficheiros com números fictícios (`+258 84 000 0000`, `258841234567`) | Unificado para o número oficial **`+258 86 621 1120`** em todas as páginas, scripts e links `https://wa.me/258866211120` | Resolvido |
| **Imagens Inadequadas no Catálogo** | Peças continham imagens desajustadas (tanque militar no snorkel, roda industrial com pessoas no volante, desenho CAD 3D no braço, corte esquemático alemão nos filtros) | Imagens inadequadas foram eliminadas de imediato. As peças sem fotografia de estúdio isolada usam o distintivo neutro oficial `img/pecas/placeholder.webp` | Resolvido |
| **Integridade de Links e Âncoras** | Possíveis 404s ou ligações quebradas em caminhos absolutos | 100% dos caminhos são estritamente relativos (`css/style.css`, `img/...`), compatíveis com subpastas do GitHub Pages (`/B-unit/`). Nenhuma âncora quebrada | Resolvido |
| **Rota do Transporte Escolar** | Rota antiga Cumbeza -> Fácim | Rota validada no sentido correto: **Partida em Fácim (04:00) até Chegada em Zimpeto (06:30)** com entrega pontual na Escola Arco-Íris e Mais Saber | Resolvido |
| **Formulário de Contacto e Reservas** | Submissão abria WhatsApp diretamente sem feedback visual nem validação | Adicionada validação de campos obrigatórios, sanitização de texto e caixa de feedback com mensagem de sucesso e erro | Resolvido |
| **Página de Erro 404** | Inexistente (o GitHub Pages mostrava a página padrão cinzenta) | Criada a página `404.html` personalizada no estilo escuro da Black Unit com botão para voltar ao início e botão de WhatsApp | Resolvido |

---

## 2. Lista "Preciso de ti para..." (O que depende do utilizador)

As seguintes tarefas requerem a tua intervenção direta ou informação própria da empresa:

1. **Fotografias das 5 Peças em Placeholder:**
   - `#4 Turbocompressor com Atuador Eletrónico VNT`
   - `#11 Braço de Suspensão Inferior Completo (Triângulo)`
   - `#14 Volante de Motor Bi-Massa`
   - `#22 Kit de Revisão: Filtro de Óleo, Ar e Combustível`
   - `#33 Snorkel Automóvel para Vadeamento`
   *Quando tiveres fotos reais e limpas destas peças (fundo branco ou neutro), basta guardar o ficheiro com o respetivo nome em `img/pecas/` e o site atualizará automaticamente.*

2. **Horários Exatos das Paragens Intermédias:**
   - Em `transporte.html`, paragens intermédias (Jardim, Benfica, Missão Roque, Cumbeza) têm etiquetas `<!-- EDITAR AQUI -->` caso queiras afinar a hora exata ao minuto da carrinha.

3. **Ativar Enforce HTTPS no GitHub Pages:**
   - No teu repositório GitHub, vai a **Settings > Pages > Enforce HTTPS** e ativa a caixa para que todas as visitas usem ligação segura com certificado SSL gratuito.

4. **Ativar Autenticação de Dois Fatores (2FA):**
   - Ativa 2FA na tua conta do GitHub (em **Settings > Password and authentication**) para impedir que terceiros modifiquem o código do site.

---

## 3. Segurança e Proteção (Site Estático no GitHub Pages)

### Auditoria de Credenciais
- Não foram encontrados tokens, palavras-passe, chaves de API nem endereços de correio eletrónico confidenciais no código.
- Criado o ficheiro `.gitignore` para impedir que pastas de teste, logs ou ficheiros de sistema (`.DS_Store`, `Thumbs.db`, `.env`) sejam enviados por engano para o repositório.

### Medidas Técnicas Implementadas
- **Content-Security-Policy (CSP):** Adicionada via `<meta>` em todas as páginas, restringindo fontes a Google Fonts, frames a Google Maps e conexões seguras.
- **Referrer Policy:** Adicionado `<meta name="referrer" content="strict-origin-when-cross-origin">` para proteger a privacidade dos utilizadores ao navegar para links externos.
- **Proteção contra Tabnabbing:** Todos os links externos (`target="_blank"`) e chamadas `window.open` incluem `rel="noopener noreferrer"`.
- **Prevenção de XSS:** Implementada função de sanitização de caracteres (`&`, `<`, `>`, `"`, `'`) e validação estrita dos dados lidos do `localStorage`.

### O que NÃO é possível proteger num site estático (Explicação Simples):
- Num site puramente estático (HTML, CSS e JavaScript), todo o código que corre no navegador do visitante é **público**. Qualquer pessoa pode abrir as Ferramentas de Programador (F12) e ler o código.
- **Nunca coloques senhas, chaves secretas de base de dados ou tokens de pagamento no JavaScript.**
- Se no futuro quiseres processar pagamentos online (ex.: M-Pesa, Cartão Visa) ou receber formulários gravados numa base de dados, precisarás de um serviço de backend seguro (como Cloud Functions, Supabase ou Firebase) que guarde as credenciais secretas do lado do servidor.

---

## 4. Animações e Experiência Visual

Todas as animações foram desenvolvidas em CSS e JavaScript puro (sem bibliotecas pesadas), mantendo durações entre 0,2s e 0,55s com aceleração por hardware (`transform` e `opacity`):

1. **Aparecimento ao Scroll:** As secções e blocos entram suavemente com fade-in e ligeiro deslize ascendente ao entrar no campo de visão (usando `IntersectionObserver`).
2. **Hover nos Cartões:** Cartões de produtos, serviços e escolas elevam-se 4px com sombra profunda, e as fotografias das peças têm um zoom discreto de 1.03x.
3. **Botões com Resposta Táctil:** Escala suave ao passar o rato (1.02x) e retorno tátil ao clicar (0.99x).
4. **Linha do Tempo da Rota:** As paragens da carrinha escolar surgem em cascata progressiva (delay de 120ms entre cada uma).
5. **Pulso nos Botões Flutuantes:** O botão do WhatsApp e o botão do carrinho flutuante possuem uma animação de brilho suave a cada 4 segundos, chamando a atenção sem incomodar.
6. **Contadores Numéricos:** Números de destaque contam suavemente de 0 até ao valor final quando entram no ecrã.
7. **Suporte a Acessibilidade (`prefers-reduced-motion`):** Utilizadores que tenham a redução de movimento ativada no telemóvel ou computador têm todas as animações desligadas de forma instantânea.

---

## 5. Melhorias Gerais de Usabilidade, Acessibilidade e SEO

- **Sobreposição Mobile Corrigida:** Adicionado espaçamento de segurança de 96px na parte inferior do telemóvel, garantindo que o botão flutuante de WhatsApp e o do carrinho nunca tapem o texto do rodapé.
- **Touch Targets:** Todos os botões e seletores cumprem a dimensão mínima recomendada de 44x44 px para toque confortável em smartphones.
- **SEO & Redes Sociais:**
  - Títulos `<title>` e `<meta name="description">` únicos e otimizados por página.
  - Metadados **Open Graph** (`og:title`, `og:description`, `og:image`, `og:locale`) para quando o link for partilhado no WhatsApp ou Facebook.
  - Ficheiros `sitemap.xml` e `robots.txt` criados na raiz.
  - Dados estruturados Schema.org (`LocalBusiness`) em JSON-LD configurados para Maputo e Matola.

---

## 6. Sugestões Comerciais para o Futuro (Até 5 Melhorias)

1. **Testemunhos de Pais e Encarregados:** Incluir uma secção com 2 a 3 depoimentos reais de encarregados de educação sobre a pontualidade e segurança da monitora no transporte escolar.
2. **Guia Rápido "Como Saber se a Peça é Compatível":** Uma pequena caixa explicativa no topo do catálogo a indicar onde o cliente encontra o número de chassis (VIN) ou modelo do motor no livrete do carro.
3. **Botão de Chamada Rápida ("Ligar Agora"):** No telemóvel, acrescentar um botão direto `tel:+258866211120` ao lado do botão de WhatsApp para clientes que preferem falar por voz em emergências mecânicas.
4. **Calculadora Rápida de Mensalidade:** Um seletor simples onde o pai escolhe a paragem e turno e obtém uma estimativa de valor antes de enviar a mensagem no WhatsApp.
5. **Perguntas Frequentes (FAQ) Específicas de Peças:** Adicionar à página `pecas.html` respostas sobre prazos de entrega nas províncias (Gaza, Inhambane, Sofala) e formas de pagamento.

---

## 7. Como Publicar e Validar

### Comandos Git:
```bash
git add .
git commit -m "feat: revisao final, seguranca csp, animacoes discretas, placeholders seguros e correcao de whatsapp"
git push origin main
```

### Como testar no navegador:
1. Abre o site no teu browser e pressiona `Ctrl + Shift + R` (ou `Cmd + Shift + R` no Mac) para limpar a cache.
2. Abre a consola com a tecla `F12` > separador **Console** e confirma que **não existem erros vermelhos**.
3. No separador **Network / Rede**, recarrega a página e confirma que todas as imagens em `img/pecas/` carregam com código `200` em formato WebP (< 150 KB).
4. Clica em "Pedir Cotação no WhatsApp" e no formulário de contacto para confirmar a abertura no número `+258 86 621 1120`.
