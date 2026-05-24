import React from 'react'
import AffiliateButton from '../AffiliateButton/AffiliateButton'
import './OutfitCard.css'

export default function OutfitCard({ outfit }) {
  return (
    <article className="outfit-card">
      {/* Image */}
      <div className="outfit-card__img-wrap">
        <img src={outfit.image} alt={outfit.title} loading="lazy" />
        <div className="outfit-card__hover-overlay" aria-hidden="true">
          <AffiliateButton
            path={outfit.sheinPath}
            className="btn btn-shein outfit-card__shop-btn"
            icon={true}
          >
            Comprar en SHEIN
          </AffiliateButton>
        </div>
        <span className="outfit-card__aesthetic">{outfit.aesthetic}</span>
        <span className="outfit-card__season tag tag-sand">{outfit.season}</span>
      </div>

      {/* Body */}
      <div className="outfit-card__body">
        <div className="outfit-card__row">
          <h3 className="outfit-card__title">{outfit.title}</h3>
          <span className="outfit-card__price">{outfit.priceRange}</span>
        </div>
        <p className="outfit-card__desc">{outfit.description}</p>
        <div className="outfit-card__footer">
          <div className="outfit-card__tags" aria-label="Etiquetas">
            {outfit.tags.map(t => (
              <span key={t} className="tag tag-sand outfit-card__tag-chip">{t}</span>
            ))}
          </div>
          <AffiliateButton
            path={outfit.sheinPath}
            className="outfit-card__link"
            icon={false}
          >
            Ver outfit
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </AffiliateButton>
        </div>
      </div>
    </article>
  )
}
