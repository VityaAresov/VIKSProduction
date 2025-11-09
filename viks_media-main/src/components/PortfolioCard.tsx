"use client";

import styles from "./PortfolioCard.module.css";
import type { PortfolioItem } from "@/app/cases/page";
import { useState, useRef } from "react";

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "") || null;
    }
    if (u.pathname.startsWith("/shorts/")) {
      return u.pathname.split("/")[2] || null;
    }
    const id = u.searchParams.get("v");
    return id || null;
  } catch {
    return null;
  }
}

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const id = extractYouTubeId(item.youtubeUrl);
  const thumb = id
    ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='100%25' height='100%25' fill='%23121212'/%3E%3Ctext x='50%25' y='50%25' fill='%23ffffff' font-size='18' font-family='sans-serif' text-anchor='middle'%3ENo preview%3C/text%3E%3C/svg%3E";

  const [opening, setOpening] = useState(false);
  const openTimer = useRef<number | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (opening) return;
    setOpening(true);
    openTimer.current = window.setTimeout(() => {
      window.open(item.youtubeUrl, "_blank", "noreferrer");
      setOpening(false);
    }, 420);
  };

  return (
    <a
      href={item.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${opening ? styles.opening : ""}`}
      aria-label={`Смотреть на YouTube: ${item.title}${item.author ? " — " + item.author : ""}`}
      title="Открыть на YouTube"
      onClick={handleClick}
    >
      <div className={styles.projectOverlay} />
      <div className={styles.thumbWrap}>
        <img className={styles.thumb} src={thumb} alt={item.title} loading="lazy" />
        <div className={styles.playBadge} aria-hidden="true">
          <span className={styles.playIcon}>▶</span>
        </div>
        <div className={styles.cornerTL} />
        <div className={styles.cornerBR} />
      </div>

      <div className={styles.meta}>
        <div className={styles.title}>
          <span className={styles.linkIconWrapper}>
            <span className={styles.linkPulseDot} />
          </span>
          {item.title}
        </div>
        {item.author ? <div className={styles.author}>{item.author}</div> : null}
      </div>
    </a>
  );
}