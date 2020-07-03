export enum PlansActions {
  LOAD_REQUEST = "@plan/LOAD_REQUEST",
  LOAD_SUCCESS = "@plan/LOAD_SUCCESS",
  UPDATE_ATTENDANTS = "@plan/UPDATE_ATTENDANTS",
  LOAD_FAILURE = "@plan/LOAD_FAILURE",
}

export interface PlanState {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly type: String;
  readonly features: string[];
  readonly attendants: number;
  readonly total: number;
}
