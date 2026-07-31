import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Solutions from './pages/Solutions'
import Infrastructure from './pages/Infrastructure'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Pricing from './pages/Pricing'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="platform" element={<Platform />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
