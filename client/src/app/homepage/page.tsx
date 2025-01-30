'use client'

import Bar from '@/components/bar'
import Feed from '@/components/feed'
import RightSidebar from '@/components/rightSidebar'
import Sidebar from '@/components/sidebar'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/userSlice'
import { useEffect, useState } from 'react'

const Homepage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Check if the access token exists in the cookies
    const fetchToken = async () => {
      const response = await fetch('/api/authentication/token', {
        credentials: 'include', // Ensures cookies are sent with the request
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Data:', data)
        // const accessToken = data.accessToken.value
        setLoading(false)
        // You can store this in Redux or state

        // Assuming the token contains user information like `id`, `username`, etc.
        dispatch(
          setUser({
            userId: data.id,
            username: data.username,
          })
        )
      }
    }

    fetchToken()
  }, [dispatch])

  if (loading) {
    return <></>
  }

  return (
    <>
      <div className="flex flex-row bg-white w-full h-full">
        <div className="hidden md:flex flex-row fixed h-full lg:w-[14.5%]">
          <Sidebar />
          <div className="border-l border-gray-200 h-screen"></div>
        </div>

        <div className="flex flex-row w-full h-full">
          <div className="flex flex-row justify-center pl-6 md:pl-44 w-full h-full">
            <div className="w-[90%] md:w-[70%] lg:w-[48%] h-full">
              <Feed />
            </div>

            <div className="hidden lg:flex pl-6">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 md:pt-0 sticky md:relative z-50">
        <Bar />
      </div>
    </>
  )
}

export default Homepage
