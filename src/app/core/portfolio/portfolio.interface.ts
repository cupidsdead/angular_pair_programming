export interface Portfolio {
  id: number;
  security_id: number;
  weight: number;
}

export interface ExtendedPortfolio extends Portfolio {
  security_name: string;
}