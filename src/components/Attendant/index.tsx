import React from "react";
import { ApplicationState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "../../util/FormatPrice";
import * as PlanActions from "../../store/modules/Cart/actions";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles.scss";

type Props = {
  cost: number;
};

const Attendant = ({ cost = 0 }: Props) => {
  const dispatch = useDispatch();
  const attendants = useSelector(
    (state: ApplicationState) => state.cart.attendants
  );
  function handleAttendants(amount: number, cost: number) {
    dispatch(PlanActions.UpdateAttendants(amount, cost));
  }
  return (
    <section id="attendant">
      <div className="left-content">
        <span>Atendentes</span>
        <p>+{formatPrice(cost)}/mês por atendente</p>
      </div>
      <div className="right-content">
        <button onClick={() => handleAttendants(attendants - 1, cost)}>
          <FaChevronLeft size={18} color="#00a6ce" />
        </button>
        <span>{attendants}</span>
        <button onClick={() => handleAttendants(attendants + 1, cost)}>
          <FaChevronRight size={18} color="#00a6ce" />
        </button>
      </div>
    </section>
  );
};

export default Attendant;
