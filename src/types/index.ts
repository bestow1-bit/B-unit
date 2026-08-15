export type PageType = 'home' | 'parts' | 'transport';

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  availability: 'Em Estoque' | 'Sob Consulta' | 'Especial';
  isRealUploaded?: boolean;
}

export interface ShiftInfo {
  id: 'morning' | 'afternoon';
  title: string;
  timeRange: string;
  capacity: string;
  status: 'TURNO ATUALMENTE PREENCHIDO';
  highlightColor: string;
}

export interface SafetyCardItem {
  title: string;
  description: string;
  iconName: string;
}

export interface TransportForm {
  name: string;
  phone: string;
  school: string;
  shift: string;
  message: string;
  honeypot?: string;
}
