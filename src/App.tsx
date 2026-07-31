import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { WhitelistProvider } from './context/WhitelistContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { Features } from './pages/Features'
import { Pricing } from './pages/Pricing'
import { Demo } from './pages/Demo'
import { Docs } from './pages/Docs'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Waitlist } from './pages/Waitlist'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <WhitelistProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="demo" element={<Demo />} />
            <Route path="docs" element={<Docs />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="waitlist" element={<Waitlist />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WhitelistProvider>
  )
}
