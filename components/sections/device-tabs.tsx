"use client";

import { useState } from "react";
import type { SectionContent } from "@/content/aios";
import { ContentSection } from "./content-section";
import styles from "@/app/opt-2/detail-page.module.css";

type Tone = "light" | "muted";

type DeviceTab = {
  id: string;
  label: string;
  sections: SectionContent[];
  toneOrder: [Tone, Tone];
};

type DeviceTabsProps = {
  tabs: DeviceTab[];
};

export function DeviceTabs({ tabs }: DeviceTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");

  return (
    <>
      <nav className={styles.tabs} aria-label="Device sections" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeId === tab.id}
            aria-controls={`${tab.id}-panel`}
            className={`${styles.tab} ${activeId === tab.id ? styles.tabActive : ""}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${tab.id}-panel`}
          role="tabpanel"
          aria-labelledby={tab.id}
          hidden={activeId !== tab.id}
          className={styles.deviceGroup}
        >
          {tab.sections.map((section, index) => (
            <ContentSection
              key={section.id}
              priorityFigure={index === 0}
              section={section}
              tone={tab.toneOrder[index % 2]}
            />
          ))}
        </div>
      ))}
    </>
  );
}
