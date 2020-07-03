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
  console.log(action.payload);
  switch (action.type) {
    case PlansActions.LOAD_SUCCESS:
      return state;
    case PlansActions.UPDATE_ATTENDANTS: {
      if (action.payload.amount < 0) {
        return state;
      } else {
        return {
          ...state,
          total: state.price + action.payload.amount * action.payload.cost,
          attendants: action.payload.amount,
        };
      }
    }

    case PlansActions.LOAD_FAILURE:
      return state;
    default:
      return state;
  }
};

export default reducer;
