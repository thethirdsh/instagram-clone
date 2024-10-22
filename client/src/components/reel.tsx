'use client'

import Image from 'next/image'
import { FaRegHeart } from 'react-icons/fa'
import Comment from '../../icons/comment.svg'
import Mute from '../../icons/mute.svg'
import { FiSend } from 'react-icons/fi'
import { FaRegBookmark } from 'react-icons/fa'
import { PiDotsThreeBold } from 'react-icons/pi'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'
import { IoVolumeMedium } from 'react-icons/io5'

const Reel = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  return (
    <div className="flex flex-row w-[350px] md:w-[550px] h-[600px] lg:h-[846.3px]">
      <div className="flex justify-center items-center rounded-md shadow-lg shadow-neutral-400 w-[80.5%] md:w-[65.5%] lg:w-[86.5%]">
        <div className="relative w-full h-full">
          <div className="absolute top-2 right-2 flex justify-center rounded-full items-center bg-gray-600 w-8 h-8 z-10">
            <IoVolumeMedium
              onClick={() => setIsMuted(!isMuted)}
              className={`${
                isMuted ? 'hidden' : ''
              } absolute text-2xl text-white text-black z-10`}
            />
            <Mute
              onClick={() => setIsMuted(!isMuted)}
              className={`${!isMuted ? 'hidden' : ''} w-7 h-7 absolute z-10`}
            />
          </div>
          <div className="absolute flex flex-col bottom-2 left-4 z-10 w-[97%] h-fit">
            <div className="pb-2">
              <div className="flex flex-row items-center z-10 pb-1 h-12">
                <button className="relative flex flex-row w-8 h-8 rounded-full bg-white flex items-center justify-center z-10">
                  <Image
                    src="/images/profile.png"
                    fill={true}
                    alt="Picture of the author"
                  />
                </button>
                <button className="flex flex-row justify-center items-center pl-3 gap-2">
                  <p className="text-white text-sm font-semibold">username</p>
                  <div className="bg-white rounded-full w-1 h-1"></div>
                </button>
                <button className="justify-center rounded-md border-[1px] ml-2.5 w-14 h-7">
                  <p className="text-white text-sm font-semibold">Follow</p>
                </button>
              </div>
              <div className="overflow-y-auto">
                <button className="flex w-[92%] max-h-80">
                  <p className="flex text-left overflow-y-auto text-white text-sm justify-self-start mt-4">
                    No problem! Here’s the information about the most popular
                  </p>
                </button>
              </div>
              <div className='flex flex-row rounded-xl bg-gray-600 w-[86%] h-[1.5rem] mt-4'></div>
            </div>
          </div>
          <Image
            src="/images/post.jpg"
            fill={true}
            // layout="fill"
            alt="Picture of the author"
            className="rounded"
          />
        </div>
      </div>
      <div className="flex flex-col justify-end items-center pb-1 pl-3.5 w-[13%]">
        <button className="flex flex-col justify-center items-center">
          <FaHeart
            onClick={() => setIsLiked(!isLiked)}
            className={`${
              isLiked ? '' : 'hidden'
            } text-2xl text-[#FD1D1D] fill-current`}
          />
          <FaRegHeart
            onClick={() => setIsLiked(!isLiked)}
            className={`${isLiked ? 'hidden' : ''} text-2xl`}
          />
          <p className="text-xs pt-1.5">829</p>
        </button>
        <button className="flex flex-col justify-center items-center pt-4">
          <Comment className="w-5.5 h-5.5" />
          <p className="text-xs pt-1.5">745</p>
        </button>
        <button className="flex flex-col justify-center items-center pt-4">
          <FiSend className="text-2xl" />
        </button>
        <button className="flex flex-col justify-center items-center pt-7">
          <FaRegBookmark className="text-2xl" />
        </button>
        <button className="flex flex-col justify-center items-center pt-8">
          <PiDotsThreeBold className="stroke-0 text-2xl" />
        </button>
        <div className="flex flex-col justify-center items-center w-full pt-7">
          <button className="flex flex-col justify-center items-center border-[1px] border-black rounded-md w-6 h-6"></button>
        </div>
      </div>
    </div>
  )
}

export default Reel
