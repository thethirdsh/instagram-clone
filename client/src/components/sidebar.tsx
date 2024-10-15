import { PiHouseBold } from 'react-icons/pi'
import { FiSearch } from 'react-icons/fi'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaRegHeart } from 'react-icons/fa'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'
import { FaThreads } from 'react-icons/fa6'
import { LuAlignJustify } from 'react-icons/lu'

const Sidebar = () => {
  return (
    <div className="flex flex-row fixed">
      <div className="px-5 py-8 flex flex-col justify-between min-h-screen min-w-full gap-20">
      <p className="font-dancingScript font-black text-3xl">Instagram</p>
      <div className="-mt-56 flex flex-col gap-7">
        <div className="flex flex-row items-center gap-4">
          <PiHouseBold className="text-3xl" />
          <p className="text-base">Home</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <FiSearch className="text-3xl" />
          <p className="text-base">Search</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <FaRegCompass className="text-3xl" />
          <p className="text-base">Explore</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <BiMoviePlay className="text-3xl" />
          <p className="text-base">Reels</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <LiaFacebookMessenger className="text-3xl" />
          <p className="text-base">Messages</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <FaRegHeart className="text-3xl" />
          <p className="text-base">Notifications</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <FaRegSquarePlus className="text-3xl" />
          <p className="text-base">Create</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <CgProfile className="text-3xl" />
          <p className="text-base">Profile</p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-row items-center gap-4">
          <FaThreads className="text-3xl" />
          <p className="text-base">Threads</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <LuAlignJustify className="text-3xl" />
          <p className="text-base">More</p>
        </div>
      </div>
    </div>
    <div className="border-l border-gray-300 h-screen mx-4"></div>
    </div>
  )
}

export default Sidebar
