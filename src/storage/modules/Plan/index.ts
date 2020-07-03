import { Reducer } from "redux";
import { PlanState, PlansActions } from "./types";

const INITIAL_STATE: PlanState = {
  id: -1,
  description: "",
  name: "",
  prices: { monthly: 0, yearly: 0 },
  features: [],
};

const reducer: Reducer<PlanState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlansActions.LOAD_SUCCESS:
      return { ...state };
    case PlansActions.LOAD_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
