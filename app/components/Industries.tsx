import Link from "next/link";
import { industries } from "../data";

export function Industries() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <span className="tag">Industries Served</span>
          <h2>Supporting Complex Manufacturing Across the West Coast</h2>
          <p>
            From aerospace flight hardware to semiconductor tooling, we stock metals that meet demanding specifications and
            delivery expectations.
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {industries.map((industry) => (
            <div key={industry.title} className="card">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
        <div className="hero-actions" style={{ marginTop: 48 }}>
          <Link href="/contact" className="btn btn-primary">
            Talk with an Industry Specialist
          </Link>
          <Link href="/resources" className="btn btn-secondary">
            Download Capability Statements
          </Link>
        </div>
      </div>
    </section>
  );
}
