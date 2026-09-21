import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { isWhitelisted } from '../data/whitelist'

export type UserSession = {
  email: string
  name: string
}

type AuthContextValue = {
  user: UserSession | null
  login: (email: string, password: string) => { ok: boolean; message: string }
  register: (
    name: string,
    email: string,
    password: string,
  ) => { ok: boolean; message: string }
  logout: () => void
  canPurchase: boolean
}

const STORAGE_KEY = 'claimease-session'
const USERS_KEY = 'claimease-users'

const AuthContext = createContext<AuthContextValue | null>(null)

function readUsers(): Record<string, { name: string; password: string }> {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '{}')
  } catch {
    return {}
  }
}

function writeUsers(users: Record<string, { name: string; password: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function readSession(): UserSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as UserSession) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(() => readSession())

  const value = useMemo<AuthContextValue>(() => {
    return {
      user,
      canPurchase: Boolean(user && isWhitelisted(user.email)),
      login: (email, password) => {
        if (!isWhitelisted(email)) {
          return {
            ok: false,
            message:
              'This email is not on the early-access whitelist. Request access to continue.',
          }
        }
        const users = readUsers()
        const key = email.trim().toLowerCase()
        const existing = users[key]
        if (!existing || existing.password !== password) {
          return {
            ok: false,
            message: 'Invalid credentials for a whitelisted account.',
          }
        }
        const session = { email: key, name: existing.name }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
        setUser(session)
        return { ok: true, message: 'Signed in successfully.' }
      },
      register: (name, email, password) => {
        if (!isWhitelisted(email)) {
          return {
            ok: false,
            message:
              'Registration is whitelist-only. Your email is not approved yet.',
          }
        }
        if (password.length < 8) {
          return { ok: false, message: 'Password must be at least 8 characters.' }
        }
        const users = readUsers()
        const key = email.trim().toLowerCase()
        if (users[key]) {
          return { ok: false, message: 'Account already exists. Please sign in.' }
        }
        users[key] = { name: name.trim() || 'Partner', password }
        writeUsers(users)
        const session = { email: key, name: users[key].name }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
        setUser(session)
        return { ok: true, message: 'Whitelist verified. Account created.' }
      },
      logout: () => {
        localStorage.removeItem(STORAGE_KEY)
        setUser(null)
      },
    }
  }, [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
