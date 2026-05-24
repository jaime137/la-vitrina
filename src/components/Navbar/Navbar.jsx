import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/',              label: 'Inicio',      end: true },
  { to: '/outfits',       label: 'Outfits' },
  { to: '/tendencias',    label: 'Tendencias' },
  { to: '/blog',          label: 'Blog' },
  { to: '/sobre-nosotras',label: 'Nosotras' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">

        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="La Vitrina — inicio">
          <span className="navbar__logo-mark">La Vitrina</span>
          <span className="navbar__logo-sub">MODA · ESTILO · TENDENCIAS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="navbar__actions">
          <Link to="/blog" className="btn btn-dark btn-sm navbar__cta">
            Descubrir
          </Link>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <nav className="navbar__mobile-nav">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contacto" className="navbar__mobile-link">Contacto</NavLink>
        </nav>
        <div className="navbar__mobile-footer">
          <Link to="/blog" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
            Ver últimas tendencias
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
