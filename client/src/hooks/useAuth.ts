import { useState, useEffect } from 'react'

interface User {
  userId: string | null
  username: string | null
}

export function useAuth() {
  const [user, setUser] = useState<User>({ userId: null, username: null })
  const [loading, setLoading] = useState<boolean>(true)

  // Function to fetch user data from the server
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/authentication/token', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any required authorization headers here (e.g., token)
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }

      const data = await response.json()
      setUser({ userId: data.userId, username: data.username })
    } catch (error) {
      console.error('An error occurred', error)
      setUser({ userId: null, username: null })
    } finally {
      setLoading(false)
    }
  }

  // Load user data on component mount
  useEffect(() => {
    fetchUser()
  }, []) // Empty dependency array means it runs once when the component mounts

  // Function to set user data
  const setAuth = (userData: User) => setUser(userData)

  // Function to clear user data (logout)
  const clearAuth = () => setUser({ userId: null, username: null })

  return {
    user,
    setAuth,
    clearAuth,
    loading,
  }
}
