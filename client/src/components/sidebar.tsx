'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { PiHouseBold } from 'react-icons/pi'
import { FiSearch } from 'react-icons/fi'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { FaThreads } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import Upload from './upload'
import DropdownButton from './dropdownButton'

const Sidebar = () => {
  const user = useSelector((state: RootState) => state.user)
  console.log(user)

  return (
    <>
      <div className="flex flex-col bg-white pt-2 pb-2 pr-2 pl-2 justify-between w-full h-screen">
        <div className="flex flex-col justify-center items-center">
          <Link
            href="/homepage"
            className="pl-4 pr-3 pt-6 pb-4 mb-5 font-dancingScript font-black w-full text-xl md:text-2xl lg:text-3xl"
          >
            <FaInstagram className="lg:hidden text-black text-2xl" />
            <p className="hidden text-black font-dancingScript lg:flex">
              Instagram
            </p>
          </Link>
          <div className="flex flex-col text-black w-full">
            <Link
              href="/homepage"
              className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center rounded-lg hover:bg-gray-200"
            >
              <PiHouseBold className="text-3xl" />
              <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
                Home
              </p>
            </Link>
            <button className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center rounded-lg hover:bg-gray-200">
              <FiSearch className="text-3xl" />
              <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
                Search
              </p>
            </button>
            <Link
              href="/explore"
              className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center rounded-lg hover:bg-gray-200"
            >
              <FaRegCompass className="text-3xl" />
              <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
                Explore
              </p>
            </Link>
            <Link
              href="/reels"
              className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center rounded-lg hover:bg-gray-200"
            >
              <BiMoviePlay className="text-3xl" />
              <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
                Reels
              </p>
            </Link>
            <Link
              href="/messages"
              className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center rounded-lg hover:bg-gray-200"
            >
              <RiMessengerLine className="text-3xl" />
              <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
                Messages
              </p>
            </Link>
            <button className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center rounded-lg hover:bg-gray-200">
              <FaRegHeart className="text-3xl" />
              <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
                Notifications
              </p>
            </button>
            <Upload />
            <Link
              href={`/${user.username}`}
              className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center rounded-lg hover:bg-gray-200"
            >
              <CgProfile className="text-3xl" />
              <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
                Profile
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-black">
          <Link
            href=""
            className="pl-3 pt-2 pb-2 mb-1 mt-1 w-full flex flex-row items-center rounded-lg hover:bg-gray-200"
          >
            <FaThreads className="text-3xl" />
            <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
              Threads
            </p>
          </Link>
          <div className="flex w-full">
            <DropdownButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
