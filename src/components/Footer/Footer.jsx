import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const EXPLORE = [
  { to: '/',           label: 'Inicio' },
  { to: '/outfits',    label: 'Outfits' },
  { to: '/tendencias', label: 'Tendencias' },
  { to: '/blog',       label: 'Blog' },
]
const LEGAL = [
  { to: '/sobre-nosotras',      label: 'Sobre Nosotras' },
  { to: '/contacto',            label: 'Contacto' },
  { to: '/politica-afiliados',  label: 'Política de Afiliados' },
  { to: '/politica-privacidad', label: 'Privacidad' },
  { to: '/aviso-legal',         label: 'Aviso Legal' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">

          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="La Vitrina — inicio">
              <span className="footer__logo-mark">La Vitrina</span>
              <span className="footer__logo-sub">MODA · ESTILO · TENDENCIAS</span>
            </Link>
            <p>Tu revista de moda y estilo. Outfits aesthetic, tendencias virales y los mejores fashion finds al mejor precio.</p>
            <div className="footer__social" aria-label="Redes sociales">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer__social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="footer__social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441l.302-1.28s-.77-1.542-.77-3.822c0-3.584 2.079-6.267 4.664-6.267 2.2 0 3.266 1.652 3.266 3.63 0 2.21-1.41 5.52-2.14 8.593-.608 2.566 1.288 4.654 3.82 4.654 4.576 0 7.655-5.86 7.655-12.795 0-5.268-3.558-9.256-9.48-9.256-6.984 0-11.379 5.24-11.379 11.035 0 2.25.64 3.793 1.65 5.01.184.218.21.41.155.63l-.52 2.078c-.082.33-.277.4-.638.24-2.38-1.09-3.862-4.54-3.862-7.955 0-6.655 5.583-14.71 16.66-14.71 8.75 0 14.46 6.37 14.46 13.22 0 9.097-5.024 15.875-12.44 15.875-2.502 0-4.857-1.34-5.664-2.904l-1.54 5.908c-.558 2.137-2.065 4.817-3.073 6.444.52.16 1.065.245 1.625.245C18.627 24 24 18.627 24 12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__links">
            <div className="footer__col">
              <h3 className="footer__col-title">Explorar</h3>
              <ul>
                {EXPLORE.map(({ to, label }) => (
                  <li key={to}><Link to={to}>{label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title">Categorías</h3>
              <ul>
                <li><Link to="/blog">Fashion Finds</Link></li>
                <li><Link to="/blog">Outfits Aesthetic</Link></li>
                <li><Link to="/blog">Guías de Estilo</Link></li>
                <li><Link to="/blog">Ropa Viral TikTok</Link></li>
              </ul>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title">La Vitrina</h3>
              <ul>
                {LEGAL.map(({ to, label }) => (
                  <li key={to}><Link to={to}>{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliate notice */}
        <div className="footer__aff-notice">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>
            Esta web puede contener <strong>enlaces de afiliado</strong>. Si compras a través de nuestros enlaces
            podemos recibir una pequeña comisión sin coste adicional para ti.{' '}
            <Link to="/politica-afiliados">Política de afiliados</Link>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {year} La Vitrina. Todos los derechos reservados.</p>
          <div className="footer__bottom-links">
            <Link to="/politica-privacidad">Privacidad</Link>
            <Link to="/aviso-legal">Aviso Legal</Link>
            <Link to="/politica-afiliados">Afiliados</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
