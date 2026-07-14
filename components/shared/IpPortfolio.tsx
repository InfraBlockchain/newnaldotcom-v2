"use client";

import { useState } from "react";
import styles from "./IpPortfolio.module.css";

type PortfolioTile = {
  readonly title: string;
  readonly groups: readonly {
    readonly title: string;
    readonly records: readonly (readonly [string, string, string])[];
  }[];
};

type IpPortfolioProps = {
  tiles: readonly PortfolioTile[];
  whitepaperLinks: Record<string, string>;
};

export function IpPortfolio({ tiles, whitepaperLinks }: IpPortfolioProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedTile = selectedIndex === null ? null : tiles[selectedIndex];
  const recordsCount = selectedTile?.groups.reduce((count, group) => count + group.records.length, 0);

  return (
    <section className={styles.portfolio} aria-label="Intellectual property categories">
      {selectedTile ? (
        <div id="ip-records" className={styles.records}>
          <div className={styles.recordsHead}>
            <button type="button" onClick={() => setSelectedIndex(null)}>← All categories</button>
            <span>{selectedTile.title}</span>
            <span>{recordsCount} RECORDS</span>
          </div>
          {selectedTile.groups.map((group) => (
            <section key={group.title} className={styles.group}>
              <h3>{group.title}</h3>
              {group.records.map(([title, identifier, status]) => {
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
            </section>
          ))}
        </div>
      ) : (
        <div className={styles.categories}>
          {tiles.map((tile, index) => (
            <button key={tile.title} className={styles.category} type="button" onClick={() => setSelectedIndex(index)}>
              {tile.title}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
