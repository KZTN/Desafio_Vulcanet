import React from "react";
import ChatIcon from "../../assets/chat.svg";
import CheckIcon from "../../assets/check.svg";
import { ApplicationState } from "../../store";
import { useSelector } from "react-redux";
import "./styles.scss";
import { formatPrice } from "../../util/FormatPrice";
type Props = {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string[];
};

const Plan = ({ id, name, description, price, features }: Props) => {
  const selectedPlan = useSelector(
    (state: ApplicationState) => state.cart.plan.id
  );
  return (
    <div className="plan">
      <header>
        <div className="title">
          <img src={ChatIcon} alt="" /> <strong>{name}</strong>
        </div>
        <div className="description">
          <span>{description}</span>
        </div>
      </header>
      <div className="price">
        <strong>{formatPrice(price)}/mês</strong>
      </div>
      <button className={selectedPlan === id ? "selected" : ""}>
        Selecionar
      </button>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <img src={CheckIcon} alt="" /> <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plan;
