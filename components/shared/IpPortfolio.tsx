import { Fragment } from "react";
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
  return (
    <section className={styles.portfolio} aria-label="Intellectual property portfolio">
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Record</th>
              <th scope="col">Identifier</th>
              <th scope="col">Status</th>
              <th scope="col"><span className="srOnly">Document</span></th>
            </tr>
          </thead>
          <tbody>
            {tiles.map((tile) => (
              <Fragment key={tile.title}>
                <tr className={styles.categoryRow}>
                  <th colSpan={5} scope="rowgroup">{tile.title}</th>
                </tr>
                {tile.groups.map((group) => (
                  <Fragment key={group.title}>
                    <tr className={styles.groupRow}>
                      <td colSpan={5}>{group.title}</td>
                    </tr>
                    {group.records.map(([title, identifier, status]) => {
                      const href = whitepaperLinks[title];
                      return (
                        <tr key={title}>
                          <td>{tile.title}</td>
                          <th scope="row">{title}</th>
                          <td>{identifier}</td>
                          <td><span className={styles.status}>{status}</span></td>
                          <td>{href && <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} PDF`}>↗</a>}</td>
                        </tr>
                      );
                    })}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
