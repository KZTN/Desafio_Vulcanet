import React from "react";
import Router from "./routes";
import { Provider } from "react-redux";
import store from "./store";

import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
