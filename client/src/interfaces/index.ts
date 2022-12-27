export interface ordersAttributes {
  id: number;
  orderNfId: string;
  orderNumber: string;
  orderPath?: string;
  orderFileName?: string;
  orderOriginalName?: string;
  emissionDate: string;
  pdfFile?: string;
  emitedTo: string;
  nNf?: string;
  CTE?: string;
  value: string;
  cnpj?: cnpjsAttributes;
  user?: usersAttributes;
  buyer?: buyersAttributes;
  provider?: providersAttributes;
  orderStatusBuyer: string;
  orderStatusProvider?: string;
  deliveryReceipt?: string;
  cargoPackingList?: string;
  deliveryCtrc?: string;
}

export interface cnpjsAttributes {
  id: number;
  cnpj: string;
  companyType: string;
}

export interface usersAttributes {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string;
  mobile?: string;
  departament?: string;
  verificationCode?: string;
  emailChecked?: number;
  cashforceAdm?: number;
}

export interface buyersAttributes {
  id: number;
  name: string;
  tradingName?: string;
  cashforceTax?: string;
  responsibleName?: string;
  responsibleEmail?: string;
  responsiblePosition?: string;
  responsiblePhone?: string;
  responsibleMobile?: string;
  website?: string;
  postalCode?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  cnpjId?: number;
  confirm?: number;
  email?: string;
}

export interface providersAttributes {
  id: number;
  name: string;
  tradingName?: string;
  cashforceTax?: string;
  responsibleName?: string;
  responsibleEmail?: string;
  responsiblePosition?: string;
  responsiblePhone?: string;
  responsibleMobile?: string;
  website?: string;
  postalCode?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  bank?: string;
  bankAgency?: string;
  account?: string;
  documents?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  cnpjId?: number;
  email?: string;
}
