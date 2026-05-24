import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AffiliateNotice from './components/AffiliateNotice/AffiliateNotice'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/BlogPost/BlogPost'
import Outfits from './pages/Outfits/Outfits'
import Tendencias from './pages/Tendencias/Tendencias'
import SobreNosotras from './pages/SobreNosotras/SobreNosotras'
import Contacto from './pages/Contacto/Contacto'
import { PoliticaPrivacidad, AvisoLegal, PoliticaAfiliados } from './pages/Legal/LegalPages'
import NotFound from './pages/NotFound/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <AffiliateNotice />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/"                    element={<Home />} />
            <Route path="/blog"                element={<Blog />} />
            <Route path="/blog/:slug"          element={<BlogPost />} />
            <Route path="/outfits"             element={<Outfits />} />
            <Route path="/tendencias"          element={<Tendencias />} />
            <Route path="/sobre-nosotras"      element={<SobreNosotras />} />
            <Route path="/contacto"            element={<Contacto />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/aviso-legal"         element={<AvisoLegal />} />
            <Route path="/politica-afiliados"  element={<PoliticaAfiliados />} />
            <Route path="*"                    element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
