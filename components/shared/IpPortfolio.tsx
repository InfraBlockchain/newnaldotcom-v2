"use client";

import { useState } from "react";
import styles from "./IpPortfolio.module.css";

type PortfolioTile = {
  readonly title: string;
  readonly records: readonly (readonly [string, string, string])[];
};

type IpPortfolioProps = {
  tiles: readonly PortfolioTile[];
  whitepaperLinks: Record<string, string>;
};

export function IpPortfolio({ tiles, whitepaperLinks }: IpPortfolioProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedTile = tiles[selectedIndex];

  return (
    <section className={styles.portfolio} aria-label="Intellectual property categories">
      <div className={styles.categories} role="tablist" aria-label="Choose an intellectual property category">
        {tiles.map((tile, index) => (
          <button
            key={tile.title}
            className={`${styles.category} ${selectedIndex === index ? styles.active : ""}`}
            type="button"
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls="ip-records"
            onClick={() => setSelectedIndex(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {tile.title}
          </button>
        ))}
      </div>
      <div id="ip-records" className={styles.records} role="tabpanel">
        <div className={styles.recordsHead}>
          <span>{selectedTile.title}</span>
          <span>{selectedTile.records.length} RECORDS</span>
        </div>
        {selectedTile.records.map(([title, identifier, status]) => {
          const href = whitepaperLinks[title];
          return (
            <article key={title} className={styles.record}>
              <strong>{title}</strong>
              <span>{identifier}</span>
              <small>{status}</small>
              {href && (
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} PDF`}>
                  ↗
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
