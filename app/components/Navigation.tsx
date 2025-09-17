"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{ boxShadow: scrolled ? "0 18px 34px -24px rgba(15,23,42,0.38)" : "none" }}>
      <div className="container inner">
        <Link href="/">
          <span style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.08em" }}>
            INDUSTRIAL METAL SERVICE
          </span>
        </Link>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={pathname === link.href ? "active" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
          Request a Quote
        </Link>
      </div>
    </nav>
  );
}
