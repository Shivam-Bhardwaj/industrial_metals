import Link from "next/link";
import { resources } from "../data";

export function ResourceHighlights() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <span className="tag">Resources</span>
          <h2>Guides to Help Your Team Source Metals with Confidence</h2>
          <p>
            Download spec sheets, tolerance charts, and planning tools to keep your projects on schedule.
          </p>
        </div>
        <div className="resources-grid">
          {resources.map((resource) => (
            <div className="resource-card" key={resource.title}>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <Link href={resource.href}>Read more →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
