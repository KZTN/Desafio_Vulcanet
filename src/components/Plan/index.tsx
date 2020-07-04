import React from "react";
import ChatIcon from "../../assets/chat.svg";
import CheckIcon from "../../assets/check.svg";
import { ApplicationState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";
import { formatPrice } from "../../util/FormatPrice";
import * as PlanActions from "../../store/modules/Cart/actions";

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

const Plan = ({ name, description, id, features, prices, type }: Plan_TYPE) => {
  const dispatch = useDispatch();
  const selectedPlan = useSelector(
    (state: ApplicationState) => state.cart.plan.id
  );

  function handleSelectPlan({
    name,
    description,
    id,
    features,
    prices,
    type,
  }: Plan_TYPE): void {
    dispatch(
      PlanActions.ChoosePlan({ name, description, id, features, prices }, type)
    );
  }

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
        onClick={() =>
          handleSelectPlan({ name, description, id, features, prices, type })
        }
      >
        Selecionar
      </button>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <img src={CheckIcon} alt="check" /> <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plan;
