import React from 'react'
import { Link } from 'react-router-dom'
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection'
import './SobreNosotras.css'

export default function SobreNosotras() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="sec-label">Quiénes somos</span>
          <h1>Sobre La Vitrina</h1>
          <p>Un espacio dedicado a la moda con autenticidad, creatividad y accesibilidad.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          <div className="about-layout">

            <div className="about-content">
              <span className="sec-label">Nuestra historia</span>
              <h2 className="about-h2">
                Nació de una obsesión por la moda<br /><em>accesible y sin pretensiones</em>
              </h2>
              <div className="divider" />
              <p>La Vitrina nació en 2023 como un pequeño blog personal y se convirtió rápidamente en un punto de referencia para las que buscan inspiración de moda sin barreras económicas ni actitudes elitistas.</p>
              <p>Creemos que la moda no debería ser un privilegio. Que puedes vestirte de manera increíble con un presupuesto ajustado. Que las tendencias son para disfrutarlas, no para esclavizarte. Y que tu estilo es una extensión de tu identidad, no de tu cuenta corriente.</p>
              <p>Cada semana publicamos outfits completos, análisis de tendencias y los mejores fashion finds que encontramos navegando sin descanso por las tiendas online. Nuestra especialidad son esas piezas que parecen caras pero que vienen con un precio sorprendente.</p>

              <div className="about-values">
                <h3>Lo que nos mueve</h3>
                <div className="values-grid">
                  {[
                    { icon: '✦', t: 'Autenticidad',    d: 'Solo recomendamos lo que nos gusta de verdad. Ningún patrocinio cambia nuestra opinión editorial.' },
                    { icon: '◆', t: 'Accesibilidad',   d: 'Moda increíble no tiene por qué ser cara. Encontramos las mejores piezas para cualquier presupuesto.' },
                    { icon: '●', t: 'Transparencia',   d: 'Cuando usamos enlaces de afiliado lo decimos siempre. Sin sorpresas, sin letras pequeñas.' },
                    { icon: '▲', t: 'Creatividad',     d: 'La moda es arte. Nos gusta mezclar estéticas, romper reglas y proponer combinaciones inesperadas.' },
                  ].map(v => (
                    <div key={v.t} className="value-item">
                      <span className="value-item__icon">{v.icon}</span>
                      <div>
                        <h4>{v.t}</h4>
                        <p>{v.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="about-sidebar">
              <div className="about-img-stack" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80" alt="" className="about-img about-img-main" />
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80" alt="" className="about-img about-img-sec" />
              </div>
              <div className="about-numbers">
                {[
                  { n: '50+', label: 'Outfits publicados' },
                  { n: '6',   label: 'Posts nuevos al mes' },
                  { n: '2K+', label: 'Lectoras mensuales' },
                ].map(s => (
                  <div key={s.label} className="about-num">
                    <span className="about-num__n">{s.n}</span>
                    <span className="about-num__label">{s.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="about-aff section-pad">
        <div className="container">
          <div className="about-aff__inner">
            <div className="about-aff__icon" aria-hidden="true">💡</div>
            <div>
              <h3>Sobre nuestros enlaces de afiliado</h3>
              <p>La Vitrina trabaja con programas de afiliación como <strong>SHEIN Affiliates</strong>. Esto significa que cuando haces clic en algunos de nuestros enlaces y realizas una compra, podemos recibir una pequeña comisión — completamente sin coste extra para ti.</p>
              <p>Estos ingresos nos ayudan a mantener el blog activo y publicar contenido nuevo cada semana. Nuestra política es no recomendar jamás algo que no consideramos genuinamente bueno, independientemente de si tiene enlace de afiliado o no.</p>
              <Link to="/politica-afiliados" className="view-all">
                Leer política completa de afiliados →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
