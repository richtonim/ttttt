import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ClaimEngine } from './pages/ClaimEngine'
import { FraudGuard } from './pages/FraudGuard'
import { Benchmarks } from './pages/Benchmarks'
import { SDK } from './pages/SDK'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Purchase } from './pages/Purchase'
import { Pricing } from './pages/Pricing'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/claim-engine" element={<ClaimEngine />} />
            <Route path="/fraud-guard" element={<FraudGuard />} />
            <Route path="/benchmarks" element={<Benchmarks />} />
            <Route path="/sdk" element={<SDK />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
