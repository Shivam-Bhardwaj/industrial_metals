import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recycling Program Checklist"
};

export default function RecyclingChecklistPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tag">Resource</span>
          <h1>Recycling Program Checklist</h1>
          <p>
            Build a closed-loop recycling program that keeps your floor clean and returns value toward future purchases. This
            checklist walks through everything you need to get started.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Talk About Recycling Credits
          </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Checklist Highlights</h2>
            <ul style={{ marginTop: 16, paddingLeft: 20, color: "var(--color-muted)", display: "grid", gap: 8 }}>
              <li>Material segregation and labeling best practices</li>
              <li>Scheduling pickups that align with your production cycles</li>
              <li>Documentation requirements for aerospace and defense programs</li>
              <li>How recycling credits offset new material purchases</li>
            </ul>
            <p>
              Request the full checklist to streamline your next audit and maximize scrap value.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Request the Checklist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
