import Image from "next/image";
import styles from "./page.module.css";

const W = 900;
const H = 560;
const pct = (px: number, axis: "x" | "y") => `${(px / (axis === "x" ? W : H)) * 100}%`;

const flows = [
  { x: 150, label: "Records Information" },
  { x: 450, label: "Health check" },
  { x: 750, label: "Verifies credentials" },
] as const;

const roles = [
  { x: 150, label: "Issuer" },
  { x: 450, label: "Holder (Users)" },
  { x: 750, label: "Verifier" },
] as const;

const PILL_Y = 362;
const ROLE_Y = 454;
const CAPTION_Y = 512;

export function CoovDiagram() {
  return (
    <div className={styles.coovDiagram} role="img" aria-label="COOV verifiable-credential flow: Issuer, Holder, and Verifier all anchor records to the InfraBlockchain ledger">
      <Image className={styles.coovWordmark} src="/images/aios/coov-logo.png" alt="COOV" width={235} height={57} />

      <div className={styles.coovCanvas} style={{ aspectRatio: `${W} / ${H}` }}>
        <div className={styles.coovPanel} />

        <svg className={styles.coovLines} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="coovArrowBlue" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 Z" fill="var(--fg-accent)" />
            </marker>
            <marker id="coovArrowDark" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="7.5" refY="4" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--fg-muted)" />
            </marker>
          </defs>

          {/* flow-label -> badge connectors (arrow points up/into the badge) */}
          <path d="M450,340 L450,232" stroke="var(--fg-accent)" strokeWidth="2" fill="none" markerEnd="url(#coovArrowBlue)" />
          <path d="M150,340 L150,205 L360,205" stroke="var(--fg-accent)" strokeWidth="2" fill="none" markerEnd="url(#coovArrowBlue)" />
          <path d="M750,340 L750,205 L540,205" stroke="var(--fg-accent)" strokeWidth="2" fill="none" markerEnd="url(#coovArrowBlue)" />

          {/* flow-label -> role-pill connectors */}
          <path d="M150,384 L150,430" stroke="var(--fg-border)" strokeWidth="1.5" fill="none" />
          <path d="M450,384 L450,430" stroke="var(--fg-border)" strokeWidth="1.5" fill="none" />
          <path d="M750,384 L750,430" stroke="var(--fg-border)" strokeWidth="1.5" fill="none" />

          {/* role -> role arrows */}
          <path d="M210,454 L368,454" stroke="var(--fg-muted)" strokeWidth="1.5" fill="none" markerEnd="url(#coovArrowDark)" />
          <path d="M532,454 L690,454" stroke="var(--fg-muted)" strokeWidth="1.5" fill="none" markerEnd="url(#coovArrowDark)" />
        </svg>

        <div className={styles.coovBadgeCard} style={{ left: pct(450, "x"), top: pct(150, "y") }}>
          <Image className={styles.coovBadgeLogo} src="/images/aios/infrablockchain-logo.png" alt="InfraBlockchain" width={528} height={100} />
          <small className={styles.coovBadgeCaption}>Created by Blockchain Labs</small>
        </div>

        {flows.map((flow) => (
          <span key={flow.label} className={styles.coovFlowPill} style={{ left: pct(flow.x, "x"), top: pct(PILL_Y, "y") }}>
            {flow.label}
          </span>
        ))}

        {roles.map((role) => (
          <span key={role.label} className={styles.coovRole} style={{ left: pct(role.x, "x"), top: pct(ROLE_Y, "y") }}>
            {role.label}
          </span>
        ))}

        <span className={styles.coovCaption} style={{ left: pct(300, "x"), top: pct(CAPTION_Y, "y") }}>Issue verifiable credentials</span>
        <span className={styles.coovCaption} style={{ left: pct(600, "x"), top: pct(CAPTION_Y, "y") }}>Present verifiable credentials</span>
      </div>

      <div className={styles.coovMobile}>
        <Image className={styles.coovBadgeLogo} src="/images/aios/infrablockchain-logo.png" alt="InfraBlockchain" width={528} height={100} />
        <small className={styles.coovBadgeCaption}>Created by Blockchain Labs</small>

        {flows.map((flow, index) => (
          <div className={styles.coovMobileGroup} key={flow.label}>
            <span className={styles.coovConnector} aria-hidden="true">
              <span className={styles.coovConnectorLine} />
            </span>
            <span className={styles.coovFlowPillMobile}>{flow.label}</span>
            <span className={styles.coovConnectorShort} aria-hidden="true" />
            <span className={styles.coovRoleMobile}>{roles[index].label}</span>
          </div>
        ))}

        <div className={styles.coovCaptionsMobile}>
          <span>Issue verifiable credentials</span>
          <span>Present verifiable credentials</span>
        </div>
      </div>
    </div>
  );
}
