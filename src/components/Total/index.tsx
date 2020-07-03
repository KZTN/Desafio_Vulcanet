import React from "react";

import "./styles.scss";

const Total: React.FC = () => {
  return (
    <section id="total">
      <div className="left-content">
        <span>Total: R$150/mês</span>
        <p>Plano selecionado: Plano 1.0 - Mensal</p>
      </div>
      <div className="right-content">
        <button>Contratar</button>
      </div>
    </section>
  );
};

export default Total;
