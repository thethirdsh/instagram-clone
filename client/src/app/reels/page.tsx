'use client'

import Bar from '@/components/bar'
import Reel from '@/components/reel'
import Sidebar from '@/components/sidebar'

const Reels = () => {
  return (
    <>
      <div className="flex flex-row bg-white w-screen h-screen">
        <div className="hidden md:flex flex-row fixed lg:w-[14.5%] h-full">
          <Sidebar />
          <div className="border-l border-gray-200 h-screen"></div>
        </div>
        <div className="flex flex-col items-center overflow-y-auto gap-4 pt-8 w-full h-full">
          <div className="md:pl-60">
            <Reel />
          </div>
          <div className="md:pl-60">
            <Reel />
          </div>
          <div className="md:pl-60">
            <Reel />
          </div>
          <div className="md:pl-60">
            <Reel />
          </div>
          <div className="md:pl-60">
            <Reel />
          </div>
          <div className="md:pl-60">
            <Reel />
          </div>
        </div>
      </div>
      <div className="pt-20 md:pt-0 sticky md:relative z-50">
        <Bar />
      </div>
    </>
  )
}

export default Reels
