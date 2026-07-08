import type { JSX } from "react";

const MONO = "'Courier New', 'Lucida Console', monospace";
const SANS = "system-ui, -apple-system, sans-serif";
const GREEN = "#407966";
const DARK = "#151816";
const MUTED = "rgba(21, 24, 22, 0.52)";

/* ── A1: Data Sovereignty 1/0 ── */
function DiagramDataSovereignty(): JSX.Element {
  return (
    <svg
      viewBox="0 0 800 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Center brand */}
      <text
        x="400" y="165" textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: MONO, fontSize: 20, letterSpacing: "0.22em", fill: DARK }}
      >
        NEWNAL
      </text>

      {/* Connection lines */}
      <line x1="258" y1="165" x2="202" y2="165" stroke="rgba(21,24,22,0.22)" strokeWidth="1" />
      <line x1="542" y1="165" x2="598" y2="165" stroke="rgba(21,24,22,0.22)" strokeWidth="1" />

      {/* "1" — filled circle: open/connected */}
      <circle cx="140" cy="165" r="60" fill={GREEN} />
      <text x="140" y="165" textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: MONO, fontSize: 56, fontWeight: "300", fill: "#fff" }}>
        1
      </text>

      {/* "0" — hollow ring: disconnected/private */}
      <circle cx="660" cy="165" r="60" stroke={GREEN} strokeWidth="2" />
      <text x="660" y="165" textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: MONO, fontSize: 56, fontWeight: "300", fill: GREEN }}>
        0
      </text>

      {/* Labels below symbols */}
      <text x="140" y="253" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.1em", fill: MUTED }}>
        DATA UTILIZATION
      </text>
      <text x="660" y="253" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.08em", fill: MUTED }}>
        COMPLETE DISCONNECTION
      </text>

      {/* Small descriptors above symbols */}
      <text x="140" y="82" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.08em", fill: GREEN }}>
        ACTIVE SOVEREIGNTY
      </text>
      <text x="660" y="82" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.08em", fill: GREEN }}>
        DEFENSIVE SOVEREIGNTY
      </text>

      {/* Footer note */}
      <text x="400" y="308" textAnchor="middle"
        style={{ fontFamily: SANS, fontSize: 11, fill: MUTED }}>
        One architecture. The decision always remains yours.
      </text>
    </svg>
  );
}

/* ── A2: OS Lineage Timeline (adapted from existing newnal.com Section07) ── */
function DiagramOSTimeline(): JSX.Element {
  const items = [
    { year: "1995", os: "Windows 95", era: "Personal Computing Era", active: false },
    { year: "2007", os: "iOS", era: "Mobile Computing Era", active: false },
    { year: "NOW", os: "Newnal AIOS", era: "AI Computing Era", active: true },
  ];
  const xs = [155, 400, 645];
  const cy = 168;

  return (
    <svg
      viewBox="0 0 800 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Timeline connector line */}
      <line x1="155" y1={cy} x2="645" y2={cy} stroke="rgba(21,24,22,0.16)" strokeWidth="1" />

      {items.map((item, i) => (
        <g key={i}>
          {/* Circle */}
          <circle
            cx={xs[i]} cy={cy} r="58"
            fill={item.active ? GREEN : "#eff1ef"}
            stroke={item.active ? "none" : "rgba(21,24,22,0.16)"}
            strokeWidth="1"
          />
          {/* Year in mono */}
          <text x={xs[i]} y={cy - 14} textAnchor="middle"
            style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.12em", fill: item.active ? "rgba(255,255,255,0.65)" : MUTED }}>
            {item.year}
          </text>
          {/* OS name */}
          <text x={xs[i]} y={cy + 10} textAnchor="middle"
            style={{ fontFamily: MONO, fontSize: 13, fill: item.active ? "#fff" : DARK }}>
            {item.os}
          </text>
          {/* Era label below */}
          <text x={xs[i]} y={cy + 78} textAnchor="middle"
            style={{ fontFamily: SANS, fontSize: 12, fill: item.active ? GREEN : MUTED }}>
            {item.era}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── P5: Traditional 1:N vs Newnal 1:1 Phone Number Model ── */
function DiagramPhoneNumberModel(): JSX.Element {
  const angles = [270, 330, 30, 90, 150, 210].map((a) => (a * Math.PI) / 180);
  const lx = 185;
  const ly = 170;
  const outerR = 90;

  return (
    <svg
      viewBox="0 0 800 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Divider */}
      <line x1="400" y1="28" x2="400" y2="292" stroke="rgba(21,24,22,0.12)" strokeDasharray="4 4" strokeWidth="1" />

      {/* ── LEFT: Traditional model ── */}
      <text x="195" y="40" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.1em", fill: MUTED }}>
        TRADITIONAL
      </text>

      {/* Central number box */}
      <rect x="110" y="142" width="148" height="54" rx="3" fill="#e9edeb" stroke="rgba(21,24,22,0.18)" strokeWidth="1" />
      <text x="184" y="164" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 10, fill: GREEN }}>
        +82-10-1234-5678
      </text>
      <text x="184" y="180" textAnchor="middle"
        style={{ fontFamily: SANS, fontSize: 10, fill: MUTED }}>
        One permanent number
      </text>

      {/* Radiating connections to 6 contacts */}
      {angles.map((rad, i) => {
        const px = lx + outerR * Math.cos(rad);
        const py = ly + outerR * Math.sin(rad);
        return (
          <g key={i}>
            <line x1={lx} y1={ly} x2={px} y2={py} stroke="rgba(21,24,22,0.15)" strokeWidth="1" />
            <circle cx={px} cy={py} r="14" fill="#f6f7f5" stroke="rgba(21,24,22,0.18)" strokeWidth="1" />
          </g>
        );
      })}

      <text x="195" y="284" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.06em", fill: MUTED }}>
        ANYONE CAN REACH YOU
      </text>

      {/* ── RIGHT: Newnal 1:1 model ── */}
      <text x="605" y="40" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.1em", fill: MUTED }}>
        NEWNAL
      </text>

      {/* 3 unique connection pairs */}
      {[
        { y: 105, id: "#N · 3A7F" },
        { y: 170, id: "#N · 8C2E" },
        { y: 235, id: "#N · 1B9D" },
      ].map((pair, i) => (
        <g key={i}>
          {/* User (filled teal) */}
          <circle cx="472" cy={pair.y} r="15" fill={GREEN} fillOpacity="0.82" />
          {/* Unique number label above line */}
          <text x="545" y={pair.y - 9} textAnchor="middle"
            style={{ fontFamily: MONO, fontSize: 10, fill: GREEN, opacity: 0.8 }}>
            {pair.id}
          </text>
          {/* Connection line */}
          <line x1="487" y1={pair.y} x2="578" y2={pair.y} stroke={GREEN} strokeWidth="1" strokeOpacity="0.3" />
          {/* Contact (hollow) */}
          <circle cx="593" cy={pair.y} r="15" fill="#f6f7f5" stroke="rgba(21,24,22,0.18)" strokeWidth="1" />
        </g>
      ))}

      <text x="545" y="284" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.06em", fill: MUTED }}>
        ONE NUMBER PER RELATIONSHIP
      </text>
    </svg>
  );
}

/* ── ILLI I2: Three Overlapping Circles ── */
function DiagramThreeCircles(): JSX.Element {
  return (
    <svg
      viewBox="0 0 800 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Circle 1: Your Life (top-left) */}
      <circle cx="305" cy="185" r="130" fill={`${GREEN}0d`} stroke={GREEN} strokeWidth="1.5" strokeOpacity="0.38" />
      {/* Circle 2: Your Family (top-right) */}
      <circle cx="495" cy="185" r="130" fill={`${GREEN}0d`} stroke={GREEN} strokeWidth="1.5" strokeOpacity="0.38" />
      {/* Circle 3: Trusted Services (bottom-center) */}
      <circle cx="400" cy="310" r="130" fill={`${GREEN}0d`} stroke={GREEN} strokeWidth="1.5" strokeOpacity="0.38" />

      {/* Labels — positioned in non-overlap zones */}
      <text x="242" y="155" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.06em", fill: DARK }}>
        YOUR
      </text>
      <text x="242" y="172" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.06em", fill: DARK }}>
        LIFE
      </text>

      <text x="558" y="155" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.06em", fill: DARK }}>
        YOUR
      </text>
      <text x="558" y="172" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.06em", fill: DARK }}>
        FAMILY
      </text>

      <text x="400" y="372" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.06em", fill: DARK }}>
        TRUSTED
      </text>
      <text x="400" y="389" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.06em", fill: DARK }}>
        SERVICES
      </text>

      {/* Center: ILLI — three-way overlap centroid ≈ (400, 237) */}
      <text x="400" y="237" textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.16em", fill: GREEN }}>
        ILLI
      </text>
    </svg>
  );
}

/* ── UFO U3: AIOS → My Data → UFO Connection ── */
function DiagramAIOStoUFO(): JSX.Element {
  const nodes = [
    { label: "AIOS", sub: "AI Operating System", x: 110 },
    { label: "MY DATA", sub: "Your personal context", x: 310 },
    { label: "PHONE", sub: "The UFO app", x: 510 },
    { label: "UFO", sub: "Physical device", x: 710 },
  ];

  return (
    <svg
      viewBox="0 0 820 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Connector lines */}
      {nodes.slice(0, -1).map((node, i) => (
        <g key={i}>
          <line
            x1={node.x + 52} y1="120"
            x2={nodes[i + 1].x - 52} y2="120"
            stroke="rgba(21,24,22,0.18)" strokeWidth="1"
          />
          {/* Arrow head */}
          <polygon
            points={`${nodes[i + 1].x - 52},115 ${nodes[i + 1].x - 40},120 ${nodes[i + 1].x - 52},125`}
            fill="rgba(21,24,22,0.25)"
          />
        </g>
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x} cy="120" r="52"
            fill={i === 3 ? GREEN : "#eff1ef"}
            stroke={i === 3 ? "none" : "rgba(21,24,22,0.16)"}
            strokeWidth="1"
          />
          <text x={node.x} y="113" textAnchor="middle"
            style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.1em", fill: i === 3 ? "#fff" : DARK }}>
            {node.label}
          </text>
          <text x={node.x} y="190" textAnchor="middle"
            style={{ fontFamily: SANS, fontSize: 11, fill: MUTED }}>
            {node.sub}
          </text>
        </g>
      ))}

      {/* Footer */}
      <text x="410" y="245" textAnchor="middle"
        style={{ fontFamily: SANS, fontSize: 11, fill: MUTED }}>
        With your permission, AIOS personalizes every hunt.
      </text>
    </svg>
  );
}

export const DIAGRAM_COMPONENTS: Record<string, () => JSX.Element> = {
  "Newnal logo connected to 1 - data utilization and 0 - complete disconnection":
    DiagramDataSovereignty,
  "Windows 95 to iOS to Newnal AIOS lineage diagram": DiagramOSTimeline,
  "Traditional 1:N phone number model compared with Newnal 1:1 connection number model":
    DiagramPhoneNumberModel,
  "Three overlapping circles diagram: Your Life, Your Family, Trusted Services":
    DiagramThreeCircles,
  "AIOS to My Data to UFO connection diagram": DiagramAIOStoUFO,
};
