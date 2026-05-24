import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__inner">
        <span className="notfound__code">404</span>
        <h1 className="notfound__title">Página no encontrada</h1>
        <p>La página que buscas no existe o ha sido movida. Vuelve al inicio o explora nuestras secciones.</p>
        <div className="notfound__links">
          <Link to="/" className="btn btn-dark">Volver al inicio</Link>
          <Link to="/blog" className="btn btn-outline">Ver el blog</Link>
          <Link to="/outfits" className="btn btn-outline">Ver outfits</Link>
        </div>
      </div>
    </div>
  )
}
