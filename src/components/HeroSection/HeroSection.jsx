import React from 'react'
import { Link } from 'react-router-dom'
import AffiliateButton from '../AffiliateButton/AffiliateButton'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Portada principal">
      {/* Background */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=85"
          alt="Moda y tendencias La Vitrina"
          fetchpriority="high"
        />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="container hero__content">
        <div className="hero__text anim-up">
          <span className="hero__kicker">Primavera · Verano 2025</span>
          <h1 className="hero__title">
            Tu moda,<br />
            <em>tu manera</em>
          </h1>
          <p className="hero__desc">
            Outfits aesthetic, tendencias virales y los fashion finds que van
            a transformar tu armario esta temporada.
          </p>
          <div className="hero__btns">
            <Link to="/outfits" className="btn btn-dark">
              Ver outfits
            </Link>
            <AffiliateButton
              path="/category/Women-sc-00002.html"
              className="btn btn-outline-light"
              icon={false}
            >
              Comprar en SHEIN
            </AffiliateButton>
          </div>
        </div>

        {/* Stats */}
        <div className="hero__stats anim-up anim-d2">
          {[
            { n: '50+',    label: 'Outfits' },
            { n: 'Semanal',label: 'Actualizaciones' },
            { n: '100%',   label: 'Editorial' },
          ].map(({ n, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <div className="hero__stats-sep" aria-hidden="true" />}
              <div className="hero__stat">
                <span className="hero__stat-n">{n}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-bar" />
      </div>
    </section>
  )
}
