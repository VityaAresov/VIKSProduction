import PortfolioGrid from "@/components/PortfolioGrid";

export type PortfolioItem = {
  title: string;
  author?: string;
  youtubeUrl: string;
};

const items: PortfolioItem[] = [
  { title: "Adidas World Cup", author: "Eoin Glaister", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { title: "Suzuki", author: "Traktor", youtubeUrl: "https://www.youtube.com/watch?v=oHg5SJYRHA0" },
  { title: "NBA", author: "Felix Brady", youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
  { title: "Viagra Boys", author: "Eoin Glaister", youtubeUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ" },
  { title: "Amazon", author: "Hernan Corera", youtubeUrl: "https://www.youtube.com/watch?v=6_b7RDuLwcI" },
  { title: "McDonalds", author: "The Fridman Sisters", youtubeUrl: "https://www.youtube.com/watch?v=l482T0yNkeo" },
];

export default function CasesPage() {
  return (
    <main style={{ padding: "34px 28px 60px" }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{
          fontFamily: '"WhyteInktrap",system-ui,sans-serif',
          fontSize: "4.2rem",
          lineHeight: "0.95",
          textTransform: "uppercase",
          margin: 0
        }}>
          Cases
        </h1>
        <p style={{ maxWidth: 680, opacity: .7, margin: "14px 0 0" }}>
          Портфолио кейсов. Нажмите на карточку — ролик откроется в новой вкладке YouTube.
          Анимации карточек и открытия страницы стилизованы под оригинал.
        </p>
      </header>
      <PortfolioGrid items={items} />
    </main>
  );
}