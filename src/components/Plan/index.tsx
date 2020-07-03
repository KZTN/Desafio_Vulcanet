import React from "react";
import ChatIcon from "../../assets/chat.svg";
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
        <img src={ChatIcon} alt="" /> <span>{name}</span>
      </header>
      <strong>{formatPrice(price)}</strong>
      <h2>{description}</h2>
      <div className="features">
        {features.map((feature) => (
          <span>{feature}</span>
        ))}
      </div>
    </div>
  );
};

export default Plan;
