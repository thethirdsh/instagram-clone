'use client'

import Footer from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/authentication/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Login successful, redirect or store token
        console.log('Login successful:', data)
        router.push('/homepage')
      } else {
        // Handle error response
        setError(data.error || 'Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col bg-white text-black w-full h-full">
      <div className="flex flex-col items-center py-16 lg:py-28">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center border-[1px] border-gray-300 w-[335px] h-[409px]">
            <p className="text-5xl font-semibold text-black font-dancingScript pt-8">
              Instagram
            </p>
            <form
              onSubmit={handleLogin}
              className="flex flex-col items-center pt-14 w-full h-[50%]"
            >
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 h-10 focus:outline-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1px] border-gray-300 rounded w-[80%] text-xs font-light bg-[#FAFAFA] mt-2 pl-2.5 h-10 focus:outline-gray-500"
              />
              <button
                type="submit"
                className="flex justify-center items-center bg-[#0099FF] rounded-lg w-[80%] mt-4 h-8"
                disabled={loading}
              >
                <p className="text-white text-sm font-medium">
                  {loading ? 'Logging in...' : 'Log in'}
                </p>
              </button>
            </form>
            {error && (
              <p className="text-red-500 text-xs mt-2">
                {error}
              </p>
            )}
            <div className="flex flex-row items-center gap-5 pt-4 w-[80%]">
              <hr className="w-[39%] border-gray-300" />
              <p className="text-sm font-medium text-gray-500">OR</p>
              <hr className="w-[39%] border-gray-300" />
            </div>
            <Link className="pt-8" href="/forgot-password">
              <p className="text-[#003366] text-sm font-light">
                Forgot password?
              </p>
            </Link>
          </div>
          <div className="flex justify-center items-center border-[1px] border-gray-300 text-sm mt-2.5 w-[335px] h-16">
            <Link href="/signup">
              Don&apos;t have an account?
              <span className="font-semibold text-[#0099FF]"> Sign up</span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex pt-36">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Login
