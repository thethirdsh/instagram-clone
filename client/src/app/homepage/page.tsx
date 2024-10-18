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
    <div className="flex md:flex-row lg:flex-row justify-center min-h-screen w-full">
      {windowWidth >= 1366 && (
        <div className="flex flex-row h-full md:flex md:w-[14.5%]">
          <Sidebar />
          <div className="border-l border-gray-200 h-screen"></div>
        </div>
      )}
      <div className="ml-0 flex flex-row justify-center w-[84.5%]">
        <div className="">
          <Feed />
        </div>

        <div className="pl-20">{windowWidth >= 860 && <RightSidebar />}</div>
      </div>
    </div>
  )
}

export default Homepage
