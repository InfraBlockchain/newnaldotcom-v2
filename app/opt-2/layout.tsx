import { OptFooter } from "@/components/site/opt-footer";
import { VariantGnb } from "@/components/site/variant-gnb";
import { siteContent } from "@/content/site";
import styles from "./layout.module.css";

export default function OptTwoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.shell}>
      <VariantGnb
        brand={siteContent.brand}
        items={siteContent.menuItems}
        logoHref="/opt-2"
        mode="page"
      />
      {children}
      <OptFooter brand={siteContent.brand} note={siteContent.footerNote} />
    </div>
  );
}
