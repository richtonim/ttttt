import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Digest from './pages/Digest';
import Telemetry from './pages/Telemetry';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import ApiDocs from './pages/Api';
import Whitelist from './pages/Whitelist';
import Login from './pages/Login';
import Register from './pages/Register';
import Purchase from './pages/Purchase';
import Dashboard from './pages/Dashboard';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/digest" element={<Digest />} />
        <Route path="/telemetry" element={<Telemetry />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api" element={<ApiDocs />} />
        <Route path="/whitelist" element={<Whitelist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
