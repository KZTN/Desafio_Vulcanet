import React from "react";
import "./styles.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Attendant: React.FC = () => {
  return (
    <section id="attendant">
      <div className="left-content">
        <span>Atendentes</span>
        <p>+R$130/mês por atendente</p>
      </div>
      <div className="right-content">
        <button>
          <FaChevronLeft size={18} color="#00a6ce" />
        </button>
        <span>0</span>
        <button>
          <FaChevronRight size={18} color="#00a6ce" />
        </button>
      </div>
    </section>
  );
};

export default Attendant;
