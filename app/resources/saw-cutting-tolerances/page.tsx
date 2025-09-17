import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saw Cutting Tolerance Chart"
};

export default function SawCuttingTolerancePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tag">Resource</span>
          <h1>Saw Cutting Tolerance Chart</h1>
          <p>
            Understand achievable tolerances across our plate, bar, and bundle cutting equipment. Use this reference to set
            print expectations and streamline inspection.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Review Your Print with Us
          </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Tolerance Overview</h2>
            <ul style={{ marginTop: 16, paddingLeft: 20, color: "var(--color-muted)", display: "grid", gap: 8 }}>
              <li>Plate saw cutting to ±0.005&quot; on thicknesses up to 8&quot;</li>
              <li>Bundle cutting tolerances by alloy and cross-section</li>
              <li>Miter and angle cutting best practices</li>
              <li>Surface finish expectations after saw cutting and deburring</li>
            </ul>
            <p>
              Contact us to review your drawings—we can often improve turnaround by suggesting alternate cuts or staging options.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Request the Full Chart
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
