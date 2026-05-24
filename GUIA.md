# 🛍️ La Vitrina — Guía de instalación y despliegue

Web editorial de moda para el programa SHEIN Affiliates.
Stack: React 18 + Vite 5 + React Router 6 + CSS puro.

---

## ⚡ Lo primero: activa tu ID de afiliado

Cuando SHEIN te dé tu ID de afiliado, abre este único archivo y sustitúyelo:

```
src/config/affiliate.js
```

Cambia todas las ocurrencias de `TU_ID_AQUI` por tu ID real. Todos los botones
"Comprar en SHEIN" y "Ver en SHEIN" de la web se actualizarán automáticamente.

**Ejemplo:**
```js
// Antes
affiliateId: 'TU_ID_AQUI',
affiliateUrl: 'https://www.shein.com/promotion/shein-affiliate-landing.html?ref=TU_ID_AQUI',

// Después (ejemplo)
affiliateId: 'abc123xyz',
affiliateUrl: 'https://www.shein.com/promotion/shein-affiliate-landing.html?ref=abc123xyz',
```

---

## 1. Requisitos previos

- **Node.js 18+** — descarga en https://nodejs.org
- **npm** (viene con Node) o **pnpm** / **yarn**
- **Git** — descarga en https://git-scm.com
- Una cuenta en **GitHub** (gratis) — https://github.com
- Una cuenta en **Vercel** (gratis) — https://vercel.com

Verifica tu instalación:
```bash
node --version   # debe mostrar v18 o superior
npm --version    # debe mostrar 9 o superior
git --version
```

---

## 2. Instalar dependencias

```bash
# Entra en la carpeta del proyecto
cd la-vitrina

# Instala todas las dependencias
npm install
```

---

## 3. Ejecutar en local (modo desarrollo)

```bash
npm run dev
```

Abre tu navegador en **http://localhost:5173** — la web se recarga automáticamente
al guardar cambios.

---

## 4. Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` con la web optimizada lista para subir.
Para previsualizar el build localmente:
```bash
npm run preview
# Abre http://localhost:4173
```

---

## 5. Subir a GitHub

### 5a. Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `la-vitrina` (o el que prefieras)
3. Selecciona **Private** (recomendado) o Public
4. **No** marques "Initialize this repository"
5. Haz clic en **Create repository**

### 5b. Subir el código

```bash
# Dentro de la carpeta la-vitrina
git init
git add .
git commit -m "feat: La Vitrina — web de afiliados SHEIN inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/la-vitrina.git
git push -u origin main
```

Sustituye `TU_USUARIO` por tu nombre de usuario de GitHub.

---

## 6. Desplegar gratis en Vercel

### Opción A — Despliegue desde la web de Vercel (más fácil)

1. Ve a https://vercel.com y regístrate con tu cuenta de GitHub
2. Haz clic en **Add New Project**
3. Importa el repositorio `la-vitrina` de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz clic en **Deploy**

En ~2 minutos tendrás tu web en una URL tipo:
`https://la-vitrina-tu-usuario.vercel.app`

### Opción B — Despliegue desde terminal

```bash
# Instala Vercel CLI (solo la primera vez)
npm install -g vercel

# Despliega
vercel

# Sigue el asistente:
# - Set up and deploy: Y
# - Scope: elige tu cuenta
# - Link to existing project: N
# - Project name: la-vitrina
# - Directory: ./
# - Override settings: N
```

### Actualizaciones futuras

Cada vez que hagas `git push`, Vercel redesplegará automáticamente.

---

## 7. Conectar dominio personalizado

### En Vercel

1. Abre tu proyecto en https://vercel.com/dashboard
2. Ve a **Settings → Domains**
3. Escribe tu dominio (ej: `lavitrina.es`) y haz clic en **Add**
4. Vercel te dará dos opciones de configuración DNS

### En tu proveedor de dominio (ej: GoDaddy, Namecheap, Ionos)

**Opción A — CNAME (recomendado para subdominios):**
```
Tipo:  CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

**Opción B — A Record (para dominio raíz):**
```
Tipo:  A
Nombre: @
Valor: 76.76.21.21
```

Los cambios DNS tardan entre 5 minutos y 48 horas en propagarse.
Vercel asigna certificado HTTPS automáticamente.

---

## 8. Estructura del proyecto

```
la-vitrina/
├── index.html                    ← Meta tags SEO, Google Fonts
├── vite.config.js
├── package.json
└── src/
    ├── App.jsx                   ← Router principal con todas las rutas
    ├── main.jsx                  ← Entry point
    ├── config/
    │   └── affiliate.js          ← ⭐ ÚNICO ARCHIVO QUE DEBES EDITAR
    ├── data/
    │   └── content.js            ← Todos los posts, outfits y tendencias
    ├── styles/
    │   └── global.css            ← Variables CSS, reset, componentes globales
    ├── components/
    │   ├── Navbar/               ← Sticky, blur, hamburguesa mobile
    │   ├── Footer/               ← Links, redes sociales, disclaimer
    │   ├── AffiliateNotice/      ← Barra superior con aviso legal
    │   ├── AffiliateButton/      ← Botón central de afiliado (usa affiliate.js)
    │   ├── BlogCard/             ← Tarjeta de artículo
    │   ├── OutfitCard/           ← Tarjeta de outfit con hover overlay
    │   ├── HeroSection/          ← Hero pantalla completa
    │   └── NewsletterSection/    ← Formulario de newsletter
    └── pages/
        ├── Home/                 ← /
        ├── Blog/                 ← /blog
        ├── BlogPost/             ← /blog/:slug
        ├── Outfits/              ← /outfits
        ├── Tendencias/           ← /tendencias
        ├── SobreNosotras/        ← /sobre-nosotras
        ├── Contacto/             ← /contacto
        ├── Legal/                ← /politica-privacidad, /aviso-legal, /politica-afiliados
        └── NotFound/             ← 404
```

---

## 9. Personalización rápida

### Cambiar nombre/logo
Edita las referencias a "La Vitrina" en:
- `index.html` — meta tags y título
- `src/components/Navbar/Navbar.jsx` — logo
- `src/components/Footer/Footer.jsx` — logo y copyright

### Añadir artículos al blog
Edita el array `BLOG_POSTS` en `src/data/content.js`. Cada post tiene:
```js
{
  id, slug, title, excerpt, category, tag, tagClass,
  date, readTime, image, featured, sheinPath, content: [...], 
  affiliateBannerText, affiliateButtonText
}
```

### Añadir outfits
Edita el array `OUTFITS` en `src/data/content.js`.

### Cambiar colores
Edita las variables CSS en `src/styles/global.css` dentro del bloque `:root`.

---

## 10. Checklist antes de enviar a SHEIN Affiliates

- [ ] Reemplazar `TU_ID_AQUI` por tu ID real en `src/config/affiliate.js`
- [ ] Web desplegada en dominio propio (ej: lavitrina.es)
- [ ] Todos los botones de SHEIN apuntan correctamente con tu `?ref=TU_ID`
- [ ] La barra de aviso de afiliados es visible
- [ ] La página `/politica-afiliados` está accesible
- [ ] La página `/sobre-nosotras` incluye el disclosure de afiliados
- [ ] El footer muestra el disclaimer de afiliados
- [ ] La web tiene al menos 6 artículos con contenido real
- [ ] La web es mobile-friendly (prueba en Chrome DevTools)
- [ ] Certificado HTTPS activo (Vercel lo hace automático)

---

## 11. Comandos de referencia rápida

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo (localhost:5173)
npm run build      # Build de producción → carpeta dist/
npm run preview    # Previsualizar el build (localhost:4173)
git add . && git commit -m "update" && git push   # Deploy a Vercel
```

---

## 12. Soporte

Si algo no funciona:
- Verifica que tienes Node 18+ con `node --version`
- Borra `node_modules` y vuelve a hacer `npm install`
- Comprueba que no hay errores en la consola del navegador (F12)

---

*La Vitrina — web editorial de moda para SHEIN Affiliates*
