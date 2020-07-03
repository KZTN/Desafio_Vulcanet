export interface Prices {
  monthly: number;
  yearly: number;
}

export interface Plan_TYPE {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly prices: Prices;
  readonly features: string[];
}
