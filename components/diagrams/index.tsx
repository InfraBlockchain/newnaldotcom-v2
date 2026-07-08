import type { JSX } from "react";

const MONO = "'Courier New', 'Lucida Console', monospace";
const SANS = "system-ui, -apple-system, sans-serif";
const GREEN = "#407966";
const DARK = "#151816";
const MID = "rgba(21, 24, 22, 0.68)";

/* ── A1: Data Sovereignty 1/0 ── */
function DiagramDataSovereignty(): JSX.Element {
  return (
    <svg
      viewBox="0 0 800 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* White panel for contrast */}
      <rect x="60" y="28" width="680" height="304" rx="6" fill="#fff" fillOpacity="0.62" />

      {/* "ACTIVE SOVEREIGNTY" label */}
      <text x="210" y="74" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", fill: GREEN, fontWeight: "600" }}>
        ACTIVE SOVEREIGNTY
      </text>

      {/* "DEFENSIVE SOVEREIGNTY" label */}
      <text x="590" y="74" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", fill: GREEN, fontWeight: "600" }}>
        DEFENSIVE SOVEREIGNTY
      </text>

      {/* Connection lines */}
      <line x1="295" y1="188" x2="348" y2="188" stroke="rgba(21,24,22,0.28)" strokeWidth="1.5" />
      <line x1="452" y1="188" x2="505" y2="188" stroke="rgba(21,24,22,0.28)" strokeWidth="1.5" />

      {/* NEWNAL center */}
      <text x="400" y="195" textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.24em", fill: DARK, fontWeight: "500" }}>
        NEWNAL
      </text>

      {/* "1" — filled circle */}
      <circle cx="210" cy="188" r="82" fill={GREEN} />
      <text x="210" y="188" textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: MONO, fontSize: 72, fontWeight: "300", fill: "#fff" }}>
        1
      </text>

      {/* "0" — hollow ring */}
      <circle cx="590" cy="188" r="82" stroke={GREEN} strokeWidth="3" />
      <text x="590" y="188" textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: MONO, fontSize: 72, fontWeight: "300", fill: GREEN }}>
        0
      </text>

      {/* Labels below */}
      <text x="210" y="295" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", fill: DARK, fontWeight: "500" }}>
        DATA UTILIZATION
      </text>
      <text x="590" y="295" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", fill: DARK, fontWeight: "500" }}>
        COMPLETE DISCONNECTION
      </text>

      {/* Footer */}
      <text x="400" y="340" textAnchor="middle"
        style={{ fontFamily: SANS, fontSize: 13, fill: MID }}>
        One architecture. The decision always remains yours.
      </text>
    </svg>
  );
}

/* ── A2: OS Lineage Timeline ── */
function DiagramOSTimeline(): JSX.Element {
  const items = [
    { year: "1995", os: "Windows 95", era: "Personal Computing Era", active: false },
    { year: "2007", os: "iOS", era: "Mobile Computing Era", active: false },
    { year: "NOW", os: "Newnal AIOS", era: "AI Computing Era", active: true },
  ];
  const xs = [150, 400, 650];
  const cy = 176;

  return (
    <svg
      viewBox="0 0 800 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* White panel */}
      <rect x="40" y="24" width="720" height="292" rx="6" fill="#fff" fillOpacity="0.62" />

      {/* Timeline connector */}
      <line x1="150" y1={cy} x2="650" y2={cy} stroke="rgba(21,24,22,0.22)" strokeWidth="1.5" />

      {items.map((item, i) => (
        <g key={i}>
          {/* Circle */}
          <circle
            cx={xs[i]} cy={cy} r="68"
            fill={item.active ? GREEN : "#eff1ef"}
            stroke={item.active ? GREEN : "rgba(21,24,22,0.22)"}
            strokeWidth="1.5"
          />
          {/* Year */}
          <text x={xs[i]} y={cy - 18} textAnchor="middle"
            style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", fill: item.active ? "rgba(255,255,255,0.72)" : MID }}>
            {item.year}
          </text>
          {/* OS name */}
          <text x={xs[i]} y={cy + 12} textAnchor="middle"
            style={{ fontFamily: MONO, fontSize: item.os === "Newnal AIOS" ? 14 : 15, fill: item.active ? "#fff" : DARK, fontWeight: item.active ? "600" : "400" }}>
            {item.os}
          </text>
          {/* Era label below */}
          <text x={xs[i]} y={cy + 92} textAnchor="middle"
            style={{ fontFamily: SANS, fontSize: 13, fill: item.active ? GREEN : MID, fontWeight: item.active ? "600" : "400" }}>
            {item.era}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── P5: Traditional 1:N vs Newnal 1:1 ── */
function DiagramPhoneNumberModel(): JSX.Element {
  const angles = [270, 330, 30, 90, 150, 210].map((a) => (a * Math.PI) / 180);
  const lx = 185;
  const ly = 176;
  const outerR = 96;

  return (
    <svg
      viewBox="0 0 800 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* White panel */}
      <rect x="20" y="16" width="760" height="302" rx="6" fill="#fff" fillOpacity="0.62" />

      {/* Divider */}
      <line x1="400" y1="28" x2="400" y2="306" stroke="rgba(21,24,22,0.14)" strokeDasharray="4 4" strokeWidth="1" />

      {/* ── LEFT: Traditional ── */}
      <text x="195" y="52" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", fill: DARK, fontWeight: "600" }}>
        TRADITIONAL
      </text>

      {/* Central number box */}
      <rect x="102" y="148" width="164" height="58" rx="4" fill="#e4e8e5" stroke="rgba(21,24,22,0.22)" strokeWidth="1.5" />
      <text x="184" y="171" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 11, fill: GREEN, fontWeight: "600" }}>
        +82-10-1234-5678
      </text>
      <text x="184" y="191" textAnchor="middle"
        style={{ fontFamily: SANS, fontSize: 11, fill: MID }}>
        One permanent number
      </text>

      {/* Radiating connections */}
      {angles.map((rad, i) => {
        const px = lx + outerR * Math.cos(rad);
        const py = ly + outerR * Math.sin(rad);
        return (
          <g key={i}>
            <line x1={lx} y1={ly} x2={px} y2={py} stroke="rgba(21,24,22,0.22)" strokeWidth="1.5" />
            <circle cx={px} cy={py} r="16" fill="#f2f4f2" stroke="rgba(21,24,22,0.28)" strokeWidth="1.5" />
          </g>
        );
      })}

      <text x="195" y="294" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.06em", fill: MID }}>
        ANYONE CAN REACH YOU
      </text>

      {/* ── RIGHT: Newnal 1:1 ── */}
      <text x="610" y="52" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", fill: DARK, fontWeight: "600" }}>
        NEWNAL
      </text>

      {[
        { y: 108, id: "#N · 3A7F" },
        { y: 176, id: "#N · 8C2E" },
        { y: 244, id: "#N · 1B9D" },
      ].map((pair, i) => (
        <g key={i}>
          {/* User dot */}
          <circle cx="478" cy={pair.y} r="16" fill={GREEN} />
          {/* ID label */}
          <text x="556" y={pair.y - 10} textAnchor="middle"
            style={{ fontFamily: MONO, fontSize: 11, fill: GREEN, fontWeight: "600" }}>
            {pair.id}
          </text>
          {/* Line */}
          <line x1="494" y1={pair.y} x2="586" y2={pair.y} stroke={GREEN} strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Contact dot */}
          <circle cx="602" cy={pair.y} r="16" fill="#f2f4f2" stroke="rgba(21,24,22,0.28)" strokeWidth="1.5" />
        </g>
      ))}

      <text x="556" y="294" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.06em", fill: MID }}>
        ONE NUMBER PER RELATIONSHIP
      </text>
    </svg>
  );
}

/* ── ILLI I2: Three Overlapping Circles ── */
function DiagramThreeCircles(): JSX.Element {
  return (
    <svg
      viewBox="0 0 800 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* White panel */}
      <rect x="60" y="16" width="680" height="388" rx="6" fill="#fff" fillOpacity="0.62" />

      {/* Circles */}
      <circle cx="305" cy="195" r="138" fill={`${GREEN}14`} stroke={GREEN} strokeWidth="2" />
      <circle cx="495" cy="195" r="138" fill={`${GREEN}14`} stroke={GREEN} strokeWidth="2" />
      <circle cx="400" cy="318" r="138" fill={`${GREEN}14`} stroke={GREEN} strokeWidth="2" />

      {/* Labels — outer zones */}
      <text x="240" y="158" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 15, letterSpacing: "0.07em", fill: DARK, fontWeight: "600" }}>
        YOUR
      </text>
      <text x="240" y="178" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 15, letterSpacing: "0.07em", fill: DARK, fontWeight: "600" }}>
        LIFE
      </text>

      <text x="560" y="158" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 15, letterSpacing: "0.07em", fill: DARK, fontWeight: "600" }}>
        YOUR
      </text>
      <text x="560" y="178" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 15, letterSpacing: "0.07em", fill: DARK, fontWeight: "600" }}>
        FAMILY
      </text>

      <text x="400" y="386" textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 15, letterSpacing: "0.07em", fill: DARK, fontWeight: "600" }}>
        TRUSTED SERVICES
      </text>

      {/* Center: ILLI */}
      <text x="400" y="248" textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.18em", fill: GREEN, fontWeight: "700" }}>
        ILLI
      </text>
    </svg>
  );
}

/* ── UFO U3: AIOS → My Data → UFO ── */
function DiagramAIOStoUFO(): JSX.Element {
  const nodes = [
    { label: "AIOS", sub: "AI Operating System", x: 120 },
    { label: "MY DATA", sub: "Your personal context", x: 320 },
    { label: "PHONE", sub: "The UFO app", x: 520 },
    { label: "UFO", sub: "Physical device", x: 720 },
  ];

  return (
    <svg
      viewBox="0 0 840 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* White panel */}
      <rect x="20" y="16" width="800" height="258" rx="6" fill="#fff" fillOpacity="0.62" />

      {/* Connector lines */}
      {nodes.slice(0, -1).map((node, i) => (
        <g key={i}>
          <line
            x1={node.x + 58} y1="128"
            x2={nodes[i + 1].x - 58} y2="128"
            stroke="rgba(21,24,22,0.24)" strokeWidth="1.5"
          />
          {/* Arrow */}
          <polygon
            points={`${nodes[i + 1].x - 58},122 ${nodes[i + 1].x - 44},128 ${nodes[i + 1].x - 58},134`}
            fill="rgba(21,24,22,0.36)"
          />
        </g>
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x} cy="128" r="58"
            fill={i === 3 ? GREEN : "#eff1ef"}
            stroke={i === 3 ? GREEN : "rgba(21,24,22,0.22)"}
            strokeWidth="1.5"
          />
          <text x={node.x} y="134" textAnchor="middle" dominantBaseline="central"
            style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.1em", fill: i === 3 ? "#fff" : DARK, fontWeight: "600" }}>
            {node.label}
          </text>
          <text x={node.x} y="204" textAnchor="middle"
            style={{ fontFamily: SANS, fontSize: 12, fill: MID }}>
            {node.sub}
          </text>
        </g>
      ))}

      {/* Footer */}
      <text x="420" y="254" textAnchor="middle"
        style={{ fontFamily: SANS, fontSize: 13, fill: MID }}>
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
