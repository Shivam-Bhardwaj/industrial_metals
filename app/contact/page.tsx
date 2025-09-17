import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="tag">Get in Touch</span>
          <h1>Speak with a Metal Specialist Today</h1>
          <p>
            We respond to quote requests, cut lists, and recycling inquiries within one business hour. Provide as much
            information as possible so we can move quickly.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
