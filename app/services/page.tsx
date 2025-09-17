import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../data";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tag">Precision Metal Processing</span>
          <h1>Cut, Prepare, and Deliver Metal the Way You Need It</h1>
          <p>
            We support prototype and production programs with rapid saw cutting, material staging, and documentation tailored to
            aerospace, semiconductor, robotics, and fabrication teams.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Schedule a Cutting Job
            </Link>
            <Link href="/resources/saw-cutting-tolerances" className="btn btn-secondary">
              View Tolerance Guide
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
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
      <section>
        <div className="container">
          <div className="gradient-card" style={{ padding: 48 }}>
            <h2 style={{ marginTop: 0 }}>Saw Cutting Capabilities</h2>
            <ul style={{ marginTop: 12, paddingLeft: 20, color: "var(--color-muted)", display: "grid", gap: 8 }}>
              <li>Plate saws with 60\" x 144\" tables and 12\" thickness capacity</li>
              <li>Automatic feed saws for bundle cutting and production runs</li>
              <li>Angle, miter, and contour cutting to meet print specifications</li>
              <li>Deburring, packaging, and part identification services available</li>
            </ul>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 24, width: "fit-content" }}>
              Discuss Your Cut List
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
