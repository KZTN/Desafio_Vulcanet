import React from "react";
import { ApplicationState } from "../../store";
import { useSelector } from "react-redux";
import { formatPrice } from "../../util/FormatPrice";
import "./styles.scss";

const Total: React.FC = () => {
  const planResume = useSelector((state: ApplicationState) => state.cart);
  return (
    <section id="total">
      <div className="left-content">
        <span>Total: {formatPrice(planResume.total)}/mês</span>
        <p>Plano selecionado: {planResume.plan.name}</p>
      </div>
      <div className="right-content">
        <button>Contratar</button>
      </div>
    </section>
  );
};

export default Total;
