export enum PlansActions {
  LOAD_REQUEST = "@plan/LOAD_REQUEST",
  LOAD_SUCCESS = "@plan/LOAD_SUCCESS",
  LOAD_FAILURE = "@plan/LOAD_FAILURE",
}

export interface Prices {
  monthly: number;
  yearly: number;
}

export interface PlanState {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly prices: Prices;
  readonly features: string[];
}
