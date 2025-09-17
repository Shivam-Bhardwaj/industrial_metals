import type { Metadata } from "next";
import Link from "next/link";
import { featuredInventory, heroHighlights } from "../data";
import { QuickSearch } from "../components/QuickSearch";

export const metadata: Metadata = {
  title: "Inventory"
};

export default function InventoryPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tag">On-Hand Stock</span>
          <h1>Aluminum, Stainless, Titanium, and Plastics</h1>
          <p>
            We maintain a deep inventory of domestic and DFARS-compliant materials ready for immediate processing. Saw cutting,
            shearing, and precision routing are available in-house.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request Current Pricing
            </Link>
            <Link href="tel:+14082942334" className="btn btn-secondary">
              Call the Inventory Desk
            </Link>
          </div>
          <div className="links-grid">
            {heroHighlights.map((item) => (
              <span key={item} className="tag" style={{ background: "rgba(15,23,42,0.08)" }}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <QuickSearch />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section-heading">
            <span className="tag">Most Requested Alloys</span>
            <h2>Featured Stock</h2>
            <p>
              Material certifications are stored digitally for quick retrieval. Ask about lot-specific traceability and custom
              packaging.
            </p>
          </div>
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Alloy</th>
                  <th>Forms</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {featuredInventory.map((item) => (
                  <tr key={item.alloy}>
                    <td>{item.alloy}</td>
                    <td>{item.forms}</td>
                    <td>{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="gradient-card" style={{ padding: 48 }}>
            <h2 style={{ marginTop: 0 }}>Looking for something specific?</h2>
            <p style={{ color: "var(--color-muted)" }}>
              We partner with mills across North America to source hard-to-find alloys, cast plate sizes, and specialty extrusions.
              Tell us what you need and we&apos;ll track it down.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Source a Special Alloy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
