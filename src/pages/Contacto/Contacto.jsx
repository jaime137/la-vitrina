import React, { useState } from 'react'
import './Contacto.css'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e = {}
    if (!form.nombre.trim())  e.nombre  = 'El nombre es obligatorio.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
                              e.email   = 'Introduce un email válido.'
    if (!form.asunto.trim())  e.asunto  = 'El asunto es obligatorio.'
    if (!form.mensaje.trim()) e.mensaje = 'El mensaje no puede estar vacío.'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setErrors(er => ({ ...er, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="sec-label">Escríbenos</span>
          <h1>Contacto</h1>
          <p>¿Tienes alguna pregunta, colaboración o simplemente quieres saludar? Estamos aquí.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          <div className="contact-layout">

            {/* Info */}
            <aside className="contact-info">
              <h2>Hablemos</h2>
              <p>Responderemos a tu mensaje en un plazo de 24–48 horas laborables.</p>
              <div className="contact-items">
                {[
                  { icon: '✉', label: 'Email general', val: 'hola@lavitrina.es' },
                  { icon: '🤝', label: 'Colaboraciones', val: 'colaboraciones@lavitrina.es' },
                  { icon: '📍', label: 'Ubicación', val: 'Madrid, España' },
                ].map(item => (
                  <div key={item.label} className="contact-item">
                    <span className="contact-item__icon">{item.icon}</span>
                    <div>
                      <span className="contact-item__label">{item.label}</span>
                      <span className="contact-item__val">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-notice">
                <strong>Colaboraciones y afiliados</strong>
                <p>Si eres marca o quieres saber más sobre nuestros enlaces de afiliado, escríbenos a colaboraciones@lavitrina.es e incluye información sobre tu marca o propuesta.</p>
              </div>
            </aside>

            {/* Form */}
            <div className="contact-form-wrap">
              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                  <div className="form-row">
                    <div className={`form-group ${errors.nombre ? 'form-group--error' : ''}`}>
                      <label htmlFor="nombre">Nombre *</label>
                      <input
                        id="nombre" name="nombre" type="text"
                        value={form.nombre} onChange={handleChange}
                        placeholder="Tu nombre completo"
                        aria-describedby={errors.nombre ? 'err-nombre' : undefined}
                        autoComplete="name"
                      />
                      {errors.nombre && <span id="err-nombre" className="form-error" role="alert">{errors.nombre}</span>}
                    </div>
                    <div className={`form-group ${errors.email ? 'form-group--error' : ''}`}>
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email" name="email" type="email"
                        value={form.email} onChange={handleChange}
                        placeholder="tu@email.com"
                        aria-describedby={errors.email ? 'err-email' : undefined}
                        autoComplete="email"
                      />
                      {errors.email && <span id="err-email" className="form-error" role="alert">{errors.email}</span>}
                    </div>
                  </div>
                  <div className={`form-group ${errors.asunto ? 'form-group--error' : ''}`}>
                    <label htmlFor="asunto">Asunto *</label>
                    <input
                      id="asunto" name="asunto" type="text"
                      value={form.asunto} onChange={handleChange}
                      placeholder="¿De qué se trata?"
                      aria-describedby={errors.asunto ? 'err-asunto' : undefined}
                    />
                    {errors.asunto && <span id="err-asunto" className="form-error" role="alert">{errors.asunto}</span>}
                  </div>
                  <div className={`form-group ${errors.mensaje ? 'form-group--error' : ''}`}>
                    <label htmlFor="mensaje">Mensaje *</label>
                    <textarea
                      id="mensaje" name="mensaje"
                      value={form.mensaje} onChange={handleChange}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={6}
                      aria-describedby={errors.mensaje ? 'err-mensaje' : undefined}
                    />
                    {errors.mensaje && <span id="err-mensaje" className="form-error" role="alert">{errors.mensaje}</span>}
                  </div>
                  <button type="submit" className="btn btn-dark contact-submit">
                    Enviar mensaje
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                  <p className="contact-legal">
                    Al enviar este formulario aceptas nuestra{' '}
                    <a href="/politica-privacidad">política de privacidad</a>.
                  </p>
                </form>
              ) : (
                <div className="contact-success" role="status" aria-live="polite">
                  <div className="contact-success__icon">✓</div>
                  <h2>¡Mensaje enviado!</h2>
                  <p>Gracias por escribirnos, {form.nombre || ''}. Responderemos a tu email en 24–48 horas laborables.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
