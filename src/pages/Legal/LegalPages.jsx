import React from 'react'
import { Link } from 'react-router-dom'

// ── Política de Privacidad ───────────────────────────────────────
export function PoliticaPrivacidad() {
  return (
    <div className="legal-wrap">
      <span className="sec-label">Legal</span>
      <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, margin: '1rem 0 .5rem' }}>
        Política de Privacidad
      </h1>
      <p className="legal-date">Última actualización: 1 de mayo de 2025</p>

      <p>En <strong>La Vitrina</strong> nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe qué información recopilamos, cómo la usamos y tus derechos al respecto.</p>

      <h2>1. Responsable del tratamiento</h2>
      <p>El responsable del tratamiento de los datos personales es <strong>La Vitrina</strong>, con domicilio en Madrid, España, y correo electrónico de contacto: <a href="mailto:hola@lavitrina.es">hola@lavitrina.es</a>.</p>

      <h2>2. Datos que recopilamos</h2>
      <p>Podemos recopilar los siguientes tipos de datos:</p>
      <ul>
        <li><strong>Datos de contacto:</strong> nombre y dirección de correo electrónico cuando nos escribes a través del formulario de contacto o te suscribes a nuestra newsletter.</li>
        <li><strong>Datos de navegación:</strong> mediante cookies y herramientas de analítica, recopilamos información técnica sobre tu visita (páginas visitadas, tiempo de permanencia, dispositivo utilizado).</li>
        <li><strong>Datos de afiliados:</strong> cuando haces clic en enlaces de afiliado y realizas una compra, los programas de afiliación (como SHEIN Affiliates) pueden recopilar datos de transacción.</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <p>Utilizamos tus datos para:</p>
      <ul>
        <li>Gestionar tu suscripción a la newsletter y enviarte contenido editorial.</li>
        <li>Responder a tus consultas y mensajes de contacto.</li>
        <li>Analizar el uso del sitio web para mejorar nuestros contenidos y servicios.</li>
        <li>Gestionar las comisiones derivadas de los programas de afiliación.</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>El tratamiento se basa en el consentimiento que nos otorgas al suscribirte a la newsletter, rellenar el formulario de contacto o aceptar las cookies. Puedes retirar tu consentimiento en cualquier momento.</p>

      <h2>5. Conservación de datos</h2>
      <p>Conservamos tus datos el tiempo necesario para cumplir con la finalidad para la que fueron recogidos, y en todo caso mientras no ejerzas tu derecho de supresión.</p>

      <h2>6. Tus derechos</h2>
      <p>Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento, portabilidad y oposición al tratamiento de tus datos. Puedes ejercerlos escribiendo a <a href="mailto:hola@lavitrina.es">hola@lavitrina.es</a>.</p>

      <h2>7. Cookies</h2>
      <p>Este sitio utiliza cookies técnicas necesarias para su funcionamiento, cookies de analítica para medir el tráfico y cookies de afiliación para rastrear las comisiones. Puedes configurar tu navegador para rechazar las cookies no esenciales.</p>

      <h2>8. Contacto</h2>
      <p>Si tienes cualquier duda sobre esta política, escríbenos a <a href="mailto:hola@lavitrina.es">hola@lavitrina.es</a>. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>
    </div>
  )
}

// ── Aviso Legal ──────────────────────────────────────────────────
export function AvisoLegal() {
  return (
    <div className="legal-wrap">
      <span className="sec-label">Legal</span>
      <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, margin: '1rem 0 .5rem' }}>
        Aviso Legal
      </h1>
      <p className="legal-date">Última actualización: 1 de mayo de 2025</p>

      <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilita la siguiente información:</p>

      <h2>1. Datos identificativos</h2>
      <p><strong>Nombre del sitio web:</strong> La Vitrina</p>
      <p><strong>Dominio:</strong> lavitrina.es</p>
      <p><strong>País:</strong> España</p>
      <p><strong>Correo electrónico:</strong> <a href="mailto:hola@lavitrina.es">hola@lavitrina.es</a></p>

      <h2>2. Objeto y ámbito de aplicación</h2>
      <p>La Vitrina es un blog de contenido editorial sobre moda, estilo y tendencias. El acceso y uso de este sitio web está sujeto a las condiciones que se detallan en este Aviso Legal.</p>

      <h2>3. Propiedad intelectual</h2>
      <p>Los contenidos de este sitio web —textos, imágenes, diseño gráfico y código— son propiedad de La Vitrina o de sus legítimos titulares, y están protegidos por la legislación española e internacional de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa.</p>
      <p>Las imágenes de cabecera y de los artículos proceden de Unsplash y se utilizan bajo la licencia Unsplash.</p>

      <h2>4. Exclusión de garantías y responsabilidad</h2>
      <p>La Vitrina no se hace responsable de los daños o perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del sitio web, ni de la información contenida en él. Los contenidos tienen carácter meramente informativo y no constituyen asesoramiento profesional de ningún tipo.</p>

      <h2>5. Política de enlaces</h2>
      <p>Este sitio incluye enlaces a terceros (tiendas online, programas de afiliados, redes sociales). La Vitrina no tiene control sobre los sitios externos y no se responsabiliza de su contenido, disponibilidad o políticas de privacidad.</p>

      <h2>6. Ley aplicable y jurisdicción</h2>
      <p>Este Aviso Legal se rige por la legislación española. Para cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales de la ciudad de Madrid, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
    </div>
  )
}

// ── Política de Afiliados ────────────────────────────────────────
export function PoliticaAfiliados() {
  return (
    <div className="legal-wrap">
      <span className="sec-label">Legal</span>
      <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, margin: '1rem 0 .5rem' }}>
        Política de Afiliados
      </h1>
      <p className="legal-date">Última actualización: 1 de mayo de 2025</p>

      <p>En <strong>La Vitrina</strong> somos transparentes sobre cómo monetizamos nuestro contenido. Esta página explica con detalle qué son los enlaces de afiliado, cómo los usamos y qué significa esto para ti como lectora.</p>

      <h2>1. ¿Qué son los enlaces de afiliado?</h2>
      <p>Un enlace de afiliado es una URL especial que contiene un identificador único que nos vincula a nosotras como afiliadas de una tienda. Cuando haces clic en uno de estos enlaces y realizas una compra, la tienda nos paga una pequeña comisión. Esta comisión es pagada por la tienda, <strong>no por ti</strong>: el precio que pagas es exactamente el mismo que si hubieras ido directamente a la tienda.</p>

      <h2>2. Programas de afiliación con los que trabajamos</h2>
      <p>Actualmente La Vitrina participa en los siguientes programas de afiliación:</p>
      <ul>
        <li><strong>SHEIN Affiliates:</strong> programa oficial de afiliados de SHEIN. Identificamos estos enlaces con el atributo <code>rel="nofollow noopener noreferrer"</code> y los marcamos visualmente con el botón "Comprar en SHEIN" o similar.</li>
      </ul>

      <h2>3. Cómo identificamos los enlaces de afiliado</h2>
      <p>En La Vitrina utilizamos siempre los siguientes métodos de identificación:</p>
      <ul>
        <li>El aviso superior de la web: <em>"Esta web contiene enlaces de afiliado. Podemos recibir una comisión sin coste extra para ti."</em></li>
        <li>En los artículos del blog, incluimos una caja de aviso antes de los enlaces de afiliado.</li>
        <li>Los botones "Comprar en SHEIN" y "Ver en SHEIN" son siempre enlaces de afiliado.</li>
        <li>El pie de página incluye un aviso permanente sobre afiliados.</li>
      </ul>

      <h2>4. Nuestra política editorial</h2>
      <p>La presencia o ausencia de un enlace de afiliado nunca influye en nuestra opinión editorial. Solo recomendamos productos y tiendas que consideramos genuinamente buenos. No aceptamos pagos para escribir reseñas positivas ni para recomendar productos específicos.</p>

      <h2>5. Impacto en ti</h2>
      <p>Si compras a través de nuestros enlaces de afiliado:</p>
      <ul>
        <li>El precio que pagas es exactamente el mismo que si accedieras directamente a la tienda.</li>
        <li>No compartimos datos personales tuyos con los programas de afiliados, solo se registra la transacción.</li>
        <li>Las comisiones que recibimos nos permiten mantener el blog activo y publicar contenido de calidad de forma gratuita.</li>
      </ul>

      <h2>6. Contacto</h2>
      <p>Si tienes alguna duda sobre nuestra política de afiliados, puedes escribirnos a <a href="mailto:hola@lavitrina.es">hola@lavitrina.es</a>. También puedes leer más información en nuestra <Link to="/sobre-nosotras">página sobre nosotras</Link>.</p>
    </div>
  )
}

// ── Default exports ──────────────────────────────────────────────
export default PoliticaPrivacidad
