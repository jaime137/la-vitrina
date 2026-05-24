import React, { useState } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection'
import { BLOG_POSTS, CATEGORIES } from '../../data/content'
import './Blog.css'

export default function Blog() {
  const [active, setActive] = useState('Todo')
  const filtered = active === 'Todo' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === active)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="sec-label">El blog</span>
          <h1>Moda, estilo &amp; tendencias</h1>
          <p>Artículos, guías y los mejores fashion finds. Todo lo que necesitas para estar siempre al día.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          {/* Filtros */}
          <div className="filters-row" role="group" aria-label="Filtrar artículos por categoría">
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`filter-btn ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid-3">
              {filtered.map(p => <BlogCard key={p.id} post={p} large={p.featured} />)}
            </div>
          ) : (
            <p className="blog-empty">No hay artículos en esta categoría todavía. ¡Vuelve pronto!</p>
          )}
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
