import Image from "next/image";
import Link from "next/link";
import { heroHighlights } from "../data";
import { playfair } from "../theme";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="tag">
          <span>Trusted Bay Area Metal Supplier</span>
        </div>
        <h1 className={playfair.className}>
          Certified Metals, Saw Cutting, and Recycling—Delivered on Your Timeline
        </h1>
        <p>
          Industrial Metal Service keeps manufacturers moving with rapid access to domestic aluminum, stainless, and specialty
          metals, precision saw cutting, and flexible recycling programs.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Get a Fast Quote
          </Link>
          <Link href="/inventory" className="btn btn-secondary">
            Browse Inventory
          </Link>
        </div>
        <div className="links-grid" style={{ marginTop: 48 }}>
          {heroHighlights.map((item) => (
            <span key={item} className="tag" style={{ background: "rgba(15,23,42,0.08)" }}>
              {item}
            </span>
          ))}
        </div>
        <div className="hero-visual">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=80"
            alt="Metal saw cutting"
            width={1100}
            height={720}
            priority
          />
          <div className="stat-float">
            <strong>24/7</strong>
            <span>Emergency service and rush orders available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
