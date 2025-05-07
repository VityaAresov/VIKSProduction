import { notFound } from 'next/navigation'
import Image from 'next/image'
import services, { Service } from '@/data/services'
import styles from './ServicePage.module.css'

export const generateStaticParams = () =>
  services.map((s) => ({ slug: s.slug }))

export default function ServicePage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: any
}) {
  const service = services.find((s: Service) => s.slug === params.slug)
  if (!service) return notFound()

  return (
    <div className={styles.pageContainer}>
      {/* … ваш JSX … */}
    </div>
  )
}
