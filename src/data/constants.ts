import { Product, ShiftInfo, SafetyCardItem } from '../types';

export const OFFICIAL_LOGO_URL = 'file:///C:/Users/kioskUser0/.gemini/antigravity/brain/f17e1770-7555-47e6-aa26-82af2d93a5c8/.user_uploaded/media__1786566849447.png';

export const OWNER_PHOTO_URL = 'file:///C:/Users/kioskUser0/.gemini/antigravity/brain/f17e1770-7555-47e6-aa26-82af2d93a5c8/.user_uploaded/media__1786567722216.jpg';

// Exact Tagline Provided: TVP — Transporte e Vendas de Peças
export const BRAND_TAGLINE = 'TVP — Transporte e Vendas de Peças';

export const OFFICIAL_PHONE_RAW = '258866211120';
export const OFFICIAL_PHONE_DISPLAY = '+258 86 621 1120';
export const OFFICIAL_WHATSAPP_URL = `https://wa.me/${OFFICIAL_PHONE_RAW}`;

// 22 Categories exactly as specified in section 17
export const AUTO_PARTS_CATEGORIES = [
  'Todas as Categorias',
  'Motor',
  'Travagem',
  'Suspensão',
  'Direção',
  'Embraiagem',
  'Caixa de velocidades',
  'Sistema elétrico',
  'Arrefecimento',
  'Escape',
  'Combustível',
  'Ar condicionado',
  'Filtros',
  'Baterias',
  'Pneus',
  'Jantes',
  'Iluminação',
  'Carroçaria',
  'Interior',
  'Acessórios',
  'Lubrificantes',
  'Ferramentas',
  'Outros'
] as const;

// Initial products provided by user uploaded images (No fake items, no prices)
export const INITIAL_USER_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Caixa de Velocidades / Transmissão Automóvel',
    category: 'Caixa de velocidades',
    image: 'file:///C:/Users/kioskUser0/.gemini/antigravity/brain/f17e1770-7555-47e6-aa26-82af2d93a5c8/.user_uploaded/media__1786566907412.jpg',
    description: 'Conjunto completo de transmissão automóvel em excelente estado de conservação mecânica.',
    availability: 'Sob Consulta',
    isRealUploaded: true
  },
  {
    id: 'prod-002',
    name: 'Caixa de Direção Hidráulica / Mecânica',
    category: 'Direção',
    image: 'file:///C:/Users/kioskUser0/.gemini/antigravity/brain/f17e1770-7555-47e6-aa26-82af2d93a5c8/.user_uploaded/media__1786566941704.jpg',
    description: 'Caixa de direção para substituição automóvel com elevado padrão de precisão e durabilidade.',
    availability: 'Em Estoque',
    isRealUploaded: true
  },
  {
    id: 'prod-003',
    name: 'Alternador de Corrente Automóvel',
    category: 'Sistema elétrico',
    image: 'file:///C:/Users/kioskUser0/.gemini/antigravity/brain/f17e1770-7555-47e6-aa26-82af2d93a5c8/.user_uploaded/media__1786566974412.jpg',
    description: 'Alternador elétrico de alta eficiência para sistema de carga de bateria e iluminação.',
    availability: 'Em Estoque',
    isRealUploaded: true
  },
  {
    id: 'prod-004',
    name: 'Motor de Arranque Automóvel',
    category: 'Sistema elétrico',
    image: 'file:///C:/Users/kioskUser0/.gemini/antigravity/brain/f17e1770-7555-47e6-aa26-82af2d93a5c8/.user_uploaded/media__1786566984125.jpg',
    description: 'Motor de arranque de elevada fiabilidade e arranque rápido para motores a gasolina e diesel.',
    availability: 'Em Estoque',
    isRealUploaded: true
  }
];

export const SCHOOL_NAME = 'Escola Arco-Íris';

export const SCHOOL_ZONES = ['Cumbeza', 'Marracuene'];

export const TRANSPORT_SHIFTS: ShiftInfo[] = [
  {
    id: 'morning',
    title: 'TURNO DA MANHÃ',
    timeRange: 'Aproximadamente 06:30 – 12:30',
    capacity: '20–23 crianças',
    status: 'TURNO ATUALMENTE PREENCHIDO',
    highlightColor: 'from-amber-500/20 to-amber-600/10 border-amber-500/40 text-amber-400'
  },
  {
    id: 'afternoon',
    title: 'TURNO DA TARDE',
    timeRange: 'Aproximadamente 12:30 – 17:30',
    capacity: '18–20 crianças',
    status: 'TURNO ATUALMENTE PREENCHIDO',
    highlightColor: 'from-sky-500/20 to-sky-600/10 border-sky-500/40 text-sky-400'
  }
];

export const SAFETY_CARDS: SafetyCardItem[] = [
  {
    title: 'SEGURANÇA',
    description: 'Prioridade durante cada viagem.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'ORGANIZAÇÃO',
    description: 'Percursos e lugares organizados.',
    iconName: 'LayoutGrid'
  },
  {
    title: 'PONTUALIDADE',
    description: 'Compromisso com os horários.',
    iconName: 'Clock'
  },
  {
    title: 'RESPONSABILIDADE',
    description: 'Um serviço pensado para proporcionar tranquilidade aos encarregados de educação.',
    iconName: 'HeartHandshake'
  }
];

export const OWNER_INFO = {
  name: 'Hilário Hernesto Come',
  title: 'Proprietário da B-Unit',
  photoUrl: OWNER_PHOTO_URL,
  bioParagraphs: [
    'Hilário Hernesto Come é o proprietário e responsável pela B-Unit, uma empresa individual dedicada à venda de peças e acessórios automóveis e ao serviço de transporte escolar.',
    'Com uma visão voltada para a qualidade do atendimento e a satisfação dos clientes, Hilário procura construir uma relação baseada em confiança, responsabilidade e proximidade.',
    'À frente da B-Unit, acompanha de perto as atividades da empresa e procura oferecer soluções adequadas às necessidades de cada cliente, contando também com o apoio de uma pequena equipa quando necessário.'
  ],
  quote: '“Na B-Unit, cada cliente é importante. O nosso compromisso é ouvir, ajudar e procurar a melhor solução.”'
};
