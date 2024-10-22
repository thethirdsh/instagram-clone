'use client'

import { PiHouseBold } from 'react-icons/pi'
import { FiSearch } from 'react-icons/fi'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'
import { FaThreads } from 'react-icons/fa6'
import { LuAlignJustify } from 'react-icons/lu'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
const MessagesSidebar = () => {
  return (
    <div className="flex flex-col pt-2 pb-2 pr-1.5 pl-2 justify-between w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <Link href="/homepage" className="flex items-center rounded-lg pl-4 pr-3 pt-6 pb-4 mb-5 font-dancingScript font-black w-full text-xl md:text-2xl lg:text-3xl hover:bg-gray-200">
          <FaInstagram className="" />
        </Link>
        <div className="flex flex-col w-full">
          <Link
            href="/homepage"
            className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200"
          >
            <PiHouseBold className="text-3xl" />
          </Link>
          <button className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200">
            <FiSearch className="text-3xl" />
          </button>
          <Link href="/explore" className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200">
            <FaRegCompass className="text-3xl" />
          </Link>
          <Link href="reels" className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200">
            <BiMoviePlay className="text-3xl" />
          </Link>
          <Link href="messages" className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200">
            <RiMessengerLine className="text-3xl" />
          </Link>
          <button className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200">
            <FaRegHeart className="text-3xl" />
          </button>
          <button className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200">
            <FaRegSquarePlus className="text-3xl" />
          </button>
          <Link
            href="/profile"
            className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200"
          >
            <CgProfile className="text-3xl" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <button className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200 w-full">
          <FaThreads className="text-3xl" />
        </button>
        <button className="pt-2 pb-2 mb-1 mt-1 flex flex-row justify-center items-center rounded-lg hover:bg-gray-200 w-full">
          <LuAlignJustify className="text-3xl" />
        </button>
      </div>
    </div>
  )
}

export default MessagesSidebar
