import Image from "next/image";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import styles from "./page.module.css";

const W = 900;
const H = 460;
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

const PILL_Y = 210;
const ROLE_Y = 300;
const CAPTION_Y = 350;

export function CoovDiagram() {
  return (
    <div className={styles.coovDiagram} role="img" aria-label="COOV verifiable-credential flow: Issuer, Holder, and Verifier all anchor records to the InfraBlockchain ledger">
      <Image className={styles.coovWordmark} src="/images/aios/coov-logo.png" alt="COOV" width={235} height={57} />

      <div className={styles.coovCanvas} style={{ aspectRatio: `${W} / ${H}` }}>
        <div className={styles.coovPanel} />

        <svg className={styles.coovLines} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="coovArrowBlue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--fg-accent)" />
            </marker>
            <marker id="coovArrowDark" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto-start-reverse">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--fg-muted)" />
            </marker>
          </defs>

          {/* badge -> flow-label connectors (arrow points up/into the badge) */}
          <path d="M450,190 L450,77" stroke="var(--fg-accent)" strokeWidth="2" fill="none" markerEnd="url(#coovArrowBlue)" />
          <path d="M150,190 L150,130 L380,130" stroke="var(--fg-accent)" strokeWidth="2" fill="none" markerEnd="url(#coovArrowBlue)" />
          <path d="M750,190 L750,130 L520,130" stroke="var(--fg-accent)" strokeWidth="2" fill="none" markerEnd="url(#coovArrowBlue)" />

          {/* flow-label -> role-pill connectors */}
          <path d="M150,230 L150,279" stroke="var(--fg-border)" strokeWidth="1.5" fill="none" />
          <path d="M450,230 L450,279" stroke="var(--fg-border)" strokeWidth="1.5" fill="none" />
          <path d="M750,230 L750,279" stroke="var(--fg-border)" strokeWidth="1.5" fill="none" />

          {/* role -> role arrows */}
          <path d="M200,292 L200,308 M200,300 L370,300" stroke="var(--fg-muted)" strokeWidth="1.5" fill="none" markerEnd="url(#coovArrowDark)" />
          <path d="M525,292 L525,308 M525,300 L695,300" stroke="var(--fg-muted)" strokeWidth="1.5" fill="none" markerEnd="url(#coovArrowDark)" />
        </svg>

        <div className={styles.coovBadgeCard} style={{ left: pct(450, "x"), top: pct(10, "y") }}>
          <div className={styles.coovBadge}>
            <CubeTransparentIcon aria-hidden="true" />
            <span>InfraBlockchain</span>
          </div>
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
        <div className={styles.coovBadge}>
          <CubeTransparentIcon aria-hidden="true" />
          <span>InfraBlockchain</span>
        </div>
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
