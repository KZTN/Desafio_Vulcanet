import React from "react";

import "./styles.scss";

type Props = {
  description: string;
  name: string;
  features: string[];
  price: number;
};

const Plan = ({ description, name, features, price }: Props) => {
  return (
    <div className="plan">
      <h1>{name}</h1>
      <strong>{price}</strong>
      <h2>{description}</h2>
      <h3>{features}</h3>
    </div>
  );
};

export default Plan;
