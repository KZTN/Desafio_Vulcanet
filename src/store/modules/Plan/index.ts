import { Reducer } from "redux";
import { PlanState, PlansActions } from "./types";

const INITIAL_STATE: PlanState = {
  id: -1,
  attendants: 0,
  description: "",
  features: [],
  name: "",
  price: 0,
  total: 0,
  type: "",
};

const reducer: Reducer<PlanState> = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case PlansActions.LOAD_SUCCESS:
      return state;
    case PlansActions.LOAD_FAILURE:
      return state;
    default:
      return state;
  }
};

export default reducer;
