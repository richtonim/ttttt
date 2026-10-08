import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon } from './Icons'
import { isWhitelisted } from '../utils/whitelist'

interface WhitelistGateProps {
  isOpen: boolean
  onClose: () => void
  mode: 'login' | 'register' | 'purchase'
  onSuccess?: () => void
}

export default function WhitelistGate({ isOpen, onClose, mode, onSuccess }: WhitelistGateProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const titles = {
    login: 'Log In',
    register: 'Create Account',
    purchase: 'Complete Purchase',
  }

  const descriptions = {
    login: 'Access is currently limited to whitelisted accounts.',
    register: 'Registration is invite-only. Enter your whitelisted email to create an account.',
    purchase: 'Purchasing requires a whitelisted account. Please verify your email to continue.',
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!isWhitelisted(email)) {
      setError('This email is not on the whitelist. Please contact us for access.')
      return
    }

    if (mode !== 'purchase' && password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setSuccess(true)
    setTimeout(() => {
      onSuccess?.()
      onClose()
      setSuccess(false)
      setEmail('')
      setPassword('')
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whitelist-title"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative glass-card p-8 w-full max-w-md"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
              aria-label="Close"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            {success ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {mode === 'login' ? 'Welcome back!' : mode === 'register' ? 'Account created!' : 'Purchase initiated!'}
                </h3>
                <p className="text-sm text-muted">Redirecting you now...</p>
              </div>
            ) : (
              <>
                <h2 id="whitelist-title" className="text-xl font-semibold mb-2">
                  {titles[mode]}
                </h2>
                <p className="text-sm text-muted mb-6">{descriptions[mode]}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="gate-email" className="block text-sm font-medium mb-1.5">
                      Email
                    </label>
                    <input
                      id="gate-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm focus:outline-none focus:border-accent/50"
                    />
                  </div>

                  {mode !== 'purchase' && (
                    <div>
                      <label htmlFor="gate-password" className="block text-sm font-medium mb-1.5">
                        Password
                      </label>
                      <input
                        id="gate-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm focus:outline-none focus:border-accent/50"
                      />
                    </div>
                  )}

                  {error && (
                    <p className="text-sm text-red-400" role="alert">
                      {error}
                    </p>
                  )}

                  <button type="submit" className="btn-primary w-full text-sm">
                    {mode === 'login' ? 'Log In' : mode === 'register' ? 'Create Account' : 'Continue to Purchase'}
                  </button>
                </form>

                <p className="text-xs text-muted mt-4 text-center">
                  Need access?{' '}
                  <a href="/contact" className="text-accent hover:text-accent-light transition-colors">
                    Contact us
                  </a>{' '}
                  to request whitelist approval.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
