'use client'

import Footer from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Signup = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  // const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    // setError('')
    setSuccess(false)
    console.log(success)
    // setLoading(true)

    try {
      const response = await fetch('/api/authentication/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        console.log('Signup successful:', data)
        router.push('/homepage')
      } else {
        // setError(data.error || 'Signup failed')
      }
    } catch (err) {
      console.error('Signup error:', err)
      // setError('Something went wrong. Please try again.')
    } finally {
      // setLoading(false)
    }
  }

  return (
    <div className="flex flex-col bg-white w-full h-full">
      <div className="flex flex-col items-center py-16 lg:py-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center border-[1px] border-gray-300 w-[335px] h-[510px]">
            <p className="text-5xl font-semibold text-black font-dancingScript pb-2">
              Instagram
            </p>
            <p className="text-center font-semibold text-gray-500 pt-4 w-[80%]">
              {' '}
              Sign up to see photos and videos from your friends.
            </p>
            <form
              onSubmit={handleSignup}
              className="flex flex-col justify-center items-center pt-2"
            >
              <input
                type="text"
                placeholder="Mobile Number or Email"
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 h-10 focus:outline-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-1.5 h-10 focus:outline-gray-500"
              />
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-1.5 h-10 focus:outline-gray-500"
              />
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-1.5 h-10 focus:outline-gray-500"
              />
              <p className="text-center text-xs text-gray-500 font-light pt-4 w-[80%]">
                People who use our service may have uploaded your contact
                information to Instagram.{' '}
                <span className="text-[#003366] text-xs font-light">
                  {' '}
                  Learn More
                </span>
              </p>
              <p className="text-center text-xs text-gray-500 font-light pt-4 w-[80%]">
                By signing up, you agree to our{' '}
                <span className="text-[#003366]"> Terms </span> ,{' '}
                <span className="text-[#003366]"> Privacy Policy</span> and{' '}
                <span className="text-[#003366]"> Cookies Policy </span> .
              </p>
              <button
                type="submit"
                className="flex justify-center items-center bg-[#0099FF] rounded-lg w-[80%] mt-4 h-8"
              >
                <p className="text-white text-sm font-medium">Sign up</p>
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center border-[1px] border-gray-300 text-sm mt-2.5 w-[335px] h-16">
            <p>
              Have an account?
              <Link href="/login">
                <span className="font-semibold text-[#0099FF]"> Log in</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex mt-28">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Signup
