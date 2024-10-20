'use client'

import Feed from '@/components/feed'
import RightSidebar from '@/components/rightSidebar'
import Sidebar from '@/components/sidebar'
import { useEffect, useState } from 'react'

const Homepage = () => {
  const [windowWidth, setWindowWidth] = useState(0) // Initialize with a default value

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    // Set initial width on mount
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="hidden md:flex flex-row fixed h-full lg:w-[14.5%]">
        <Sidebar />
        <div className="border-l border-gray-200 h-screen"></div>
      </div>

      <div className="flex md:flex-row lg:flex-row justify-center min-h-screen w-full">
        <div className="ml-56 flex flex-row justify-center sm:w-[90%] md:w-[70%] w-[84.5%]">
          <div className="">
            <Feed />
          </div>

          <div className="pl-20">{windowWidth >= 860 && <RightSidebar />}</div>
        </div>
      </div>
    </>
  )
}

export default Homepage
