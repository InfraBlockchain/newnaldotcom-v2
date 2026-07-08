"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { MenuItem } from "@/content/site";
import styles from "./variant-gnb.module.css";

type VariantGnbProps = {
  brand: string;
  items: MenuItem[];
  mode: "anchor" | "page";
  logoHref: string;
};

export function VariantGnb({ brand, items, mode, logoHref }: VariantGnbProps) {
  const pathname = usePathname();
  const [activeAnchor, setActiveAnchor] = useState(items[0]?.anchorId ?? "");

  useEffect(() => {
    if (mode !== "anchor") {
      return;
    }

    const nodes = items
      .map((item) => document.getElementById(item.anchorId))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveAnchor(visible.target.id);
        }
      },
      {
        rootMargin: "-32% 0px -52% 0px",
        threshold: [0.08, 0.24, 0.48, 0.72],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items, mode]);

  return (
    <header className={styles.gnb}>
      <div className={styles.inner}>
        <div className={styles.left}>
          {mode === "page" ? (
            <Link href={logoHref} className={styles.brand}>
              {brand}
            </Link>
          ) : (
            <a href={logoHref} className={styles.brand} onClick={() => setActiveAnchor(items[0]?.anchorId ?? "")}>
              {brand}
            </a>
          )}
        </div>
        <nav className={styles.nav} aria-label="Variant navigation">
          {items.map((item) => {
            const href = mode === "anchor" ? `#${item.anchorId}` : item.pagePath;
            const isActive = mode === "anchor" ? activeAnchor === item.anchorId : pathname === item.pagePath;

            if (mode === "anchor") {
              return (
                <a
                  aria-current={isActive ? "true" : undefined}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                  href={href}
                  key={item.anchorId}
                  onClick={() => setActiveAnchor(item.anchorId)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                href={href}
                key={item.pagePath}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.actions}>
          <a
            href="https://keynote.newnal.com/v/4sGbG7ZxfBJRnfJbBPa8P?_b=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Keynote
          </a>
          <a
            href="https://column.newnal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Founder Column
          </a>
        </div>
      </div>
    </header>
  );
}
