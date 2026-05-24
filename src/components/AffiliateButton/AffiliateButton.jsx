import React from 'react'
import { buildAffiliateUrl, AFFILIATE_CONFIG } from '../../config/affiliate'

/**
 * AffiliateButton
 * Botón reutilizable que siempre genera una URL de afiliado correcta.
 *
 * Props:
 *  - path       (string)  ruta relativa de SHEIN, ej: '/category/Women-Dresses.html'
 *  - children   (node)    texto del botón
 *  - className  (string)  clases CSS adicionales
 *  - icon       (bool)    mostrar icono de carrito
 */
export default function AffiliateButton({
  path = '',
  children = 'Comprar en SHEIN',
  className = 'btn btn-shein',
  icon = true,
  ...rest
}) {
  const url = path ? buildAffiliateUrl(path) : AFFILIATE_CONFIG.affiliateUrl

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
      {...rest}
    >
      {icon && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      )}
      {children}
    </a>
  )
}
