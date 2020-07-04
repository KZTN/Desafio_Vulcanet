import React from "react";
import { ApplicationState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "../../util/FormatPrice";
import * as PlanActions from "../../store/modules/Cart/actions";
import "./styles.scss";

const Resume: React.FC = () => {
  const dispatch = useDispatch();
  function handleConfirm() {
    dispatch(PlanActions.ConfirmPurchase());
  }
  const planResume = useSelector((state: ApplicationState) => state.cart);
  return (
    <section id="total">
      <div className="left-content">
        <span>Total: {formatPrice(planResume.total)}/mês</span>
        <p>
          Plano selecionado: {planResume.plan.name} -{" "}
          {planResume.type === "monthly" ? "Mensal" : "Anual"}
        </p>
      </div>
      <div className="right-content">
        <button onClick={handleConfirm}>Contratar</button>
      </div>
    </section>
  );
};

export default Resume;
