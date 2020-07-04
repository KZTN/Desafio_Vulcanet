export enum CartActions {
  CHOOSE_PLAN = "@cart/CHOOSE_PLAN",
  CHANGE_PLAN_TYPE = "@cart/CHANGE_PLAN_TYPE",
  CONFIRM_PURCHASE = "@cart/CONFIRM_PURCHASE",

  UPDATE_ATTENDANTS = "@cart/UPDATE_ATTENDANTS",
}
export interface Prices {
  readonly monthly: number;
  readonly yearly: number;
}
export interface Plan {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly prices: Prices;
  readonly features: string[];
}

export interface CartState {
  readonly plan: Plan;
  readonly type: String;
  readonly attendants: number;
  readonly subtotal: number;
  readonly total: number;
}
