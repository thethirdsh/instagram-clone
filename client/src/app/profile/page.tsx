'use client'

import Image from 'next/image'
import Sidebar from '@/components/sidebar'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineGridOn } from 'react-icons/md'
import { BiMoviePlay } from 'react-icons/bi'
import { LiaUserTagSolid } from 'react-icons/lia'
import Footer from '@/components/footer'
import Bar from '@/components/bar'

const Profile = () => {
  return (
    <>
      <div className="hidden lg:flex flex-row fixed h-full lg:w-[14.5%]">
        <Sidebar />
        <div className="border-l border-gray-200 h-screen"></div>
      </div>

      <div className="flex flex-col justify-center items-center md:pl-0">
        <div className="flex flex-col justify-center items-center pt-6 lg:ml-48">
          <div className="flex flex-col justify-center items-center w-[80%] md:w-full h-full">
            <div className="flex flex-row mb-11 mr-8 md:pl-14 lg:pl-28 w-[80%] md:w-[54rem]">
              <div className="hidden md:flex items-center md:pr-24">
                <div className="md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center p-[2px]">
                  <button className="relative md:w-[98%] md:h-[98%] rounded-full bg-white flex items-center justify-center">
                    <Image
                      className="rounded-full border-4 border-white"
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col mt-4 w-[95%] md:w-[53%]">
                <div className="flex flex-col md:flex-row mb-6">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex md:hidden">
                      <div className="flex md:hidden w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center p-[2px]">
                        <button className="relative w-[98%] h-[98%] rounded-full bg-white flex items-center justify-center">
                          <Image
                            className="rounded-full border-4 border-white"
                            src="/images/profile.png"
                            fill={true}
                            alt="Picture of the author"
                          />
                        </button>
                      </div>
                    </div>
                    <p className="text-xl pl-4 md:pl-0 md:mr-5">username</p>
                  </div>

                  <div className="flex flex-row gap-5 md:gap-2 pt-6 md:pt-0">
                    <button className="flex flex-row font-medium rounded-lg bg-gray-200 text-sm px-4 py-1 h-7 hover:bg-gray-300">
                      Following
                      <svg
                        className="-mr-1 h-5 w-5 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="font-medium rounded-lg bg-gray-200 text-sm px-4 py-1 h-7 hover:bg-gray-300">
                      Message
                    </button>
                    <button className="pl-2 h-7">
                      <BsThreeDots />
                    </button>
                  </div>
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
                  <p className="text-balance text-xs md:text-base w-[60%] md:w-[70%] lg:w-full lg:text-base">
                    A little description written by the account owner or a big
                    one. I don&apos;t know.
                  </p>
                </div>
                <p className="text-xs text-gray-500 pt-3">
                  Followed by username, username + 5 more
                </p>
              </div>
            </div>
            <div className="flex flex-row overflow-x-auto mb-14 md:pl-10 gap-3 md:gap-14 w-[90%] md:w-[90%] lg:w-full">
              <div className="flex flex-col space-y-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-200 flex items-center justify-center p-[0.5px]">
                  <button className="relative rounded-full bg-white flex items-center justify-center w-[94%] h-[94%]">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </button>
                </div>
                <p className="text-center text-xs md:text-sm truncate pt-2 w-16">
                  Highlight
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-200 flex items-center justify-center p-[0.5px]">
                  <button className="relative rounded-full bg-white flex items-center justify-center w-[94%] h-[94%]">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </button>
                </div>
                <p className="text-center text-xs md:text-sm truncate pt-2 w-16">
                  Highlight
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-200 flex items-center justify-center p-[0.5px]">
                  <button className="relative rounded-full bg-white flex items-center justify-center w-[94%] h-[94%]">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </button>
                </div>
                <p className="text-center text-xs md:text-sm truncate pt-2 w-16">
                  Highlight
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-200 flex items-center justify-center p-[0.5px]">
                  <button className="relative rounded-full bg-white flex items-center justify-center w-[94%] h-[94%]">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </button>
                </div>
                <p className="text-center text-xs md:text-sm truncate pt-2 w-16">
                  Highlight
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-200 flex items-center justify-center p-[0.5px]">
                  <button className="relative rounded-full bg-white flex items-center justify-center w-[94%] h-[94%]">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </button>
                </div>
                <p className="text-center text-xs md:text-sm truncate pt-2 w-16">
                  Highlight
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-200 flex items-center justify-center p-[0.5px]">
                  <button className="relative rounded-full bg-white flex items-center justify-center w-[94%] h-[94%]">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </button>
                </div>
                <p className="text-center text-xs md:text-sm truncate pt-2 w-16">
                  Highlight
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mb-6 w-[100%] md:w-full">
            <hr className="border-t-1" />
            <div className="flex flex-row justify-center w-full">
              <button className="flex flex row items-center mr-16 pt-4">
                <MdOutlineGridOn className="text-xs text-gray-500" />
                <p className="hidden md:flex ml-1.5 text-xs text-gray-500">
                  POSTS
                </p>
              </button>
              <button className="flex flex row items-center mr-16 pt-4">
                <BiMoviePlay className="text-sm text-gray-500" />
                <p className="hidden md:flex ml-1.5 text-xs text-gray-500">
                  REELS
                </p>
              </button>
              <button className="flex flex row items-center pt-4">
                <LiaUserTagSolid className="text-sm text-gray-500" />
                <p className="hidden md:flex ml-1.5 text-xs text-gray-500">
                  TAGGED
                </p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 w-[295px] md:w-[97.3%] lg:w-[97.5%]">
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
            <button className="relative size-24 md:size-72 hover:opacity-75">
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center lg:ml-48 pt-20 pb-12">
          <Footer />
        </div>
        <div className="pt-20 sticky md:relative z-50">
          <Bar />
        </div>
      </div>
    </>
  )
}

export default Profile
