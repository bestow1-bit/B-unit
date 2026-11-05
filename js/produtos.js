/**
 * ==========================================================================
 * BLACK UNIT - BANCO DE DADOS DE PEÇAS E CONFIGURAÇÃO DA LOJA
 * ==========================================================================
 * 
 * GUIA RÁPIDO PARA O UTILIZADOR:
 * - Todos os preços estão definidos como "Entrar em Contacto", conforme solicitado.
 * - O cliente escolhe a peça e envia o pedido diretamente para o WhatsApp oficial.
 * - Para adicionar ou editar produtos: modifique o array LISTA_PRODUTOS abaixo.
 * - Cada produto tem: id, nome, categoria, marca, modelos, ano, estado, disponibilidade,
 *   referencia, imagem, descricaoCurta, descricaoDetalhada e especificações.
 * ==========================================================================
 */

/* ==========================================================================
   CONFIGURAÇÕES GERAIS DA LOJA (EDITAR AQUI)
   ========================================================================== */
const CONFIG_LOJA = {
    // Número oficial de WhatsApp (formato internacional sem + ou espaços: 258XXXXXXXXX)
    numeroWhatsApp: "258866211120", /* Contacto oficial Black Unit: +258 86 621 1120 */

    // Texto predefinido no lugar de preços fixos
    textoPreco: "Entrar em Contacto",

    // Símbolo da moeda oficial de Moçambique
    moeda: "MT",

    // Quantidade de produtos exibidos inicialmente antes do botão "Ver Mais"
    itensPorPagina: 12
};

/* ==========================================================================
   CATEGORIAS OFICIAIS DISPONÍVEIS (TODOS OS TIPOS DE PEÇAS AUTOMÓVEIS)
   ========================================================================== */
const CATEGORIAS_PECAS = [
    "Todas",
    "Motor",
    "Travões",
    "Suspensão e Direção",
    "Transmissão e Embraiagem",
    "Elétrica e Baterias",
    "Arrefecimento e AC",
    "Filtros",
    "Óleos e Lubrificantes",
    "Carroçaria e Iluminação",
    "Pneus e Jantes",
    "Acessórios e Interior"
];

/* ==========================================================================
   CATÁLOGO COMPLETO DE PEÇAS AUTOMÓVEIS - BLACK UNIT
   No lugar de preços numéricos fixos, todas as peças usam "Entrar em Contacto"
   ========================================================================== */
const LISTA_PRODUTOS = [
    // ----------------------------------------------------------------------
    // 1. MOTOR & ALIMENTAÇÃO
    // ----------------------------------------------------------------------
    {
        id: 1,
        nome: "Bomba Injetora Diesel Common Rail Denso/Bosch",
        categoria: "Motor",
        marca: "Toyota",
        modelos: "Hilux D-4D 2.5/3.0 / Fortuner / Prado 1KD/2KD",
        ano: "2006 - 2020",
        anoInicio: 2006,
        anoFim: 2020,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "INJ-TY-29400",
        imagem: "img/pecas/bomba-injetora-diesel-toyota.webp",
        descricaoCurta: "Bomba injetora de alta pressão para motores diesel D-4D, com débito preciso e economia de combustível.",
        descricaoDetalhada: "Bomba de alta pressão com calibração digital. Garante arranque imediato a frio, queima limpa de diesel e pressão constante até 2000 bar. Tratada contra impurezas do gasóleo nacional.",
        especificacoes: [
            { rotulo: "Sistema", valor: "Common Rail Diesel" },
            { rotulo: "Pressão Máxima", valor: "2.000 bar" },
            { rotulo: "Calibração", valor: "Eletrónica de Fábrica" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 2,
        nome: "Cabeçote de Motor Completo com Válvulas (Culaça)",
        categoria: "Motor",
        marca: "Toyota",
        modelos: "Hilux / Prado 3.0 D-4D (Motor 1KD-FTV)",
        ano: "2005 - 2018",
        anoInicio: 2005,
        anoFim: 2018,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "CAB-TY-1KD",
        imagem: "img/pecas/cabecote-motor-toyota.webp",
        descricaoCurta: "Cabeçote de cilindros completo com válvulas montadas, retentores e guias de alta resistência térmica.",
        descricaoDetalhada: "Fundição em liga de alumínio de alta densidade testada contra microfissuras. Inclui árvore de cames, válvulas de admissão e escape já retificadas e assentadas para instalação imediata.",
        especificacoes: [
            { rotulo: "Material", valor: "Alumínio Reforçado" },
            { rotulo: "Componentes", valor: "Válvulas e Molas incluídas" },
            { rotulo: "Aplicação", valor: "Motor 1KD-FTV 3.0 Diesel" },
            { rotulo: "Garantia", valor: "12 Meses" }
        ],
        emDestaque: true,
        novidade: false
    },
    {
        id: 3,
        nome: "Kit de Distribuição Completo com Bomba de Água",
        categoria: "Motor",
        marca: "Isuzu",
        modelos: "D-Max / KB300 3.0 Ddi Turbo Diesel",
        ano: "2008 - 2021",
        anoInicio: 2008,
        anoFim: 2021,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "DIST-ISZ-KB300",
        imagem: "img/pecas/kit-distribuicao-bomba-agua-isuzu.webp",
        descricaoCurta: "Kit de correia dentada, tensores automáticos e bomba de água reforçada para revisão preventiva.",
        descricaoDetalhada: "Conjunto original fabricado com polímeros resistentes a calor e atrito contínuo. Garante sincronismo milimétrico do motor e refrigeração sem fugas.",
        especificacoes: [
            { rotulo: "Correia", valor: "Dentada Reforçada HNBR" },
            { rotulo: "Tensores", valor: "2 Rolamentos de Aço" },
            { rotulo: "Bomba de Água", valor: "Rotor metálico incluído" },
            { rotulo: "Durabilidade", valor: "100.000 km recomendados" }
        ],
        emDestaque: false,
        novidade: true
    },
    {
        id: 4,
        nome: "Turbocompressor com Atuador Eletrónico VNT",
        categoria: "Motor",
        marca: "Toyota",
        modelos: "Hilux / Fortuner 2.8 GD-6 (Motor 1GD)",
        ano: "2016 - 2023",
        anoInicio: 2016,
        anoFim: 2023,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Sob encomenda",
        referencia: "TRB-TY-1GD",
        imagem: "img/pecas/placeholder.webp",
        descricaoCurta: "Turbo de geometria variável para aceleração potente e resposta rápida sem quebras de binário.",
        descricaoDetalhada: "Equipado com eixo de titânio equilibrado eletronicamente e atuador passo-a-passo. Fornece pressão estável mesmo em viagens longas e subidas íngremes.",
        especificacoes: [
            { rotulo: "Tecnologia", valor: "Geometria Variável (VGT/VNT)" },
            { rotulo: "Refrigeração", valor: "Óleo e Água" },
            { rotulo: "Atuador", valor: "Eletrónico com sensor integrado" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: true
    },

    // ----------------------------------------------------------------------
    // 2. TRAVÕES
    // ----------------------------------------------------------------------
    {
        id: 5,
        nome: "Par de Discos de Travão Ventilados Dianteiros",
        categoria: "Travões",
        marca: "Toyota",
        modelos: "Hilux Revo / Fortuner / Land Cruiser Prado",
        ano: "2010 - 2023",
        anoInicio: 2010,
        anoFim: 2023,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "DSC-TY-319V",
        imagem: "img/pecas/discos-travao-ventilados-toyota.webp",
        descricaoCurta: "Discos com ventilação direcional e canais anti-aquecimento para travagens firmes.",
        descricaoDetalhada: "Fundição em ferro nodular com tratamento anti-ferrugem e ranhuras de arrefecimento. Elimina trepidações no pedal e suporta o esforço de carga e reboques.",
        especificacoes: [
            { rotulo: "Posição", valor: "Dianteiro (Esq / Dir)" },
            { rotulo: "Diâmetro", valor: "319 mm" },
            { rotulo: "Tipo", valor: "Ventilado com canais espirais" },
            { rotulo: "Furos", valor: "6 Furos" }
        ],
        emDestaque: true,
        novidade: false
    },
    {
        id: 6,
        nome: "Jogo de Pastilhas de Travão Dianteiras Cerâmicas",
        categoria: "Travões",
        marca: "Nissan",
        modelos: "Hardbody NP300 / Navara D40 / Patrol",
        ano: "2007 - 2022",
        anoInicio: 2007,
        anoFim: 2022,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "PST-NS-HB4P",
        imagem: "img/pecas/pastilhas-travao-ceramicas-nissan.webp",
        descricaoCurta: "Pastilhas cerâmicas de alta aderência, silenciosas e sem libertação de poeiras pretas.",
        descricaoDetalhada: "Composto cerâmico resistente a temperaturas superiores a 650°C. Com chapas anti-ruído (shims) em aço inox e chanfros de dissipação térmica.",
        especificacoes: [
            { rotulo: "Composição", valor: "Composto Cerâmico Premium" },
            { rotulo: "Ruído", valor: "Tecnologia Silenciosa 0dB" },
            { rotulo: "Sensores", valor: "Avisador acústico de desgaste" },
            { rotulo: "Embalagem", valor: "Jogo para as 2 rodas dianteiras" }
        ],
        emDestaque: false,
        novidade: true
    },
    {
        id: 7,
        nome: "Cilindro Mestre de Travão com Servofreio (Bomba Central)",
        categoria: "Travões",
        marca: "Mitsubishi",
        modelos: "Pajero Sport / L200 Triton 4x4",
        ano: "2008 - 2019",
        anoInicio: 2008,
        anoFim: 2019,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "CIL-MIT-TRT",
        imagem: "img/pecas/cilindro-mestre-travao-mitsubishi.webp",
        descricaoCurta: "Bomba principal de travão com reservatório e êmbolos duplos para máxima pressão hidráulica.",
        descricaoDetalhada: "Corpo em alumínio anodizado resistente à corrosão por fluido de travões DOT4. Retentores internos em borracha EPDM para resposta rápida e pedal consistente.",
        especificacoes: [
            { rotulo: "Fluido", valor: "Compatível com DOT3 / DOT4 / DOT5.1" },
            { rotulo: "Circuito", valor: "Duplo independente (diant./tras.)" },
            { rotulo: "Reservatório", valor: "Incluído com tampa estanque" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 3. SUSPENSÃO E DIREÇÃO
    // ----------------------------------------------------------------------
    {
        id: 8,
        nome: "Caixa de Direção Hidráulica Assistida RHD",
        categoria: "Suspensão e Direção",
        marca: "Toyota",
        modelos: "Hilux Vigo / Revo / Fortuner 4x4",
        ano: "2008 - 2022",
        anoInicio: 2008,
        anoFim: 2022,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "CD-TY-HLX44",
        imagem: "img/pecas/caixa-direcao-hidraulica-toyota.webp",
        descricaoCurta: "Caixa de direção completa para condução suave, firme e sem folgas no volante.",
        descricaoDetalhada: "Conjunto completo com cremalheira retificada, retentores de alta pressão em borracha nitrílica e terminais axiais incluídos. Testada e aprovada contra fugas hidráulicas.",
        especificacoes: [
            { rotulo: "Tipo", valor: "Hidráulica Assistida" },
            { rotulo: "Compatibilidade", valor: "Condução à Direita (RHD / Moçambique)" },
            { rotulo: "Terminais", valor: "Incluídos" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: true,
        novidade: false
    },
    {
        id: 9,
        nome: "Par de Amortecedores a Gás Heavy Duty Dianteiros",
        categoria: "Suspensão e Direção",
        marca: "Ford",
        modelos: "Ranger T6 / BT-50 2.2 e 3.2 TDCi",
        ano: "2012 - 2022",
        anoInicio: 2012,
        anoFim: 2022,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "AMT-FRD-RGHD",
        imagem: "img/pecas/amortecedores-gas-dianteiros-ford.webp",
        descricaoCurta: "Amortecedores pressurizados com nitrogénio para estabilidade total em picadas e asfalto.",
        descricaoDetalhada: "Pistão duplo de 35 mm e óleo hidráulico de baixa viscosidade com carga de gás nitrogénio. Elimina balanços excessivos e absorve impactos de buracos e pedras com conforto.",
        especificacoes: [
            { rotulo: "Tecnologia", valor: "Gás Nitrogénio Pressurizado" },
            { rotulo: "Diâmetro do Corpo", valor: "54 mm reforçado" },
            { rotulo: "Casquilhos", valor: "Poliuretano de alta durabilidade" },
            { rotulo: "Garantia", valor: "12 Meses" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 10,
        nome: "Feixe de Molas Traseiro Reforçado para Carga",
        categoria: "Suspensão e Direção",
        marca: "Toyota",
        modelos: "Hilux / Land Cruiser Série 79 Pick-up",
        ano: "2005 - 2024",
        anoInicio: 2005,
        anoFim: 2024,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "FXM-TY-LC79",
        imagem: "img/pecas/feixe-molas-traseiro-toyota.webp",
        descricaoCurta: "Feixe de molas multi-lâminas em aço carbono temperado para suporte de carga pesada.",
        descricaoDetalhada: "Com lâmina de reforço adicional e tratamento anticorrosão por cataforese. Suporta cargas elevadas sem perder altura do chassis nem comprometer o conforto vazio.",
        especificacoes: [
            { rotulo: "Lâminas", valor: "6 Lâminas em aço temperado" },
            { rotulo: "Capacidade Carga", valor: "Até 1.500 kg" },
            { rotulo: "Casquilhos", valor: "Silentblocks em borracha vulcanizada" },
            { rotulo: "Garantia", valor: "12 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },
    {
        id: 11,
        nome: "Braço de Suspensão Inferior Completo (Triângulo)",
        categoria: "Suspensão e Direção",
        marca: "Isuzu",
        modelos: "D-Max / KB250 / KB300",
        ano: "2012 - 2021",
        anoInicio: 2012,
        anoFim: 2021,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "BRC-ISZ-DMAX",
        imagem: "img/pecas/placeholder.webp",
        descricaoCurta: "Triângulo de suspensão inferior forjado com rótula e sinoblocos prensados de fábrica.",
        descricaoDetalhada: "Aço estampado de alta resistência mecânica para manter o alinhamento de direção e geometria corretos, mesmo em terrenos irregulares.",
        especificacoes: [
            { rotulo: "Posição", valor: "Dianteiro Inferior" },
            { rotulo: "Rótula", valor: "Blindada e pré-lubrificada" },
            { rotulo: "Sinoblocos", valor: "Borracha natural vulcanizada" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 4. TRANSMISSÃO E EMBRAIAGEM
    // ----------------------------------------------------------------------
    {
        id: 12,
        nome: "Kit de Embraiagem Reforçado (Disco + Prensa + Rolamento)",
        categoria: "Transmissão e Embraiagem",
        marca: "Toyota",
        modelos: "Hilux D-4D 2KD/1KD / Fortuner Manual 4x4",
        ano: "2006 - 2019",
        anoInicio: 2006,
        anoFim: 2019,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "EMB-TY-260MM",
        imagem: "img/pecas/kit-embraiagem-reforcado-toyota.webp",
        descricaoCurta: "Kit completo de embraiagem reforçada com molas temperadas e disco de atrito orgânico.",
        descricaoDetalhada: "Fabricado pela Exedy / Valeo com especificações OE. Prensa balanceada para engate macio, sem trepidações e sem patinar sob reboque.",
        especificacoes: [
            { rotulo: "Diâmetro", valor: "260 mm" },
            { rotulo: "Estrias", valor: "21 Dentes" },
            { rotulo: "Componentes", valor: "Disco, Prato (Prensa) e Rolamento" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 13,
        nome: "Semi-Eixo Dianteiro Completo com Juntas Homocinéticas",
        categoria: "Transmissão e Embraiagem",
        marca: "Nissan",
        modelos: "Hardbody / Navara D40 4x4",
        ano: "2008 - 2020",
        anoInicio: 2008,
        anoFim: 2020,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "SMX-NS-D40",
        imagem: "img/pecas/semi-eixo-dianteiro-nissan.webp",
        descricaoCurta: "Eixo de tração 4x4 completo com foles em silicone e esferas de aço temperado.",
        descricaoDetalhada: "Transmite o binário do diferencial para as rodas com folga zero. Foles resistentes a rasgos causados por ramos, pedras e areia fina.",
        especificacoes: [
            { rotulo: "Posição", valor: "Dianteiro Esquerdo / Direito" },
            { rotulo: "Foles", valor: "Silicone térmico reforçado" },
            { rotulo: "Lubrificação", valor: "Massa grafitada de alta pressão" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },
    {
        id: 14,
        nome: "Volante de Motor Bi-Massa com Amortecedor de Vibração",
        categoria: "Transmissão e Embraiagem",
        marca: "Ford",
        modelos: "Ranger 3.2 TDCi / BT-50",
        ano: "2012 - 2020",
        anoInicio: 2012,
        anoFim: 2020,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Sob encomenda",
        referencia: "VLT-FRD-32B",
        imagem: "img/pecas/placeholder.webp",
        descricaoCurta: "Volante de motor com molas de torção internas para proteger a caixa de velocidades.",
        descricaoDetalhada: "Absorve as vibrações rotacionais do motor de 5 cilindros, garantindo silêncio no habitáculo e trocas de caixa suaves.",
        especificacoes: [
            { rotulo: "Tipo", valor: "Dupla Massa (Dual Mass)" },
            { rotulo: "Cremalheira", valor: "Para motor de arranque de alta potência" },
            { rotulo: "Equilíbrio", valor: "Dinâmico de precisão" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 5. ELÉTRICA E BATERIAS
    // ----------------------------------------------------------------------
    {
        id: 15,
        nome: "Alternador 12V 90A/120A Reforçado com Polia Roda-Livre",
        categoria: "Elétrica e Baterias",
        marca: "Toyota",
        modelos: "Hilux D-4D / Fortuner / Prado 120 e 150",
        ano: "2006 - 2021",
        anoInicio: 2006,
        anoFim: 2021,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "ALT-TY-90A",
        imagem: "img/pecas/alternador-12v-reforcado-toyota.webp",
        descricaoCurta: "Alternador de alta performance para reposição direta com recarga estável da bateria.",
        descricaoDetalhada: "Enrolamento 100% em cobre reforçado e regulador eletrónico de tensão de alta precisão. Resistente a altas temperaturas, poeira e vibrações das estradas moçambicanas.",
        especificacoes: [
            { rotulo: "Voltagem", valor: "12V" },
            { rotulo: "Capacidade", valor: "90 a 120 Amperes" },
            { rotulo: "Tipo de Polia", valor: "7PK (7 Canais)" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 16,
        nome: "Motor de Arranque 12V 2.2kW de Alto Torque",
        categoria: "Elétrica e Baterias",
        marca: "Toyota",
        modelos: "Hilux / Prado / Hiace Quantum Diesel",
        ano: "2005 - 2020",
        anoInicio: 2005,
        anoFim: 2020,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "ARR-TY-22KW",
        imagem: "img/pecas/motor-arranque-12v-toyota.webp",
        descricaoCurta: "Motor de arranque com redução planetária para partidas instantâneas em qualquer temperatura.",
        descricaoDetalhada: "Solenoide blindado e engrenagem de acionamento em aço cementado. Garante rotação rápida do virabrequim com baixo consumo de corrente elétrica.",
        especificacoes: [
            { rotulo: "Potência", valor: "2.2 kW (Alto Binário)" },
            { rotulo: "Dentes do Pinhão", valor: "10 Dentes" },
            { rotulo: "Fixação", valor: "2 Furos de Fixação Original" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: true,
        novidade: false
    },
    {
        id: 17,
        nome: "Bateria Automóvel Selada 12V 70Ah / 100Ah Heavy Duty",
        categoria: "Elétrica e Baterias",
        marca: "Universal",
        modelos: "Adequada para Pick-ups, SUVs e Carrinhas Escolares",
        ano: "Universal",
        anoInicio: 2000,
        anoFim: 2025,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "BAT-BU-70SMF",
        imagem: "img/pecas/bateria-automovel-12v.webp",
        descricaoCurta: "Bateria selada livre de manutenção com tecnologia de grelhas de cálcio e indicador de carga.",
        descricaoDetalhada: "Construção reforçada com placas de chumbo espessas resistentes a vibrações severas e calor tropical. Olho mágico (hidrómetro) para verificação rápida de carga.",
        especificacoes: [
            { rotulo: "Capacidade", valor: "70Ah a 105Ah (conforme modelo)" },
            { rotulo: "Corrente de Arranque (CCA)", valor: "650A a 850A" },
            { rotulo: "Manutenção", valor: "100% Livre de Manutenção (SMF)" },
            { rotulo: "Garantia", valor: "12 Meses" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 18,
        nome: "Sensor de Massa de Ar (MAF) / Sensor de Oxigénio",
        categoria: "Elétrica e Baterias",
        marca: "Nissan",
        modelos: "Hardbody / X-Trail / Tiida / Navara",
        ano: "2008 - 2020",
        anoInicio: 2008,
        anoFim: 2020,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "SNS-NS-MAF01",
        imagem: "img/pecas/sensor-massa-ar-nissan.webp",
        descricaoCurta: "Sensor eletrónico de precisão para medição correta da mistura ar-combustível.",
        descricaoDetalhada: "Restaura o consumo original de combustível, elimina falhas na aceleração e apaga luz de avaria no painel (Check Engine).",
        especificacoes: [
            { rotulo: "Tipo", valor: "Fio Quente Digital" },
            { rotulo: "Conector", valor: "5 Pinos Plug & Play" },
            { rotulo: "Tempo de Resposta", valor: "15 milissegundos" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 6. ARREFECIMENTO E AR CONDICIONADO (AC)
    // ----------------------------------------------------------------------
    {
        id: 19,
        nome: "Compressor de Ar Condicionado (AC) Completo",
        categoria: "Arrefecimento e AC",
        marca: "Toyota",
        modelos: "Hilux D-4D / Fortuner / Prado (Motor 1KD/2KD)",
        ano: "2005 - 2019",
        anoInicio: 2005,
        anoFim: 2019,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "AC-TY-10S17C",
        imagem: "img/pecas/compressor-ar-condicionado-toyota.webp",
        descricaoCurta: "Compressor de AC com embraiagem magnética para refrigeração gelada no verão de Moçambique.",
        descricaoDetalhada: "Modelo Denso 10S17C testado a gás R134a sob alta pressão. Baixo ruído de funcionamento e acoplamento suave sem roubar potência ao motor.",
        especificacoes: [
            { rotulo: "Gás Refrigerante", valor: "R134a ecológico" },
            { rotulo: "Polia", valor: "7PK com rolamento blindado" },
            { rotulo: "Voltagem", valor: "12V" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 20,
        nome: "Radiador de Água em Alumínio Brasado Tropicalizado",
        categoria: "Arrefecimento e AC",
        marca: "Isuzu",
        modelos: "D-Max / KB300 / KB250",
        ano: "2007 - 2020",
        anoInicio: 2007,
        anoFim: 2020,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "RAD-ISZ-DMAX30",
        imagem: "img/pecas/radiador-agua-aluminio-isuzu.webp",
        descricaoCurta: "Radiador com colmeia de alta dissipação para evitar aquecimentos em trânsito e carga pesada.",
        descricaoDetalhada: "Tubos de alumínio com aletas reforçadas e caixas plásticas termo-resistentes. Conexões para tubagens de caixa automática integradas.",
        especificacoes: [
            { rotulo: "Material", valor: "Alumínio Brasado" },
            { rotulo: "Caixa", valor: "Manual e Automática" },
            { rotulo: "Pressão de Teste", valor: "2.5 bar" },
            { rotulo: "Garantia", valor: "12 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },
    {
        id: 21,
        nome: "Eletroventilador Duplo do Radiador com Termostato",
        categoria: "Arrefecimento e AC",
        marca: "Nissan",
        modelos: "Hardbody / Navara / X-Trail",
        ano: "2008 - 2021",
        anoInicio: 2008,
        anoFim: 2021,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "VEN-NS-D22",
        imagem: "img/pecas/eletroventilador-duplo-radiador-nissan.webp",
        descricaoCurta: "Conjunto de ventoinhas com carcaça de arrefecimento rápido para o radiador e condensador.",
        descricaoDetalhada: "Motor selado elétrico de baixo consumo com pás curvadas aerodinâmicas para máximo fluxo de ar em marcha lenta.",
        especificacoes: [
            { rotulo: "Velocidades", valor: "2 Velocidades automáticas" },
            { rotulo: "Pás", valor: "Design silencioso em polipropileno" },
            { rotulo: "Alimentação", valor: "12V com relé integrado" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 7. FILTROS
    // ----------------------------------------------------------------------
    {
        id: 22,
        nome: "Kit de Revisão: Filtro de Óleo, Ar e Combustível",
        categoria: "Filtros",
        marca: "Toyota",
        modelos: "Hilux D-4D 2.5 e 3.0 / Fortuner / Prado",
        ano: "2005 - 2020",
        anoInicio: 2005,
        anoFim: 2020,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "KIT-FLT-TY03",
        imagem: "img/pecas/placeholder.webp",
        descricaoCurta: "Conjunto completo de filtros de alta retenção para proteção do motor e bomba injetora.",
        descricaoDetalhada: "Papel de celulose microporosa com densidade graduada. Retém 99.8% de fuligem, partículas metálicas e água presente no combustível.",
        especificacoes: [
            { rotulo: "Itens Incluídos", valor: "Filtro Óleo + Filtro Ar + Filtro Gasóleo" },
            { rotulo: "Retenção", valor: "Partículas até 5 microns" },
            { rotulo: "Vedação", valor: "Juntas de silicone incluídas" },
            { rotulo: "Aplicação", valor: "Revisão regular (5.000 / 10.000 km)" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 23,
        nome: "Filtro de Combustível Diesel com Separador de Água",
        categoria: "Filtros",
        marca: "Isuzu",
        modelos: "D-Max / KB300 / KB250 Diesel",
        ano: "2010 - 2022",
        anoInicio: 2010,
        anoFim: 2022,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "FLT-ISZ-DSW",
        imagem: "img/pecas/filtro-combustivel-diesel-isuzu.webp",
        descricaoCurta: "Filtro de gasóleo blindado com rosca para sensor de água no fundo do copo.",
        descricaoDetalhada: "Essencial para proteger bicos injetores sensíveis contra água e sedimentos comuns em depósitos de abastecimento.",
        especificacoes: [
            { rotulo: "Meio Filtrante", valor: "Multicamadas hidrofóbicas" },
            { rotulo: "Dreno", valor: "Válvula de purga manual" },
            { rotulo: "Sensor", valor: "Entrada roscada para boia original" },
            { rotulo: "Garantia", valor: "Fabrico Standard OE" }
        ],
        emDestaque: false,
        novidade: false
    },
    {
        id: 24,
        nome: "Filtro de Ar de Habitáculo / AC de Carvão Ativado",
        categoria: "Filtros",
        marca: "Universal",
        modelos: "Várias viaturas ligeiras, pick-ups e carrinhas escolares",
        ano: "2008 - 2024",
        anoInicio: 2008,
        anoFim: 2024,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "FLT-HAB-CRV",
        imagem: "img/pecas/filtro-ar-habitaculo-carvao.webp",
        descricaoCurta: "Filtro antipólen e antipoeira com carvão ativado que neutraliza odores e fumos do trânsito.",
        descricaoDetalhada: "Mantém o ar interior da viatura puro e respirável, essencial para o bem-estar de crianças no transporte escolar e condutores alérgicos.",
        especificacoes: [
            { rotulo: "Camada", valor: "Carvão Ativado de Alta Absorção" },
            { rotulo: "Proteção", valor: "Poeira fina, bactérias e odores" },
            { rotulo: "Substituição", valor: "Fácil encaixe sem ferramentas" },
            { rotulo: "Recomendação", valor: "Troca anual ou a cada 15.000 km" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 8. ÓLEOS E LUBRIFICANTES
    // ----------------------------------------------------------------------
    {
        id: 25,
        nome: "Óleo de Motor 100% Sintético 5W-30 / 10W-40 (5L)",
        categoria: "Óleos e Lubrificantes",
        marca: "Universal",
        modelos: "Indicado para Motores a Gasóleo Turbo e Gasolina",
        ano: "Universal",
        anoInicio: 2000,
        anoFim: 2025,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "LUB-SYN-5W30",
        imagem: "img/pecas/oleo-motor-sintetico-5w30.webp",
        descricaoCurta: "Lubrificante de alta tecnologia que protege o motor contra desgaste em temperaturas extremas.",
        descricaoDetalhada: "Pacote avançado de aditivos detergentes e dispersantes que mantêm os pistões limpos e reduzem o atrito no arranque a frio.",
        especificacoes: [
            { rotulo: "Viscosidade", valor: "5W-30 / 10W-40" },
            { rotulo: "Normas", valor: "API SN/CF • ACEA C3/A3/B4" },
            { rotulo: "Volume", valor: "Galão de 5 Litros lacrado" },
            { rotulo: "Origem", valor: "Importação Certificada" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 26,
        nome: "Fluido para Transmissão Automática e Direção ATF",
        categoria: "Óleos e Lubrificantes",
        marca: "Universal",
        modelos: "Toyota, Nissan, Mitsubishi, Isuzu, Ford e Hyundai",
        ano: "Universal",
        anoInicio: 2000,
        anoFim: 2025,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "LUB-ATF-WS1L",
        imagem: "img/pecas/fluido-transmissao-automatica-atf.webp",
        descricaoCurta: "Fluido sintético para caixas automáticas e sistemas de direção hidráulica assistida.",
        descricaoDetalhada: "Estabilidade térmica superior contra oxidação. Evita solavancos nas trocas de caixa e lubrifica a bomba de direção sem chiar.",
        especificacoes: [
            { rotulo: "Especificação", valor: "Dexron VI / Toyota ATF WS / Mercon LV" },
            { rotulo: "Aplicação", valor: "Caixa Automática e Direção Hidráulica" },
            { rotulo: "Volume", valor: "Embalagem de 1L ou 4L" },
            { rotulo: "Anti-Espuma", valor: "Aditivação especial" }
        ],
        emDestaque: false,
        novidade: false
    },
    {
        id: 27,
        nome: "Valvolina de Alta Pressão para Diferencial 80W-90 / 85W-140",
        categoria: "Óleos e Lubrificantes",
        marca: "Universal",
        modelos: "Diferenciais dianteiros e traseiros, caixas de transferência 4x4",
        ano: "Universal",
        anoInicio: 2000,
        anoFim: 2025,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "LUB-GL5-80W90",
        imagem: "img/pecas/valvolina-diferencial-80w90.webp",
        descricaoCurta: "Óleo para engrenagens hipoides de diferenciais sob esforço extremo e reboque.",
        descricaoDetalhada: "Aditivos EP (Extrema Pressão) com proteção contra soldaduras por atrito e desgaste de dentes de coroa e pinhão.",
        especificacoes: [
            { rotulo: "Grau API", valor: "GL-5 com modificador de atrito (LSD)" },
            { rotulo: "Viscosidade", valor: "80W-90 / 85W-140" },
            { rotulo: "Volume", valor: "Embalagem de 5 Litros" },
            { rotulo: "Proteção", valor: "Anti-corrosão e anti-ferrugem" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 9. CARROÇARIA E ILUMINAÇÃO
    // ----------------------------------------------------------------------
    {
        id: 28,
        nome: "Par de Farolins Traseiros LED de Alta Intensidade",
        categoria: "Carroçaria e Iluminação",
        marca: "Toyota",
        modelos: "Hilux Revo / Rocco / GR-Sport",
        ano: "2016 - 2023",
        anoInicio: 2016,
        anoFim: 2023,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "FAR-TY-REVOLED",
        imagem: "img/pecas/farolins-traseiros-led-toyota.webp",
        descricaoCurta: "Farolins traseiros fumados com iluminação contínua LED e sinalizadores dinâmicos.",
        descricaoDetalhada: "Lente em policarbonato com proteção UV contra amarelecimento solar. Plug & play sem necessidade de cortes na cablagem original.",
        especificacoes: [
            { rotulo: "Iluminação", valor: "LED de Longa Vida Útil" },
            { rotulo: "Design", valor: "Black Edition com piscas dinâmicos" },
            { rotulo: "Estanqueidade", valor: "Norma IP67 à prova de água" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 29,
        nome: "Par de Faróis Dianteiros com Projetor e DRL LED",
        categoria: "Carroçaria e Iluminação",
        marca: "Nissan",
        modelos: "Navara NP300 / Hardbody D23",
        ano: "2015 - 2022",
        anoInicio: 2015,
        anoFim: 2022,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "FRO-NS-NP300",
        imagem: "img/pecas/farois-dianteiros-led-nissan.webp",
        descricaoCurta: "Óticas dianteiras de alta nitidez com projetores focados para condução noturna segura.",
        descricaoDetalhada: "Foco perfeito que não encandeia veículos em sentido contrário e amplia o campo visual na berma de estradas sem iluminação pública.",
        especificacoes: [
            { rotulo: "Lente", valor: "Policarbonato anti-risco" },
            { rotulo: "DRL", valor: "Luz Diurna LED Integrada" },
            { rotulo: "Ajuste", valor: "Regulador elétrico de altura" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },
    {
        id: 30,
        nome: "Espelhos Retrovisores Elétricos Cromados com Pisca",
        categoria: "Carroçaria e Iluminação",
        marca: "Toyota",
        modelos: "Hilux Vigo / Fortuner",
        ano: "2008 - 2015",
        anoInicio: 2008,
        anoFim: 2015,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "RET-TY-VGCRM",
        imagem: "img/pecas/espelhos-retrovisores-eletricos-toyota.webp",
        descricaoCurta: "Retrovisores rebatíveis eletricamente com capa cromada espelhada e piscas LED.",
        descricaoDetalhada: "Espelho convexo anti-reflexo com amplo ângulo de visão para eliminar ângulos mortos em manobras e trânsito intenso.",
        especificacoes: [
            { rotulo: "Comando", valor: "Regulação Elétrica e Pisca LED" },
            { rotulo: "Acabamento", valor: "Cromado Brilhante Tripla Camada" },
            { rotulo: "Montagem", valor: "Encaixe direto na porta" },
            { rotulo: "Garantia", valor: "6 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 10. PNEUS E JANTES
    // ----------------------------------------------------------------------
    {
        id: 31,
        nome: "Jantes de Liga Leve Reforçadas 16\" e 17\" Off-Road",
        categoria: "Pneus e Jantes",
        marca: "Universal",
        modelos: "Toyota Hilux, Nissan Hardbody, Isuzu D-Max, Ford Ranger (6 Furos)",
        ano: "Universal",
        anoInicio: 2000,
        anoFim: 2025,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "JNT-OR-17X85",
        imagem: "img/pecas/jantes-liga-leve-offroad.webp",
        descricaoCurta: "Jantes em liga de alumínio fundido sob baixa pressão com acabamento preto mate texturado.",
        descricaoDetalhada: "Carga nominal de 1.150 kg por jante para suportar impactos de pedra, areia e piso severo. Furação padrão 6x139.7 comum às principais pick-ups em circulação.",
        especificacoes: [
            { rotulo: "Furação (PCD)", valor: "6 x 139.7 mm" },
            { rotulo: "Tamanhos", valor: "16x8 ou 17x8.5 polegadas" },
            { rotulo: "Offset (ET)", valor: "+0 a +20" },
            { rotulo: "Garantia", valor: "12 Meses Estrutural" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 32,
        nome: "Kit de Porcas de Roda Reforçadas com Chave Segredo",
        categoria: "Pneus e Jantes",
        marca: "Universal",
        modelos: "Conjunto para 4 rodas em pick-ups e jipes",
        ano: "Universal",
        anoInicio: 2000,
        anoFim: 2025,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "POR-SEG-M12",
        imagem: "img/pecas/porcas-roda-chave-segredo.webp",
        descricaoCurta: "Porcas cromadas de alta resistência mecânica com chave codificada contra furto de jantes.",
        descricaoDetalhada: "Fabricadas em aço carbono grau 10.9 tratado contra torção. Protege as suas jantes e pneus em estacionamentos públicos e viagens.",
        especificacoes: [
            { rotulo: "Passo de Rosca", valor: "M12x1.5 / M12x1.25" },
            { rotulo: "Quantidade", valor: "20 a 24 Porcas + Chave Mestra" },
            { rotulo: "Tratamento", valor: "Cromagem anti-corrosão salina" },
            { rotulo: "Segurança", valor: "Código único de chaveiro" }
        ],
        emDestaque: false,
        novidade: false
    },

    // ----------------------------------------------------------------------
    // 11. ACESSÓRIOS E INTERIOR
    // ----------------------------------------------------------------------
    {
        id: 33,
        nome: "Snorkel Automóvel para Vadeamento e Captação de Ar Limpo",
        categoria: "Acessórios e Interior",
        marca: "Toyota",
        modelos: "Hilux D-4D / Revo / Land Cruiser Prado",
        ano: "2006 - 2023",
        anoInicio: 2006,
        anoFim: 2023,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "SNK-TY-HLX44",
        imagem: "img/pecas/placeholder.webp",
        descricaoCurta: "Snorkel em polietileno linear resistente aos raios solares para travessia de água e estradas de areia.",
        descricaoDetalhada: "Eleva o ponto de aspiração de ar do motor para a linha do tejadilho, reduzindo a entrada de poeira e prevenindo calços hidráulicos fatais ao atravessar rios ou poças profundas.",
        especificacoes: [
            { rotulo: "Material", valor: "Polietileno LLDPE Virgem UV+" },
            { rotulo: "Kit", valor: "Gabarito de furação, tubagens e abraçadeiras" },
            { rotulo: "Cabeça", valor: "Entrada tipo Air-Ram orientável" },
            { rotulo: "Garantia", valor: "12 Meses" }
        ],
        emDestaque: true,
        novidade: true
    },
    {
        id: 34,
        nome: "Jogo de Barras Transversais de Tejadilho em Alumínio",
        categoria: "Acessórios e Interior",
        marca: "Universal",
        modelos: "Adaptável para viaturas com barras longitudinais ou calhas",
        ano: "Universal",
        anoInicio: 2005,
        anoFim: 2024,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "BAR-TEJ-AL120",
        imagem: "img/pecas/barras-transversais-tejadilho-aluminio.webp",
        descricaoCurta: "Barras de tejadilho aerodinâmicas com chave de segurança para bagageiras e cargas.",
        descricaoDetalhada: "Perfil em asa de avião de baixo ruído aerodinâmico. Suporta montagem de malas de tejadilho, escadas ou grades de expedição.",
        especificacoes: [
            { rotulo: "Comprimento", valor: "120 cm a 135 cm ajustável" },
            { rotulo: "Carga Máxima", valor: "85 kg distribuídos" },
            { rotulo: "Segurança", valor: "Fechadura com chave antifurto" },
            { rotulo: "Garantia", valor: "12 Meses" }
        ],
        emDestaque: false,
        novidade: false
    },
    {
        id: 35,
        nome: "Jogo de Palhetas Limpa-Vidros Silicone Premium",
        categoria: "Acessórios e Interior",
        marca: "Universal",
        modelos: "Todas as marcas e modelos (conjunto dianteiro)",
        ano: "Universal",
        anoInicio: 2000,
        anoFim: 2025,
        preco: "Entrar em Contacto",
        estado: "Nova",
        disponibilidade: "Em stock",
        referencia: "PAL-SIL-PRM",
        imagem: "img/pecas/palhetas-limpa-vidros-silicone.webp",
        descricaoCurta: "Escovas flexíveis sem armação metálica com lâmina de silicone de varrimento silencioso.",
        descricaoDetalhada: "Limpeza cristalina sem riscar o vidro nem chiar sob chuva intensa. Inclui adaptadores múltiplos compatíveis com 98% dos braços de limpa-vidros.",
        especificacoes: [
            { rotulo: "Material da Lâmina", valor: "Silicone com revestimento de grafite" },
            { rotulo: "Durabilidade", valor: "2x superior à borracha vulgar" },
            { rotulo: "Encaixes", valor: "Gancho (U-Hook) e Engate Rápido" },
            { rotulo: "Aplicação", valor: "Dianteira (Par 20\"/22\"/24\")" }
        ],
        emDestaque: false,
        novidade: false
    }
];

/* ==========================================================================
   FALLBACK: Placeholder para imagens em falta
   Se a imagem de uma peça não existir, mostra uma imagem neutra em vez de
   um ícone quebrado. Basta colocar um ficheiro "placeholder.webp" em img/pecas/.
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.grid-loja-produtos img, .grid-catalogo-produtos img').forEach(img => {
        img.addEventListener('error', function() {
            if (!this.dataset.fallback) {
                this.dataset.fallback = 'true';
                this.src = 'img/pecas/placeholder.webp';
            }
        });
    });
});
