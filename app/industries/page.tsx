import type { Metadata } from "next";
import Link from "next/link";
import { industries, testimonials } from "../data";

export const metadata: Metadata = {
  title: "Industries"
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tag">Specialized Support</span>
          <h1>Metals for Aerospace, Semiconductor, Robotics, and More</h1>
          <p>
            We partner with engineers and buyers to solve complex sourcing challenges—meeting spec, schedule, and compliance
            requirements across high-stakes industries.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Talk to an Industry Expert
            </Link>
            <Link href="/resources" className="btn btn-secondary">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {industries.map((industry) => (
              <div className="card" key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="gradient-card" style={{ padding: 48 }}>
            <h2 style={{ marginTop: 0 }}>Trusted by High-Performance Teams</h2>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 24 }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.author} className="testimonial" style={{ padding: 0 }}>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <footer>{testimonial.author}</footer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request a Capability Briefing
            </Link>
            <Link href="/inventory" className="btn btn-secondary">
              Check Stock Availability
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
