import React from 'react'
import { Link } from 'react-router-dom'
import AffiliateButton from '../../components/AffiliateButton/AffiliateButton'
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection'
import { TENDENCIAS } from '../../data/content'
import './Tendencias.css'

const COLORS = [
  { name: 'Melocotón',    hex: '#FFAA88', desc: 'Color del momento' },
  { name: 'Pistacho',     hex: '#A8C5A0', desc: 'Fresco y joven' },
  { name: 'Azul Porcelana', hex: '#A0B8D0', desc: 'Sofisticado' },
  { name: 'Rojo Tomate',  hex: '#D4523A', desc: 'Mediterráneo' },
  { name: 'Camel Intenso',hex: '#C9945A', desc: 'Neutro premium' },
  { name: 'Lavanda',      hex: '#C8B8D8', desc: 'Romántico' },
]

export default function Tendencias() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="sec-label">Lo que viene</span>
          <h1>Tendencias 2025</h1>
          <p>Las corrientes estéticas que definen la moda este año, analizadas para que puedas incorporarlas a tu estilo.</p>
        </div>
      </div>

      {/* Main trends grid */}
      <section className="section-pad" aria-labelledby="trends-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-header-left">
              <span className="sec-label">Primavera — Verano 2025</span>
              <h2 className="sec-title" id="trends-heading">Tendencias que arrasan ahora</h2>
            </div>
          </div>
          <div className="tend-grid">
            {TENDENCIAS.map(t => (
              <article key={t.id} className="tend-card">
                <div className="tend-card__img-wrap">
                  <img src={t.image} alt={t.title} loading="lazy" />
                  <span className="tend-card__icon-badge">{t.icon}</span>
                </div>
                <div className="tend-card__body">
                  <div className="tend-card__header">
                    <h3>{t.title}</h3>
                    <span className="tend-card__level" style={{ color: t.levelColor }}>↑ {t.level}</span>
                  </div>
                  <p>{t.description}</p>
                  <div className="tend-card__tags">
                    {t.tags.map(tag => (
                      <span key={tag} className="tag tag-sand" style={{ fontSize: '.6rem' }}>{tag}</span>
                    ))}
                  </div>
                  <AffiliateButton
                    path={t.sheinPath}
                    className="btn btn-shein btn-sm"
                    style={{ marginTop: 'var(--s4)' }}
                  >
                    Comprar esta tendencia
                  </AffiliateButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Color palette */}
      <section className="colors-section section-pad" aria-labelledby="colors-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-header-left">
              <span className="sec-label">Paleta de temporada</span>
              <h2 className="sec-title" id="colors-heading">Los colores del verano 2025</h2>
            </div>
          </div>
          <div className="colors-grid">
            {COLORS.map(c => (
              <div key={c.name} className="color-swatch">
                <div className="color-swatch__circle" style={{ background: c.hex }} />
                <span className="color-swatch__name">{c.name}</span>
                <span className="color-swatch__hex">{c.hex}</span>
                <span className="color-swatch__desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="tend-cta section-pad">
        <div className="container">
          <div className="tend-cta__inner">
            <span className="sec-label">Cómpralas ya</span>
            <h2>Todas las tendencias,<br /><em>en un solo lugar</em></h2>
            <p>SHEIN renueva su catálogo cada semana siguiendo las tendencias más actuales. Encuentra todas las prendas de este artículo y mucho más.</p>
            <div className="tend-cta__btns">
              <AffiliateButton path="/category/Women-sc-00002.html" className="btn btn-dark">
                Explorar en SHEIN
              </AffiliateButton>
              <Link to="/outfits" className="btn btn-outline">Ver outfits completos</Link>
            </div>
            <p className="tend-cta__disc">* Enlace de afiliado. Sin coste extra para ti.</p>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
