'use client'

// import jwt, { JwtPayload } from 'jsonwebtoken'
import Image from 'next/image'
import { useEffect, useState } from 'react'
// import { NextRequest } from 'next/server'
import { useAuth } from '@/context/AuthProvider'

interface User {
  profileImage?: string
  username: string
  name?: string
}

const RightSidebar = () => {
  const { user, loading } = useAuth()
  console.log(useAuth())
  console.log('User ID:', user?.userId)

  const [loggedInUser, setLoggedInUser] = useState<User | null>(null)
  const [infoLoading, setInfoLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!user) return

    const fetchUserInfo = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`/api/users/?id=${user.userId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch user data')
        }

        const data = await response.json()
        setLoggedInUser(data)
        setInfoLoading(false)
      } catch (err: unknown) {
        setInfoLoading(false)
        console.error('Error fetching user data:', err)
      }
    }

    fetchUserInfo()
  }, [user])

  if (infoLoading) {
    return <></>
  }

  if (loading) {
    return <></> // Show this while fetching user data
  }

  return (
    <div className="flex flex-col bg-white mt-10 gap-7 w-full h-full">
      <div className="flex flex-row justify-between w-72">
        <div className="flex flex-row gap-3.5">
          <div className="w-11 h-11 relative rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex justify-center items-center p-[2px]">
            <button className="relative w-10 h-10">
              <Image
                className="border-2 border-white rounded-full"
                src={loggedInUser?.profileImage || '/images/profile.png'}
                fill={true}
                alt="/images/profile.png"
              />
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold text-black">
              {loggedInUser?.username || 'username'}
            </p>
            <p className="text-sm text-gray-500">
              {loggedInUser?.name || 'Full Name'}
            </p>
          </div>
        </div>

        <button className="bg-white font-semibold text-xs text-blue-500">
          Switch
        </button>
      </div>
      <div className="flex flex-col gap-4 w-72">
        <div className="flex flex-row justify-between w-72">
          <p className="text-sm text-gray-500 font-semibold">
            Suggested for you
          </p>
          <p className="text-xs font-semibold text-black">See All</p>
        </div>
        <div className="flex flex-row justify-between w-72">
          <div className="flex flex-row gap-3.5">
            <button className="rounded-full bg-white flex items-center justify-center">
              <Image
                src="/images/profile.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </button>

            <div className="flex flex-col">
              <p className="text-sm font-bold text-black">Username</p>
              <p className="text-sm text-gray-500">Followed by user.name</p>
            </div>
          </div>

          <button className="bg-white font-semibold text-xs text-blue-500">
            Follow
          </button>
        </div>
        <div className="flex flex-row justify-between w-72">
          <div className="flex flex-row gap-3.5">
            <button className="rounded-full bg-white flex items-center justify-center">
              <Image
                src="/images/profile.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </button>

            <div className="flex flex-col">
              <p className="text-sm font-bold text-black">Username</p>
              <p className="text-sm text-gray-500">Followed by user.name</p>
            </div>
          </div>

          <button className="bg-white font-semibold text-xs text-blue-500">
            Follow
          </button>
        </div>
        <div className="flex flex-row justify-between w-72">
          <div className="flex flex-row gap-3.5">
            <button className="rounded-full bg-white flex items-center justify-center">
              <Image
                src="/images/profile.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </button>

            <div className="flex flex-col">
              <p className="text-sm font-bold text-black">Username</p>
              <p className="text-sm text-gray-500">Followed by user.name</p>
            </div>
          </div>

          <button className="bg-white font-semibold text-xs text-blue-500">
            Follow
          </button>
        </div>
        <div className="flex flex-row justify-between w-72">
          <div className="flex flex-row gap-3.5">
            <button className="rounded-full bg-white flex items-center justify-center">
              <Image
                src="/images/profile.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </button>

            <div className="flex flex-col">
              <p className="text-sm font-bold text-black">Username</p>
              <p className="text-sm text-gray-500">Followed by user.name</p>
            </div>
          </div>

          <button className="bg-white font-semibold text-xs text-blue-500">
            Follow
          </button>
        </div>
        <div className="flex flex-row justify-between w-72">
          <div className="flex flex-row gap-3.5">
            <button className="rounded-full bg-white flex items-center justify-center">
              <Image
                src="/images/profile.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </button>

            <div className="flex flex-col">
              <p className="text-sm font-bold text-black">Username</p>
              <p className="text-sm text-gray-500">Followed by user.name</p>
            </div>
          </div>

          <button className="bg-white font-semibold text-xs text-blue-500">
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
