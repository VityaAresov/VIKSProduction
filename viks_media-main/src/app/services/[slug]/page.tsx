import { notFound } from 'next/navigation'
import Image from 'next/image'
import services, { Service } from '@/data/services'
import styles from './ServicePage.module.css'

export const generateStaticParams = () =>
  services.map((s) => ({ slug: s.slug }))

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s: Service) => s.slug === params.slug)
  if (!service) return notFound()

  return (
    <div className={styles.pageContainer}>

      {/* Header */}
      <section className={styles.headerSection}>
        <div className={styles.headerContentContainer}>
          <p className={styles.tagline}>{service.tagline}</p>
          <h1 className={styles.heading1}>{service.title}</h1>
          <p className={styles.description1}>{service.headerDescription}</p>
        </div>
        <Image
          src={service.headerImg}
          alt={service.title}
          width={591}
          height={388}
          className={styles.headerImage}
        />
      </section>

      {/* Layout */}
      <section className={styles.layoutSection}>
        <Image
          src={service.layoutImg}
          alt={service.layoutTitle}
          width={600}
          height={606}
          className={styles.layoutImage}
        />
        <div className={styles.layoutContentContainer}>
          <h2 className={styles.heading2}>{service.layoutTitle}</h2>
          <p className={styles.description2}>{service.layoutDescription}</p>
          <div className={styles.featuresList}>
            {service.layoutFeatures.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <p className={styles.featureTitle}>{f.title}</p>
                <p className={styles.featureDescription}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Direction */}
      <section className={styles.creativeDirectionSection}>
        <div className={styles.creativeContentContainer}>
          <h2 className={styles.heading3}>{service.creativeTitle}</h2>
          <p className={styles.description3}>{service.creativeDescription}</p>
          <div className={`${styles.featuresList} ${styles.creativeFeaturesList}`}>
            {service.creativeFeatures.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <p className={styles.featureTitle}>{f.title}</p>
                <p className={styles.featureDescription}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={service.creativeImg}
          alt={service.creativeTitle}
          width={600}
          height={606}
          className={styles.creativeImage}
        />
      </section>

      {/* Post Production */}
      <section className={styles.postProductionSection}>
        <Image
          src={service.postProdImg}
          alt={service.postProdTitle}
          width={600}
          height={606}
          className={styles.postProdImage}
        />
        <div className={styles.postProdContentContainer}>
          <h2 className={styles.heading4}>{service.postProdTitle}</h2>
          <p className={styles.description4}>{service.postProdDescription}</p>
          <div className={styles.featuresList}>
            {service.postProdFeatures.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <p className={styles.featureTitle}>{f.title}</p>
                <p className={styles.featureDescription}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricingSection}>
        <h2 className={styles.pricingTitle}>{service.pricingTitle}</h2>
        <div className={styles.pricingCardsContainer}>
          {service.pricingPlans.map((p, i) => (
            <div
              key={i}
              className={`${styles.priceCard} ${p.highlighted ? styles.highlightedCard : ''}`}
            >
              <h3 className={styles.planName}>{p.name}</h3>
              {p.price && <p className={styles.planPrice}>{p.price}</p>}
              <ul className={styles.planFeatures}>
                {p.features.map((feat, j) => (
                  <li key={j} className={styles.planFeatureItem}>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>Ready to work with us?</p>
          <a href="/contact-us" className={styles.ctaButton}>
            Get Started
          </a>
        </div>
      </section>

    </div>
  )
}
