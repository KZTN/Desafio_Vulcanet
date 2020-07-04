import React from "react";
import ChatIcon from "../../assets/chat.svg";
import CheckIcon from "../../assets/check.svg";
import { ApplicationState } from "../../store";
import { useSelector } from "react-redux";
import "./styles.scss";
import { formatPrice } from "../../util/FormatPrice";

type Prices = {
  monthly: number;
  yearly: number;
};

type Plan_TYPE = {
  id: number;
  name: string;
  description: string;
  prices: Prices;
  features: string[];
  type: string;
};

function handleSelectPlan(): void {}

const Plan = ({ name, description, id, features, prices, type }: Plan_TYPE) => {
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
        <strong>
          {type === "monthly"
            ? formatPrice(prices.monthly)
            : formatPrice(prices.yearly)}
          /mês
        </strong>
      </div>
      <button
        className={selectedPlan === id ? "selected" : ""}
        onClick={() => handleSelectPlan()}
      >
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
