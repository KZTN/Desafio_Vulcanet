import React, { useEffect, useState } from "react";
import Plan from "../../components/Plan";
import Attendant from "../../components/Attendant";
import Resume from "../../components/Resume";
import Spinner from "../../components/Spinner";

import * as PlanActions from "../../store/modules/Cart/actions";

import api from "../../services/api";
import { AxiosResponse, AxiosError } from "axios";
import { Plan_TYPE } from "./types";
import "./styles.scss";

import { useDispatch } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState<Plan_TYPE[]>([]);
  const [plantype, setPlantype] = useState<string>("monthly");
  const [costattendant, setCostattendant] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getCostAttendantData(): Promise<void> {
      await api
        .get("/attendant")
        .then((response: AxiosResponse) => {
          setCostattendant(response.data.cost);
          setLoading(false);
        })

        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
    async function getPlansData(): Promise<void> {
      await api
        .get("/plans")
        .then((response: AxiosResponse) => {
          setPlans(response.data);
          getCostAttendantData();
          dispatch(PlanActions.ChoosePlan(response.data[1], "monthly"));
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
    getPlansData();
  }, [dispatch]);

  function handleChangeType(): void {
    if (plantype === "monthly") {
      setPlantype("yearly");
      dispatch(PlanActions.ChangePlanType("yearly"));
    } else {
      setPlantype("monthly");
      dispatch(PlanActions.ChangePlanType("monthly"));
    }
  }
  return (
    <main id="dashboard">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="dashboard-actions">
            <button
              className={plantype === "monthly" ? "active" : ""}
              onClick={handleChangeType}
            >
              Mensal
            </button>
            <button
              className={plantype === "yearly" ? "active" : ""}
              onClick={handleChangeType}
            >
              Anual
            </button>
          </div>
          <section id="plans">
            {plans.map((plan) => (
              <Plan
                key={plan.id}
                name={plan.name}
                description={plan.description}
                id={plan.id}
                features={plan.features}
                prices={plan.prices}
                type={plantype}
              />
            ))}
          </section>
          <Attendant cost={costattendant} />
          <Resume />
        </>
      )}
    </main>
  );
}
