import Link from "next/link";
import { featuredInventory } from "../data";

export function InventoryHighlights() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <span className="tag">Featured Inventory</span>
          <h2>Ready-to-Ship Metals Cut to Your Specifications</h2>
          <p>
            Thousands of pounds of aluminum, stainless, titanium, nickel alloys, and plastics staged in San Jose for fast
            turnaround.
          </p>
        </div>
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Alloy</th>
                <th>Available Forms</th>
                <th>Typical Applications</th>
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
        <div className="hero-actions" style={{ marginTop: 48 }}>
          <Link href="/inventory" className="btn btn-primary">
            View Full Inventory
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Request Mill Certifications
          </Link>
        </div>
      </div>
    </section>
  );
}
