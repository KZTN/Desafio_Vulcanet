import React from "react";
import { ApplicationState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import * as PlanActions from "../../store/modules/Plan/actions";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles.scss";
const Attendant: React.FC = () => {
  const dispatch = useDispatch();
  const attendants = useSelector(
    (state: ApplicationState) => state.plan.attendants
  );
  function handleAttendants(amount: number, value: number) {
    dispatch(PlanActions.UpdateAttendants(amount, value));
  }
  return (
    <section id="attendant">
      <div className="left-content">
        <span>Atendentes</span>
        <p>+R$130/mês por atendente</p>
      </div>
      <div className="right-content">
        <button onClick={() => handleAttendants(attendants - 1, 130)}>
          <FaChevronLeft size={18} color="#00a6ce" />
        </button>
        <span>{attendants}</span>
        <button onClick={() => handleAttendants(attendants + 1, 130)}>
          <FaChevronRight size={18} color="#00a6ce" />
        </button>
      </div>
    </section>
  );
};

export default Attendant;
