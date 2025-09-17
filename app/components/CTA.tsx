import Link from "next/link";

export function CTA() {
  return (
    <section style={{ paddingBottom: 160 }}>
      <div className="container">
        <div
          className="gradient-card"
          style={{
            padding: "72px 64px",
            display: "grid",
            gap: 24,
            textAlign: "center",
            justifyItems: "center"
          }}
        >
          <span className="tag" style={{ background: "rgba(249,115,22,0.12)" }}>
            Ready When You Are
          </span>
          <h2 style={{ margin: 0, fontSize: "clamp(2.2rem, 2.5vw + 1rem, 3rem)" }}>
            Tell Us What You Need—We&apos;ll Cut It Today
          </h2>
          <p style={{ maxWidth: 640, color: "var(--color-muted)", margin: 0 }}>
            Share your cut list or send over a drawing. Our specialists will confirm availability, pricing, and turnaround
            within one business hour.
          </p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link href="tel:+14082942334" className="btn btn-secondary">
              Call (408) 294-2334
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
