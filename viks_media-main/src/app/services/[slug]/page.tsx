// src/app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import services, { Service } from '@/data/services'
import styles from './ServicePage.module.css'

// чтобы Next.js заранее знал все slug
export const generateStaticParams = () =>
  services.map(s => ({ slug: s.slug }))

interface Props { params: { slug: string } }

export default function ServicePage({ params }: Props) {
  const service = services.find((s: Service) => s.slug === params.slug)
  if (!service) return notFound()

  return (
    <div className={styles.pageContainer}>
      {/* здесь ваш JSX из ServicePage, только вместо статичных значений используйте поля service. */}
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      {/* ...и так для headerImg, layoutFeatures, pricingPlans и т.д. */}
    </div>
  )
}
