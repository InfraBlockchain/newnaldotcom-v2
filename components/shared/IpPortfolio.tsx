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
      <div className={styles.tiles}>
        {tiles.map((tile) => (
          <article key={tile.title} className={styles.tile}>
            <h3>{tile.title}</h3>
            <div className={styles.tileRecords}>
              {tile.groups.map((group) => (
                <section key={group.title} className={styles.group}>
                  <h4>{group.title}</h4>
                  <table>
                    <tbody>
                      {group.records.map(([title, identifier, status]) => {
                        const href = whitepaperLinks[title];
                        return (
                          <tr key={title}>
                            <th scope="row">{title}</th>
                            <td>{identifier}</td>
                            <td><span className={styles.status}>{status}</span></td>
                            <td>{href && <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} PDF`}>↗</a>}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
