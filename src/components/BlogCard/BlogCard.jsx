import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.css'

export default function BlogCard({ post, large = false }) {
  return (
    <article className={`blog-card ${large ? 'blog-card--large' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="blog-card__img-wrap" tabIndex="-1" aria-hidden="true">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className={`tag blog-card__tag ${post.tagClass}`}>{post.tag}</span>
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__cat">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{post.date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="blog-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="blog-card__cta" aria-label={`Leer: ${post.title}`}>
          Leer artículo
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  )
}
