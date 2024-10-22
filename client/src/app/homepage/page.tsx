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
    <div className="flex flex-row w-full h-full">
      <div className="hidden md:flex flex-row fixed h-full lg:w-[14.5%]">
        <Sidebar />
        <div className="border-l border-gray-200 h-screen"></div>
      </div>

      <div className="flex flex-row w-full h-full">
        <div className="flex flex-row justify-center pl-6 md:pl-44 w-full h-full">
          <div className="w-[90%] md:w-[70%] lg:w-[48%] h-full">
            <Feed />
          </div>

          <div className="pl-6">{windowWidth >= 860 && <RightSidebar />}</div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
