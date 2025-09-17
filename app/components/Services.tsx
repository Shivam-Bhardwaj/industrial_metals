import { services } from "../data";

export function Services() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <span className="tag">Core Capabilities</span>
          <h2>Metals, Cutting, and Recycling Under One Roof</h2>
          <p>
            Our experienced team supports urgent prototypes and long-term supply agreements with the same attention to detail.
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {services.map((service) => (
            <div className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul style={{ marginTop: 16, paddingLeft: 20, color: "var(--color-muted)", display: "grid", gap: 8 }}>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
