import React from "react";
import Router from "./routes";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import store from "./store";

import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
        <ToastContainer autoClose={3000} />
      </Provider>
    </div>
  );
};

export default App;
