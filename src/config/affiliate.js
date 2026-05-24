// ============================================================
//  LA VITRINA — CONFIGURACIÓN DE AFILIADOS
//  ⚠️  Cambia TU_ID_AQUI por tu ID real de SHEIN Affiliates
//  Una vez tengas tu ID, solo edita este archivo y todos
//  los enlaces de la web se actualizarán automáticamente.
// ============================================================

export const AFFILIATE_CONFIG = {
  // Tu ID de afiliado de SHEIN (sustitúyelo cuando lo tengas)
  affiliateId: 'TU_ID_AQUI',

  // URL base de SHEIN
  baseUrl: 'https://www.shein.com',

  // URL principal de afiliado (landing page oficial)
  affiliateUrl: 'https://www.shein.com/promotion/shein-affiliate-landing.html?ref=TU_ID_AQUI',

  // Parámetro de tracking que se añade a cualquier URL de SHEIN
  trackingParam: 'ref=TU_ID_AQUI',
}

/**
 * Genera una URL de SHEIN con tu parámetro de afiliado.
 * Uso: buildAffiliateUrl('/category/Women-Dresses-sc-00865.html')
 * → 'https://www.shein.com/category/Women-Dresses-sc-00865.html?ref=TU_ID_AQUI'
 */
export function buildAffiliateUrl(path = '') {
  if (!path) return AFFILIATE_CONFIG.affiliateUrl
  const base = AFFILIATE_CONFIG.baseUrl.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const sep = cleanPath.includes('?') ? '&' : '?'
  return `${base}${cleanPath}${sep}${AFFILIATE_CONFIG.trackingParam}`
}
