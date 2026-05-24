import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AffiliateNotice.css'

export default function AffiliateNotice() {
  const [closed, setClosed] = useState(false)
  if (closed) return null

  return (
    <div className="aff-notice" role="status" aria-live="polite">
      <div className="aff-notice__inner container">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>
          Esta web contiene <strong>enlaces de afiliado</strong>. Podemos recibir una comisión
          sin coste extra para ti si compras a través de nuestros enlaces.{' '}
          <Link to="/politica-afiliados">Más info</Link>
        </p>
        <button
          className="aff-notice__close"
          onClick={() => setClosed(true)}
          aria-label="Cerrar aviso de afiliados"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
