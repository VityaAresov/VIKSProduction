import styles from "./PortfolioGrid.module.css";
import PortfolioCard from "./PortfolioCard";
import type { PortfolioItem } from "@/app/cases/page";

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <section className={styles.grid}>
      {items.map((it, i) => (
        <PortfolioCard key={i} item={it} />
      ))}
    </section>
  );
}