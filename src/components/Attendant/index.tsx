import React from "react";
import { ApplicationState } from "../../store";
import { useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles.scss";
const Attendant: React.FC = () => {
  const attendants = useSelector(
    (state: ApplicationState) => state.plan.attendants
  );
  function handleAttendants(attendants: number) {
    console.log(attendants);
  }
  return (
    <section id="attendant">
      <div className="left-content">
        <span>Atendentes</span>
        <p>+R$130/mês por atendente</p>
      </div>
      <div className="right-content">
        <button onClick={() => handleAttendants(attendants - 1)}>
          <FaChevronLeft size={18} color="#00a6ce" />
        </button>
        <span>{attendants}</span>
        <button onClick={() => handleAttendants(attendants + 1)}>
          <FaChevronRight size={18} color="#00a6ce" />
        </button>
      </div>
    </section>
  );
};

export default Attendant;
