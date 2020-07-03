import React, { useEffect, useState } from "react";
import Plan from "../../components/Plan";
import Attendant from "../../components/Attendant";
import Total from "../../components/Total";

import * as PlanActions from "../../store/modules/Plan/actions";

import api from "../../services/api";
import { AxiosResponse, AxiosError } from "axios";
import { Plan_TYPE } from "./types";
import "./styles.scss";

import { useDispatch } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState<Plan_TYPE[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getData(): Promise<void> {
      await api
        .get("/plans")
        .then((response: AxiosResponse) => {
          setPlans(response.data);
          dispatch(PlanActions.LoadRequest(2, "montly"));
          setLoading(false);
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
    getData();
  }, [dispatch]);
  return (
    <main id="dashboard">
      <div className="dashboard-actions">
        <button className="active">Mensal</button>
        <button>Anual</button>
      </div>
      <section id="plans">
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            description={plan.description}
            name={plan.name}
            features={plan.features}
            price={plan.prices.monthly}
          />
        ))}
      </section>
      <Attendant />
      <Total />
    </main>
  );
}
