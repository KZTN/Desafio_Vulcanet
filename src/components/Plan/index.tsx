import React from "react";
import ChatIcon from "../../assets/chat.svg";
import CheckIcon from "../../assets/check.svg";

import "./styles.scss";
import { formatPrice } from "../../util/FormatPrice";
type Props = {
  description: string;
  name: string;
  features: string[];
  price: number;
};

const Plan = ({ description, name, features, price }: Props) => {
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
      <button>Selecionar</button>
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
