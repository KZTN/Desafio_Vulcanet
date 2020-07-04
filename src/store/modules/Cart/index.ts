import { Reducer } from "redux";
import { CartState, CartActions } from "./types";
import { toast } from "react-toastify";

const INITIAL_STATE: CartState = {
  plan: {
    description: "",
    features: [],
    id: -1,
    name: "",
    prices: {
      monthly: 0,
      yearly: 0,
    },
  },
  type: "",
  attendants: 0,
  subtotal: 0,
  total: 0,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActions.CHOOSE_PLAN: {
      if (action.payload.type === "monthly") {
        return {
          ...state,
          plan: action.payload.data,
          type: action.payload.type,
          total: action.payload.data.prices.monthly + state.subtotal,
        };
      } else {
        return {
          ...state,
          plan: action.payload.data,
          type: action.payload.type,
          total: action.payload.data.prices.yearly + state.subtotal,
        };
      }
    }

    case CartActions.UPDATE_ATTENDANTS: {
      if (action.payload.amount < 0) {
        toast.warn("Valor mínimo é 0", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return state;
      } else {
        if (state.type === "monthly") {
          return {
            ...state,
            subtotal: action.payload.amount * action.payload.cost,
            total:
              state.plan.prices.monthly +
              action.payload.amount * action.payload.cost,
            attendants: action.payload.amount,
          };
        } else {
          return {
            ...state,
            subtotal: action.payload.amount * action.payload.cost,
            total:
              state.plan.prices.yearly +
              action.payload.amount * action.payload.cost,
            attendants: action.payload.amount,
          };
        }
      }
    }
    case CartActions.CHANGE_PLAN_TYPE: {
      if (action.payload === "monthly") {
        return {
          ...state,
          type: action.payload,
          total: state.plan.prices.monthly + state.subtotal,
        };
      } else {
        return {
          ...state,
          type: action.payload,
          total: state.plan.prices.yearly + state.subtotal,
        };
      }
    }
    case CartActions.CONFIRM_PURCHASE:
      toast("Compra efetuada com sucesso!", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return state;
    default:
      return state;
  }
};

export default reducer;
