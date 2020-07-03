import React from "react";
import Plan from "../../components/Plan";

import "./styles.scss";

export default function Dashboard() {
  return (
    <main id="dashboard">
      <div className="dashboard-actions">
        <button className="active">Mensal</button>
        <button>Anual</button>
      </div>
      <section id="plans">
        <Plan />
      </section>
    </main>
  );
}
