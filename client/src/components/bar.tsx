'use client'

import { PiHouseBold } from 'react-icons/pi'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine } from 'react-icons/ri'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'

const Bar = () => {
  return (
    <div className="bg-white text-black md:hidden flex flex-row justify-between items-center border-t-[1px] fixed bottom-0 left-0 right-0 w-full h-[50px] bg-white p-4 z-50">
      <Link
        href="/homepage"
        className="flex items-center rounded-lg hover:bg-gray-200"
      >
        <PiHouseBold className="text-2xl" />
      </Link>
      <Link
        href="/explore"
        className="flex items-center rounded-lg hover:bg-gray-200"
      >
        <FaRegCompass className="text-2xl" />
      </Link>
      <Link
        href="/reels"
        className="flex items-center rounded-lg hover:bg-gray-200"
      >
        <BiMoviePlay className="text-2xl" />
      </Link>
      <button className="flex items-center rounded-lg hover:bg-gray-200">
        <FaRegSquarePlus className="text-2xl" />
      </button>
      <Link
        href="/messages"
        className="flex items-center rounded-lg hover:bg-gray-200"
      >
        <RiMessengerLine className="text-2xl" />
      </Link>
      <Link
        href="/profile"
        className="flex items-center rounded-lg hover:bg-gray-200"
      >
        <CgProfile className="text-2xl" />
      </Link>
    </div>
  )
}

export default Bar
