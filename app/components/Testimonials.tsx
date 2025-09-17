import { testimonials } from "../data";

export function Testimonials() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <span className="tag">Customer Stories</span>
          <h2>Manufacturers Depend on Our Responsiveness</h2>
          <p>
            Teams across aerospace, machine shops, and OEMs rely on our documentation, communication, and material quality.
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {testimonials.map((testimonial) => (
            <div className="card testimonial" key={testimonial.author}>
              <blockquote>“{testimonial.quote}”</blockquote>
              <footer>{testimonial.author}</footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
