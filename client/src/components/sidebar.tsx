'use client'

import { PiHouseBold } from 'react-icons/pi'
import { FiSearch } from 'react-icons/fi'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from 'react-icons/fa'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'
import { FaThreads } from 'react-icons/fa6'
import { LuAlignJustify } from 'react-icons/lu'
import { useRouter } from 'next/navigation'

const Sidebar = () => {
  const router = useRouter()

  return (
      <div className="flex flex-col pt-2 pb-2 pr-2 pl-2 justify-between w-full h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="pl-4 pr-3 pt-6 pb-4 mb-5 font-dancingScript font-black w-full text-xl md:text-2xl lg:text-3xl">Instagram</div>
          <div className="flex flex-col w-full">
            <button
              onClick={() => router.push('/homepage')}
              className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center"
            >
              <PiHouseBold className="text-3xl" />
              <p className="text-xs md:text-sm lg:text-base pl-4">Home</p>
            </button>
            <button className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center">
              <FiSearch className="text-3xl" />
              <p className="text-xs md:text-sm lg:text-base pl-4">Search</p>
            </button>
            <button className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center">
              <FaRegCompass className="text-3xl" />
              <p className="text-xs md:text-sm lg:text-base pl-4">Explore</p>
            </button>
            <button className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center">
              <BiMoviePlay className="text-3xl" />
              <p className="text-xs md:text-sm lg:text-base pl-4">Reels</p>
            </button>
            <button className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center">
              <RiMessengerLine className="text-3xl" />
              <p className="text-xs md:text-sm lg:text-base pl-4">Messages</p>
            </button>
            <button className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center">
              <FaRegHeart className="text-3xl" />
              <p className="text-xs md:text-sm lg:text-base pl-4">Notifications</p>
            </button>
            <button className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center">
              <FaRegSquarePlus className="text-3xl" />
              <p className="text-xs md:text-sm lg:text-base pl-4">Create</p>
            </button>
            <button
              onClick={() => router.push('/profile')}
              className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center"
            >
              <CgProfile className="text-3xl" />
              <p className="text-xs md:text-sm lg:text-base pl-4">Profile</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="pl-3 pt-2 pb-2 mb-1 mt-1 w-full flex flex-row items-center">
            <FaThreads className="text-3xl" />
            <p className="text-xs md:text-sm lg:text-base pl-4">Threads</p>
          </button>
          <button className="pl-3 pt-2 pb-2 mb-1 mt-1 w-full flex flex-row items-center">
            <LuAlignJustify className="text-3xl" />
            <p className="text-xs md:text-sm lg:text-base pl-4">More</p>
          </button>
        </div>
      </div>
  )
}

export default Sidebar
