import { createStore, Store } from "redux";
import { PlanState } from "./modules/Plan/types";
import rootReducer from "./modules/rootReducer";

export interface ApplicationState {
  plan: PlanState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
