"use client";

import { useState } from "react";
import { contactReasons } from "../data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact-card">
      <div>
        <h2 style={{ marginTop: 0 }}>Tell Us About Your Project</h2>
        <p>
          Share your material grade, form, thickness, and required tolerances. If you have a cut list or drawing, let us know
          and an account manager will reach out within one business hour.
        </p>
        <p>
          Call us directly at <a href="tel:+14082942334">(408) 294-2334</a> or email <a href="mailto:sales@industrialmetalservice.com">sales@industrialmetalservice.com</a>.
        </p>
        <div className="badge-grid">
          <span className="badge">Saw Cutting to ±0.005\"</span>
          <span className="badge">Mill Test Reports</span>
          <span className="badge">Same-Day Pickup</span>
          <span className="badge">Recycling Credits</span>
        </div>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />

        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Company name" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.com" required />

        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="(###) ###-####" />

        <label htmlFor="reason">How can we help?</label>
        <select id="reason" name="reason" defaultValue={contactReasons[0]}>
          {contactReasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </select>

        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          placeholder="Alloy, dimensions, tolerances, delivery needs..."
          required
        />

        <button type="submit" className="btn btn-primary">
          Send Request
        </button>
        {submitted ? <small>Thanks! A metal specialist will reach out shortly.</small> : null}
      </form>
    </div>
  );
}
