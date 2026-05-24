import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NewsletterSection.css'

export default function NewsletterSection() {
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor introduce un email válido.')
      return
    }
    setError('')
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="newsletter section-pad" aria-labelledby="newsletter-title">
      <div className="container">
        <div className="newsletter__inner">
          <div className="newsletter__deco" aria-hidden="true">
            <span>✦</span><span>✦</span><span>✦</span>
          </div>
          <span className="sec-label">Newsletter semanal</span>
          <h2 id="newsletter-title" className="newsletter__title">
            Tendencias directas<br /><em>a tu bandeja</em>
          </h2>
          <p className="newsletter__sub">
            Cada lunes: los outfits más virales, los fashion finds que merecen la pena
            y las tendencias que van a arrastrar la semana. Sin spam, solo moda.
          </p>

          {!submitted ? (
            <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
              <div className={`newsletter__field ${error ? 'newsletter__field--error' : ''}`}>
                <input
                  type="email"
                  className="newsletter__input"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError('') }}
                  aria-label="Correo electrónico para newsletter"
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  required
                />
                <button type="submit" className="btn btn-dark newsletter__btn">
                  Suscribirme
                </button>
              </div>
              {error && (
                <p id="newsletter-error" className="newsletter__error" role="alert">{error}</p>
              )}
              <p className="newsletter__legal">
                Sin spam. Puedes darte de baja cuando quieras.{' '}
                <Link to="/politica-privacidad">Política de privacidad</Link>
              </p>
            </form>
          ) : (
            <div className="newsletter__success" role="status" aria-live="polite">
              <div className="newsletter__success-icon" aria-hidden="true">✓</div>
              <p>¡Perfecto! Ya estás en la lista. Cada lunes recibirás lo mejor de la moda directamente en tu email.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
