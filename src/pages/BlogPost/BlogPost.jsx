import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import BlogCard from '../../components/BlogCard/BlogCard'
import AffiliateButton from '../../components/AffiliateButton/AffiliateButton'
import { BLOG_POSTS } from '../../data/content'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  const related = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3)

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="post-hero">
        <img src={post.image} alt={post.title} className="post-hero__img" fetchpriority="high" />
        <div className="post-hero__overlay" />
        <div className="container post-hero__content">
          <div className="post-hero__meta">
            <span className={`tag ${post.tagClass}`}>{post.tag}</span>
            <span className="post-hero__cat">{post.category}</span>
            <span aria-hidden="true">·</span>
            <time>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} de lectura</span>
          </div>
          <h1 className="post-hero__title">{post.title}</h1>
        </div>
      </div>

      {/* ── Layout ───────────────────────────────────── */}
      <div className="container post-layout">

        {/* Content */}
        <div className="post-content">
          {post.content.map((block, i) => {
            if (block.type === 'intro') return (
              <p key={i} className="post-intro">{block.text}</p>
            )
            if (block.type === 'h2') return (
              <h2 key={i} className="post-h2">{block.text}</h2>
            )
            if (block.type === 'p') return (
              <p key={i} className="post-p">{block.text}</p>
            )
            if (block.type === 'tip') return (
              <div key={i} className="post-tip">{block.text}</div>
            )
            return null
          })}

          {/* Affiliate box */}
          <div className="post-aff-box" aria-label="Dónde encontrar estas prendas">
            <div className="post-aff-box__header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span>{post.affiliateBannerText}</span>
            </div>
            <p className="post-aff-box__note">
              ⚡ Los siguientes enlaces son de afiliado. Podemos recibir una comisión sin coste extra para ti.
            </p>
            <div className="post-aff-box__btns">
              <AffiliateButton path={post.sheinPath} className="btn btn-shein">
                {post.affiliateButtonText}
              </AffiliateButton>
              <AffiliateButton path="" className="btn btn-outline btn-sm" icon={false}>
                Ver todas las categorías
              </AffiliateButton>
            </div>
          </div>

          {/* Back link */}
          <Link to="/blog" className="post-back">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Volver al blog
          </Link>
        </div>

        {/* Sidebar */}
        <aside className="post-sidebar" aria-label="Información adicional">
          {/* Meta */}
          <div className="sidebar-widget">
            <h2 className="sidebar-widget__title">Sobre este artículo</h2>
            <ul className="sidebar-meta">
              <li><span>Publicado</span><span>{post.date}</span></li>
              <li><span>Categoría</span><span>{post.category}</span></li>
              <li><span>Lectura</span><span>{post.readTime}</span></li>
            </ul>
          </div>

          {/* CTA SHEIN */}
          <div className="sidebar-widget sidebar-cta">
            <p className="sidebar-cta__kicker">Fashion finds</p>
            <h2 className="sidebar-cta__title">Compra estos looks en SHEIN</h2>
            <p className="sidebar-cta__desc">
              Precios increíbles, envío a España y devolución fácil.
            </p>
            <AffiliateButton
              path={post.sheinPath}
              className="btn btn-shein"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Ver en SHEIN →
            </AffiliateButton>
            <p className="sidebar-cta__disc">* Enlace de afiliado</p>
          </div>

          {/* Share */}
          <div className="sidebar-widget">
            <h2 className="sidebar-widget__title">Comparte</h2>
            <div className="sidebar-share">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank" rel="noopener noreferrer"
                className="share-btn"
                aria-label="Compartir en Twitter"
              >
                Twitter / X
              </a>
              <a
                href={`https://www.pinterest.com/pin/create/button/?description=${encodeURIComponent(post.title)}&media=${encodeURIComponent(post.image)}`}
                target="_blank" rel="noopener noreferrer"
                className="share-btn"
                aria-label="Guardar en Pinterest"
              >
                Pinterest
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Related ──────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="related-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-header-left">
              <span className="sec-label">Sigue leyendo</span>
              <h2 className="sec-title" id="related-heading">Artículos relacionados</h2>
            </div>
          </div>
          <div className="grid-3">
            {related.map(p => <BlogCard key={p.id} post={p} />)}
          </div>
        </div>
      </section>
    </article>
  )
}
