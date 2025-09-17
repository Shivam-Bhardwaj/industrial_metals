"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  inventoryAlloys,
  inventoryItems,
  inventoryMaterials,
  inventoryShapes,
  type InventoryItem
} from "../inventory/data";

const ALL_VALUE = "all";

type QuickSearchProps = {
  className?: string;
};

type Filters = {
  material: string;
  shape: string;
  alloy: string;
};

const defaultFilters: Filters = {
  material: ALL_VALUE,
  shape: ALL_VALUE,
  alloy: ALL_VALUE
};

export function QuickSearch({ className }: QuickSearchProps) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [results, setResults] = useState<InventoryItem[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const filtered = inventoryItems.filter((item) => {
      const matchesMaterial = filters.material === ALL_VALUE || item.material === filters.material;
      const matchesShape = filters.shape === ALL_VALUE || item.shape === filters.shape;
      const matchesAlloy = filters.alloy === ALL_VALUE || item.alloy === filters.alloy;

      return matchesMaterial && matchesShape && matchesAlloy;
    });

    setResults(filtered);
  };

  const resultSummary = useMemo(() => {
    if (!submitted) {
      return "Select a material, shape, and alloy, then run a search to see matching stock.";
    }

    if (results.length === 0) {
      return "No stock items matched those filters. Try broadening your search or contact our sales team.";
    }

    if (results.length === 1) {
      return "Showing 1 matching inventory item.";
    }

    return `Showing ${results.length} matching inventory items.`;
  }, [results.length, submitted]);

  const containerClassName = ["quick-search card", className].filter(Boolean).join(" ");

  return (
    <div className={containerClassName}>
      <header className="quick-search-header">
        <span className="tag">Find Materials Fast</span>
        <h2>Quick Inventory Search</h2>
        <p>
          Dial in the material family, stocked shape, and alloy or grade to see what&apos;s ready on our floor. Every item is
          available with mill test reports and precision cutting.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="quick-search-form">
        <div className="form-field">
          <label htmlFor="quick-search-material">Material</label>
          <select
            id="quick-search-material"
            value={filters.material}
            onChange={(event) => setFilters((current) => ({ ...current, material: event.target.value }))}
          >
            <option value={ALL_VALUE}>All materials</option>
            {inventoryMaterials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="quick-search-shape">Shape</label>
          <select
            id="quick-search-shape"
            value={filters.shape}
            onChange={(event) => setFilters((current) => ({ ...current, shape: event.target.value }))}
          >
            <option value={ALL_VALUE}>All shapes</option>
            {inventoryShapes.map((shape) => (
              <option key={shape} value={shape}>
                {shape}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="quick-search-alloy">Alloy</label>
          <select
            id="quick-search-alloy"
            value={filters.alloy}
            onChange={(event) => setFilters((current) => ({ ...current, alloy: event.target.value }))}
          >
            <option value={ALL_VALUE}>All alloys</option>
            {inventoryAlloys.map((alloy) => (
              <option key={alloy} value={alloy}>
                {alloy}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary quick-search-submit">
          Search Inventory
        </button>
      </form>
      <section aria-live="polite" className="quick-search-results">
        <p className="quick-search-summary">{resultSummary}</p>
        {results.length > 0 ? (
          <ul className="quick-search-list">
            {results.map((item) => (
              <li key={item.id} className="card quick-search-result">
                <div className="quick-search-result-header">
                  <div>
                    <h3>{item.alloy}</h3>
                    <p className="quick-search-meta">
                      {item.material} • {item.shape}
                      {item.temper ? ` • Temper ${item.temper}` : ""}
                    </p>
                  </div>
                  <span className="quick-search-sizes">{item.sizes}</span>
                </div>
                <p>{item.summary}</p>
                <ul className="quick-search-feature-list">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </div>
  );
}
