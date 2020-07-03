import { createStore, Store } from "redux";
import { CartState } from "./modules/Cart/types";
import rootReducer from "./modules/rootReducer";

export interface ApplicationState {
  cart: CartState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
