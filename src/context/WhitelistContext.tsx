import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'

const STORAGE_KEY = 'interiorpup_whitelist'
const SESSION_KEY = 'interiorpup_session'

/** Demo whitelist for frontend preview — replace with API in production */
const SEED_WHITELIST = [
  'partner@interiorpup.com',
  'architect@demo.com',
  'design@proptech.io',
]

type WhitelistContextValue = {
  emails: string[]
  isWhitelisted: (email: string) => boolean
  requestAccess: (email: string, company?: string, role?: string) => void
  pendingRequests: { email: string; company: string; role: string; at: string }[]
  sessionEmail: string | null
  login: (email: string) => { ok: boolean; message: string }
  logout: () => void
  register: (email: string, name: string) => { ok: boolean; message: string }
}

const WhitelistContext = createContext<WhitelistContextValue | null>(null)

function normalize(email: string) {
  return email.trim().toLowerCase()
}

export function WhitelistProvider({ children }: { children: ReactNode }) {
  const [emails, setEmails] = useState<string[]>(SEED_WHITELIST)
  const [pendingRequests, setPendingRequests] = useState<
    { email: string; company: string; role: string; at: string }[]
  >([])
  const [sessionEmail, setSessionEmail] = useState<string | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as string[]
        setEmails(Array.from(new Set([...SEED_WHITELIST, ...parsed])))
      }
      const session = localStorage.getItem(SESSION_KEY)
      if (session) setSessionEmail(session)
      const pending = localStorage.getItem(`${STORAGE_KEY}_pending`)
      if (pending) setPendingRequests(JSON.parse(pending))
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo<WhitelistContextValue>(
    () => ({
      emails,
      pendingRequests,
      sessionEmail,
      isWhitelisted: (email: string) => emails.includes(normalize(email)),
      requestAccess: (email, company = '', role = '') => {
        const entry = {
          email: normalize(email),
          company,
          role,
          at: new Date().toISOString(),
        }
        setPendingRequests((prev) => {
          const next = [...prev.filter((p) => p.email !== entry.email), entry]
          localStorage.setItem(`${STORAGE_KEY}_pending`, JSON.stringify(next))
          return next
        })
      },
      login: (email) => {
        const e = normalize(email)
        if (!emails.includes(e)) {
          return {
            ok: false,
            message:
              'This email is not on the access whitelist. Request early access first.',
          }
        }
        setSessionEmail(e)
        localStorage.setItem(SESSION_KEY, e)
        return { ok: true, message: 'Signed in successfully.' }
      },
      logout: () => {
        setSessionEmail(null)
        localStorage.removeItem(SESSION_KEY)
      },
      register: (email, _name) => {
        const e = normalize(email)
        if (!emails.includes(e)) {
          return {
            ok: false,
            message:
              'Registration is whitelist-only. Join the waitlist to request access.',
          }
        }
        setSessionEmail(e)
        localStorage.setItem(SESSION_KEY, e)
        return { ok: true, message: 'Account ready. Welcome to INTERIORPUP.AI.' }
      },
    }),
    [emails, pendingRequests, sessionEmail],
  )

  return (
    <WhitelistContext.Provider value={value}>{children}</WhitelistContext.Provider>
  )
}

export function useWhitelist() {
  const ctx = useContext(WhitelistContext)
  if (!ctx) throw new Error('useWhitelist must be used within WhitelistProvider')
  return ctx
}
