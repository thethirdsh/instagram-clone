'use client'

import Image from 'next/image'
import Sidebar from '@/components/sidebar'
import { BsThreeDots } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { MdOutlineGridOn } from 'react-icons/md'
import { BiMoviePlay } from 'react-icons/bi'
import { LiaUserTagSolid } from 'react-icons/lia'

const Profile = () => {
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
      {windowWidth >= 1366 && (
        <div className="flex flex-row fixed h-full md:flex md:w-[14.5%]">
          <Sidebar />
          <div className="border-l border-gray-200 h-screen"></div>
        </div>
      )}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col pt-6 ml-48">
          <div className="flex flex-row items-center justify-center items-center mb-12">
            <div className="flex w-52 h-52 items-center">
              <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center p-[2px]">
                <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/images/profile.png"
                    width={130}
                    height={130}
                    alt="Picture of the author"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex flex-row mb-6">
                <p className="text-xl mr-5">username</p>
                <div className="flex flex-row gap-2">
                  <button className="font-medium rounded-lg bg-gray-200 text-sm px-4 py-1">
                    Following
                  </button>
                  <button className="font-medium rounded-lg bg-gray-200 text-sm px-4 py-1">
                    Message
                  </button>
                </div>

                <button className="pl-2">
                  <BsThreeDots />
                </button>
              </div>
              <div className="flex flex-row mb-3">
                <p className="mr-10">
                  <span className="font-semibold">560</span> posts
                </p>
                <p className="mr-10">
                  <span className="font-semibold">250</span> followers
                </p>
                <p>
                  <span className="font-semibold">420</span> following
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">Full Name</p>
                <p className="text-gray-500">Public figure</p>
                <p>
                  A little description written by the account owner or a big
                  one. I don&apos;t know
                </p>
              </div>
              <p className="text-xs text-gray-500 pt-3">
                Followed by username, username + 5 more
              </p>
            </div>
          </div>
          <div className="flex flex-row mb-14">
            <div className="flex flex-col items-center space-y-2 w-full h-full">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center p-[2px]">
                <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/images/profile.png"
                    width={71}
                    height={71}
                    alt="Picture of the author"
                  />
                </button>
              </div>
              <p className="text-center text-sm pt-2">Highlight</p>
            </div>
            <div className="flex flex-col items-center space-y-2 w-full h-full">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center p-[2px]">
                <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/images/profile.png"
                    width={71}
                    height={71}
                    alt="Picture of the author"
                  />
                </button>
              </div>
              <p className="text-center text-sm pt-2">Highlight</p>
            </div>
            <div className="flex flex-col items-center space-y-2 w-full h-full">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center p-[2px]">
                <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/images/profile.png"
                    width={71}
                    height={71}
                    alt="Picture of the author"
                  />
                </button>
              </div>
              <p className="text-center text-sm pt-2">Highlight</p>
            </div>
            <div className="flex flex-col items-center space-y-2 w-full h-full">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center p-[2px]">
                <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/images/profile.png"
                    width={71}
                    height={71}
                    alt="Picture of the author"
                  />
                </button>
              </div>
              <p className="text-center text-sm pt-2">Highlight</p>
            </div>
            <div className="flex flex-col items-center space-y-2 w-full h-full">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center p-[2px]">
                <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/images/profile.png"
                    width={71}
                    height={71}
                    alt="Picture of the author"
                  />
                </button>
              </div>
              <p className="text-center text-sm pt-2">Highlight</p>
            </div>
            <div className="flex flex-col items-center space-y-2 w-full h-full">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center p-[2px]">
                <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/images/profile.png"
                    width={71}
                    height={71}
                    alt="Picture of the author"
                  />
                </button>
              </div>
              <p className="text-center text-sm pt-2">Highlight</p>
            </div>
          </div>
          <div className="flex flex-col justify-center mb-6 w-full">
            <hr className="border-t-1" />
            <div className="flex flex-row justify-center">
              <button className="flex flex row items-center mr-16 pt-4">
                <MdOutlineGridOn className="text-xs text-gray-500" />
                <p className="ml-1.5 text-xs text-gray-500">POSTS</p>
              </button>
              <button className="flex flex row items-center mr-16 pt-4">
                <BiMoviePlay className="text-sm text-gray-500" />
                <p className="ml-1.5 text-xs text-gray-500">REELS</p>
              </button>
              <button className="flex flex row items-center pt-4">
                <LiaUserTagSolid className="text-sm text-gray-500" />
                <p className="ml-1.5 text-xs text-gray-500">TAGGED</p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 justify-center items-center">
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-72 h-72">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
