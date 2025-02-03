import React, { createContext, useContext, useEffect, useState } from 'react'

interface User {
  userId: string | null
  username: string | null
}

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  refreshUser: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/authentication/token', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) throw new Error('Failed to fetch user data')

      const data = await response.json()
      setUser({ userId: data.id, username: data.username })
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred')
      } else {
        setError('An error occurred')
      }
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const logout = () => {
    setUser(null)
    // Optionally, call an API to log out the user
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, error, refreshUser: fetchUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
