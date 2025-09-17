import { stats } from "../data";

export function Stats() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <span className="tag">Performance You Can Count On</span>
          <h2>Production-Ready Metals with Responsive Service</h2>
          <p>
            We combine deep inventory with precision processing and documentation so your teams can move from concept to
            production without delays.
          </p>
        </div>
        <div className="stat-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
