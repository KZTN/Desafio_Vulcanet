import { Reducer } from "redux";
import { CartState, CartActions } from "./types";

const INITIAL_STATE: CartState = {
  plan: {
    description: "",
    features: [],
    id: -1,
    name: "",
    price: 0,
    type: "",
  },
  attendants: 0,
  total: 0,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case CartActions.CHOOSE_PLAN:
      return state;
    case CartActions.UPDATE_ATTENDANTS: {
      if (action.payload.amount < 0) {
        return state;
      } else {
        return {
          ...state,
          total: state.plan.price + action.payload.amount * action.payload.cost,
          attendants: action.payload.amount,
        };
      }
    }
    default:
      return state;
  }
};

export default reducer;
