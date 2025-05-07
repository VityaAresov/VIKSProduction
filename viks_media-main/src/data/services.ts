// src/data/services.ts

export interface Feature {
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price?: string
  features: string[]
  highlighted?: boolean
}

export interface Service {
  slug: string

  // Section 1 (Header)
  tagline: string
  title: string
  headerImg: string
  headerDescription: string

  // Section 2 (Layout / Video Production or аналог)
  layoutImg: string
  layoutTitle: string
  layoutDescription: string
  layoutFeatures: Feature[]

  // Section 3 (Creative Direction)
  creativeImg: string
  creativeTitle: string
  creativeDescription: string
  creativeFeatures: Feature[]

  // Section 4 (Post Production)
  postProdImg: string
  postProdTitle: string
  postProdDescription: string
  postProdFeatures: Feature[]

  // Section 5 (Pricing)
  pricingTitle: string
  pricingPlans: PricingPlan[]
}

const services: Service[] = [
  {
    slug: 'video-production',

    // Section 1
    tagline: 'Engage and Inspire your Audience',
    title: 'Video Production',
    headerImg: '/images/services/video-header.png',
    headerDescription:
      'End‑to‑end video production: from concept and scripting through shooting, editing, color grading and final delivery.',

    // Section 2
    layoutImg: '/images/services/video-layout.png',
    layoutTitle: 'Our Process',
    layoutDescription:
      'We handle every stage of your video project with pro crews and cutting‑edge gear.',
    layoutFeatures: [
      {
        title: 'Scriptwriting & Storyboarding',
        description:
          'Мы разрабатываем сценарий и визуальный план для чёткого исполнения.'
      },
      {
        title: 'On‑location & Studio Shoots',
        description:
          'Съёмка на локации или в студии по вашему сценарию.'
      },
      {
        title: 'Editing, Color Grading & Motion Graphics',
        description:
          'Монтаж, цветокоррекция и анимация для динамичного результата.'
      },
      {
        title: 'Sound Design & Licensed Music',
        description:
          'Профессиональный звук и лицензированная музыка для полного погружения.'
      }
    ],

    // Section 3
    creativeImg: '/images/services/video-creative.png',
    creativeTitle: 'Creative Direction',
    creativeDescription:
      'Our creative directors ensure every кадр служит вашим маркетинговым целям.',
    creativeFeatures: [
      {
        title: 'Concept Development',
        description: 'Стратегическая проработка идеи перед съёмкой.'
      },
      {
        title: 'Storyboarding',
        description: 'Наглядная раскадровка ключевых сцен.'
      },
      {
        title: 'Art Direction',
        description: 'Контроль визуального стиля на площадке.'
      }
    ],

    // Section 4
    postProdImg: '/images/services/video-postprod.png',
    postProdTitle: 'Post Production',
    postProdDescription:
      'Финальная доводка: монтаж, цвет, звук и спецэффекты для идеального результата.',
    postProdFeatures: [
      {
        title: 'Editing',
        description: 'Чёткий монтаж с учётом темпа и ритма.'
      },
      {
        title: 'Color Grading',
        description: 'Профессиональная цветокоррекция для выдержанного стиля.'
      },
      {
        title: 'Sound Design',
        description: 'Создание звуковой атмосферы и микширование.'
      }
    ],

    // Section 5
    pricingTitle: 'Our Pricing Plans',
    pricingPlans: [
      {
        name: 'Starter',
        price: '$1500',
        features: [
          'Up to 5 hours of filming',
          '3 edited social media videos',
          'Basic editing (color, cut, captions)'
        ]
      },
      {
        name: 'Basic',
        price: '$2750',
        highlighted: true,
        features: [
          'Up to 15 hours of filming',
          '6 fully edited videos',
          'Story & concept support'
        ]
      },
      {
        name: 'Pro',
        price: '$4500',
        features: [
          'Up to 30 hours of production',
          '10+ high‑production videos',
          'Motion graphics & advanced editing'
        ]
      },
      {
        name: 'A‑la Carte',
        features: [
          'Custom hours & video count',
          'Any level of post‑production',
          'Platform‑optimized exports'
        ]
      }
    ]
  },

  // Добавьте аналогичные объекты для 'social-media-management', 'content-strategy' и т.д.
]

export default services
