import React from "react";
import Router from "./routes";

import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
