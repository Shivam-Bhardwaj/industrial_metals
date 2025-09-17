import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "../data";

export const metadata: Metadata = {
  title: "Resources"
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tag">Knowledge Base</span>
          <h1>Guides and Tools for Sourcing Industrial Metals</h1>
          <p>
            Download cut-ready calculators, alloy comparison charts, and recycling checklists created by our in-house metal
            specialists.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request a Consultation
            </Link>
            <Link href="#downloads" className="btn btn-secondary">
              Browse Downloads
            </Link>
          </div>
        </div>
      </section>
      <section id="downloads">
        <div className="container">
          <div className="resources-grid">
            {resources.map((resource) => (
              <div className="resource-card" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link href={resource.href}>Download →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="gradient-card" style={{ padding: 48 }}>
            <h2 style={{ marginTop: 0 }}>Custom Documentation Available</h2>
            <p style={{ color: "var(--color-muted)" }}>
              Need a specific certificate of conformance, heat treat record, or lot traceability file? Let us know and we&apos;ll
              compile the data you need for audits and quality reviews.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Ask About Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
