import React, { useState } from 'react'
import OutfitCard from '../../components/OutfitCard/OutfitCard'
import AffiliateButton from '../../components/AffiliateButton/AffiliateButton'
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection'
import { OUTFITS, AESTHETICS } from '../../data/content'
import './Outfits.css'

export default function Outfits() {
  const [active, setActive] = useState('Todo')
  const filtered = active === 'Todo' ? OUTFITS : OUTFITS.filter(o => o.aesthetic === active)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="sec-label">Inspiración diaria</span>
          <h1>Outfits &amp; Looks</h1>
          <p>Looks completos para copiar, con todos los detalles y dónde conseguirlos al mejor precio.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          {/* Filtros */}
          <div className="outfits-filters">
            <span className="outfits-filters__label">Filtrar por estética:</span>
            <div className="filters-row" role="group" aria-label="Filtrar outfits por estética">
              {AESTHETICS.map(a => (
                <button
                  key={a}
                  className={`filter-btn ${active === a ? 'active' : ''}`}
                  onClick={() => setActive(a)}
                  aria-pressed={active === a}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="outfits-grid">
              {filtered.map(o => <OutfitCard key={o.id} outfit={o} />)}
            </div>
          ) : (
            <p className="outfits-empty">No hay outfits con esta estética todavía. ¡Vuelve pronto!</p>
          )}

          {/* Banner afiliado */}
          <div className="outfits-banner" aria-label="Comprar outfits en SHEIN">
            <span className="sec-label">¿Te gustan estos looks?</span>
            <h2>Encuéntralos todos en SHEIN</h2>
            <p>Envío a España, devolución fácil y precios que no te creerás.</p>
            <div className="outfits-banner__actions">
              <AffiliateButton
                path="/category/Women-sc-00002.html"
                className="btn btn-shein"
              >
                Explorar en SHEIN
              </AffiliateButton>
              <span className="outfits-banner__disc">* Enlace de afiliado. Sin coste extra para ti.</span>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
