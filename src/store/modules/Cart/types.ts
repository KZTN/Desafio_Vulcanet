export enum CartActions {
  CHOOSE_PLAN = "@cart/CHOOSE_PLAN",
  UPDATE_ATTENDANTS = "@cart/UPDATE_ATTENDANTS",
}

export interface Plan {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly type: String;
  readonly features: string[];
}

export interface CartState {
  readonly plan: Plan;
  readonly attendants: number;
  readonly total: number;
}
