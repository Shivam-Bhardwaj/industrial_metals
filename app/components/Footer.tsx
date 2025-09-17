import Link from "next/link";

const quickLinks = [
  { href: "/inventory", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" }
];

const certifications = [
  "ISO 9001:2015",
  "AS9100 Compliant",
  "DFARS Compliant",
  "ITAR Registered",
  "California Certified Small Business"
];

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 style={{ marginTop: 0, fontSize: "1.1rem", letterSpacing: "0.12em" }}>
              INDUSTRIAL METAL SERVICE
            </h3>
            <p>
              970 Catamaran Street<br />
              San Jose, CA 95110<br />
              (408) 294-2334
            </p>
            <p style={{ maxWidth: 320 }}>
              Serving the Bay Area since 1999 with responsive delivery, precision saw cutting, and
              certified aluminum, stainless, titanium, and specialty metal sourcing.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "8px" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Certifications</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "8px" }}>
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <p style={{ marginTop: 12 }}>
              Monday – Friday<br />
              7:00 a.m. – 4:00 p.m. PT<br />
              Will-call orders ready in as little as 2 hours.
            </p>
            <Link href="mailto:sales@industrialmetalservice.com" className="btn btn-secondary">
              sales@industrialmetalservice.com
            </Link>
          </div>
        </div>
        <p style={{ marginTop: 48, fontSize: 14, color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
          © {new Date().getFullYear()} Industrial Metal Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
