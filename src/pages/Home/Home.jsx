import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/HeroSection'
import BlogCard from '../../components/BlogCard/BlogCard'
import OutfitCard from '../../components/OutfitCard/OutfitCard'
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection'
import AffiliateButton from '../../components/AffiliateButton/AffiliateButton'
import { BLOG_POSTS, OUTFITS, TENDENCIAS } from '../../data/content'
import './Home.css'

export default function Home() {
  const featured  = BLOG_POSTS.filter(p => p.featured).slice(0, 3)
  const topOutfits = OUTFITS.slice(0, 4)
  const topTrends  = TENDENCIAS.slice(0, 3)

  return (
    <>
      <HeroSection />

      {/* ── Featured Articles ───────────────────────────── */}
      <section className="section-pad" aria-labelledby="blog-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-header-left">
              <span className="sec-label">Lo más leído</span>
              <h2 className="sec-title" id="blog-heading">Artículos destacados</h2>
            </div>
            <Link to="/blog" className="view-all">Ver todos</Link>
          </div>
          <div className="grid-3">
            {featured.map(p => <BlogCard key={p.id} post={p} large={p.featured} />)}
          </div>
        </div>
      </section>

      {/* ── Mid Banner ──────────────────────────────────── */}
      <section className="home-banner" aria-label="Promoción afiliados SHEIN">
        <div className="container">
          <div className="home-banner__inner">
            <div className="home-banner__copy">
              <span className="home-banner__kicker">Colección primavera · verano 2025</span>
              <h2>Los fashion finds<br /><em>que no te puedes perder</em></h2>
              <p>
                Hemos seleccionado las piezas más impresionantes de la temporada. Calidad
                sorprendente, precios que no te creerás.
              </p>
              <AffiliateButton
                path="/category/Women-sc-00002.html"
                className="btn btn-accent"
                icon={false}
              >
                Ver la selección en SHEIN
              </AffiliateButton>
              <p className="home-banner__disclaimer">
                * Enlace de afiliado. Sin coste extra para ti.
              </p>
            </div>
            <div className="home-banner__imgs" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=440&q=80" alt="" className="home-banner__img home-banner__img-1" />
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=440&q=80" alt="" className="home-banner__img home-banner__img-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Outfits ─────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="outfits-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-header-left">
              <span className="sec-label">Inspiración diaria</span>
              <h2 className="sec-title" id="outfits-heading">Outfits de la semana</h2>
              <p className="sec-sub">Looks completos con todos los detalles y dónde conseguirlos.</p>
            </div>
            <Link to="/outfits" className="view-all">Ver todos</Link>
          </div>
          <div className="grid-4">
            {topOutfits.map(o => <OutfitCard key={o.id} outfit={o} />)}
          </div>
        </div>
      </section>

      {/* ── Tendencias Strip ────────────────────────────── */}
      <section className="home-trends section-pad" aria-labelledby="trends-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-header-left">
              <span className="sec-label">Ahora mismo</span>
              <h2 className="sec-title" id="trends-heading">Tendencias en alza</h2>
            </div>
            <Link to="/tendencias" className="view-all">Ver todas</Link>
          </div>
          <div className="trends-row">
            {topTrends.map(t => (
              <Link to="/tendencias" key={t.id} className="trend-chip">
                <div className="trend-chip__img">
                  <img src={t.image} alt={t.title} loading="lazy" />
                </div>
                <div className="trend-chip__body">
                  <span className="trend-chip__icon">{t.icon}</span>
                  <div className="trend-chip__info">
                    <h3>{t.title}</h3>
                    <p>{t.description}</p>
                  </div>
                  <span className="trend-chip__level" style={{ color: t.levelColor }}>
                    ↑ {t.level}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aesthetic Categories ────────────────────────── */}
      <section className="section-pad" aria-labelledby="aesthetics-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-header-left">
              <span className="sec-label">Por estética</span>
              <h2 className="sec-title" id="aesthetics-heading">Tu estilo, tu identidad</h2>
            </div>
          </div>
          <div className="aesthetics-grid">
            {[
              { name: 'Clean Girl',    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80' },
              { name: 'Coastal',       img: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&q=80' },
              { name: 'Dark Academia', img: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=400&q=80' },
              { name: 'Soft Romantic', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80' },
              { name: 'Street Chic',  img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80' },
              { name: 'Boho Summer',  img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80' },
            ].map(a => (
              <Link to="/outfits" key={a.name} className="aes-chip">
                <img src={a.img} alt={`Estética ${a.name}`} loading="lazy" />
                <div className="aes-chip__overlay">
                  <span>{a.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
