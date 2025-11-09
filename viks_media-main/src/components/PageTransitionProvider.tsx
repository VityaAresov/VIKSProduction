"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageTransitionProvider.module.css";

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);
  const firstRef = useRef(true);

  useEffect(() => {
    if (!show) return;
    let p = 0;
    const step = () => {
      p += Math.random() * 22;
      if (p >= 100) p = 100;
      setProgress(p);
      if (p < 100) {
        timerRef.current = window.setTimeout(step, 180);
      } else {
        window.setTimeout(() => setShow(false), 350);
      }
    };
    step();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [show]);

  useEffect(() => {
    if (firstRef.current) { firstRef.current = false; return; }
    setProgress(0); setShow(true);
  }, [pathname]);

  return (
    <>
      <div className={styles.fadeWrapper} data-loaded={!show}>
        {children}
      </div>
      {show && (
        <div className={styles.overlay} aria-hidden="true">
          <div className={styles.half + " " + styles.top} />
          <div className={styles.logoBlock}>
            <div className={styles.logoInner}>
              <img src="/logo.png" alt="Logo" className={styles.logoImg} onError={(e) => (e.currentTarget.style.display = "none")} />
              <span className={styles.logoFallback}>VIKS</span>
            </div>
            <div className={styles.barWrapper}>
              <div className={styles.bar} style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className={styles.half + " " + styles.bottom} />
        </div>
      )}
    </>
  );
}