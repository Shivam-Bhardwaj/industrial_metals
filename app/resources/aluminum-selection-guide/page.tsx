import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aluminum Selection Guide"
};

export default function AluminumSelectionGuidePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tag">Resource</span>
          <h1>Aluminum Selection Guide</h1>
          <p>
            Compare machinability, strength, and surface finish considerations for our most popular aluminum alloys. Use this
            guide when planning prototypes or production runs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Discuss Your Application
          </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="card">
            <h2 style={{ marginTop: 0 }}>What&apos;s Inside</h2>
            <ul style={{ marginTop: 16, paddingLeft: 20, color: "var(--color-muted)", display: "grid", gap: 8 }}>
              <li>Heat treat and temper options for 6061, 7075, 2024, and MIC-6</li>
              <li>Recommended applications for aerospace, robotics, and semiconductor tooling</li>
              <li>Saw cutting considerations and suggested tolerance callouts</li>
              <li>Surface finish prep guidelines for anodizing and plating</li>
            </ul>
            <p>
              Contact us for the full PDF or to talk through the best alloy for your project.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Request the PDF Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
