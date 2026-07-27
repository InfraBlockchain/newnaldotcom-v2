import { ArrowRightIcon, ArrowUpIcon, CheckCircleIcon, CubeTransparentIcon } from "@heroicons/react/24/outline";
import styles from "./page.module.css";

const flows = [
  { label: "Records Information" },
  { label: "Health check" },
  { label: "Verifies credentials" },
] as const;

const roles = ["Issuer", "Holder (Users)", "Verifier"] as const;

export function CoovDiagram() {
  return (
    <div className={styles.coovDiagram} role="img" aria-label="COOV verifiable-credential flow: Issuer, Holder, and Verifier all anchor records to the InfraBlockchain ledger">
      <div className={styles.coovWordmark}>
        <span>COOV</span>
        <CheckCircleIcon aria-hidden="true" />
      </div>

      <div className={styles.coovPanel}>
        <div className={styles.coovBadge}>
          <CubeTransparentIcon aria-hidden="true" />
          <span>InfraBlockchain</span>
        </div>
        <small className={styles.coovBadgeCaption}>Created by Blockchain Labs</small>

        <div className={styles.coovFlowLabels}>
          {flows.map((flow) => (
            <div className={styles.coovFlowLabel} key={flow.label}>
              <ArrowUpIcon aria-hidden="true" />
              <span>{flow.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.coovRoles}>
          {roles.map((role, index) => (
            <div className={styles.coovRoleGroup} key={role}>
              <span className={styles.coovRole}>{role}</span>
              {index < roles.length - 1 && <ArrowRightIcon className={styles.coovRoleArrow} aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className={styles.coovCaptions}>
          <span>Issue verifiable credentials</span>
          <span>Present verifiable credentials</span>
        </div>
      </div>
    </div>
  );
}
