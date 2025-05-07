export interface Service {
  slug: string
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    slug: 'video-production',
    title: 'Video Production',
    description: 'End‑to‑end video production: from concept and scripting through shooting, editing, color grading and final delivery.',
    features: [
      'Scriptwriting & Storyboarding',
      'On‑location & Studio Shoots',
      'Editing, Color Grading & Motion Graphics',
      'Sound Design & Licensed Music',
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Full‑service social campaigns—content planning, asset creation, community engagement and paid boosts.',
    features: [
      'Custom Editorial Calendars',
      'Branded Reels, Carousels & Stories',
      'Targeted Ad Campaigns',
      'Engagement & Community Management',
    ],
  },
  {
    slug: 'content-strategy',
    title: 'Content Strategy',
    description: 'Data‑driven roadmaps: audience research, messaging frameworks, SEO audits and KPI definition.',
    features: [
      'Audience & Competitor Analysis',
      'Brand Voice & Style Guide',
      'Multi‑Channel Content Planning',
      'Performance Tracking & Reporting',
    ],
  },
  {
    slug: 'ai-avatars',
    title: 'AI‑Driven Avatars',
    description: 'Hyper‑realistic digital presenters powered by neural rendering and custom NLP for lifelike speech and interaction.',
    features: [
      'Avatar Modeling from Voice/Video',
      'Real‑time Lip‑Sync & Facial Animation',
      'Script Integration & Interactive Logic',
      'Embeddable Widget & API',
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Responsive, SEO‑optimized websites with video/avatar embeds, CMS/CRM integrations and 24/7 hosting support.',
    features: [
      'UI/UX Prototyping & Custom Design',
      'Front‑End (React + Tailwind) & Back‑End',
      'Analytics, CMS & CRM Integration',
      'Hosting, Security & Maintenance Plans',
    ],
  },
]

export default services
