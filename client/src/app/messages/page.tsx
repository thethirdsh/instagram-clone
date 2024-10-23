import MessagesSidebar from '@/components/messagesSidebar'
import { BiEdit } from 'react-icons/bi'
import Image from 'next/image'
import { RiMessengerLine } from 'react-icons/ri'
import Bar from '@/components/bar'

const Messages = () => {
  return (
    <>
      <div className="hidden md:flex flex-row fixed w-[4.5%] h-full">
        <MessagesSidebar />
        <div className="border-l border-gray-200 h-screen"></div>
      </div>
      <div className="flex flex-row justify-center h-screen">
        <div className="flex flex-col md:w-[13%] lg:w-[23%]">
          <div className="flex flex-row justify-center lg:justify-between pt-9 pr-7 pl-6">
            <button className="hidden lg:flex flex-row">
              <p className="text-xl font-bold">username</p>
              <svg
                className="-mr-1 pt-1 h-6 w-6 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button>
              <BiEdit className="text-3xl" />
            </button>
          </div>
          <div className="flex flex-col overflow-y-auto">
            <div className="hidden lg:flex flex-row pt-16">
              <button className="flex flex-col items-center pr-7 pl-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/profile.png"
                    fill={true}
                    alt="Picture of the author"
                  />
                </div>
                <p className="text-xs text-gray-500 pt-1">Your note</p>
              </button>
            </div>
            <div className="flex flex-col pt-2">
              <div className="hidden lg:flex flex-row justify-between pt-5 pb-2 pr-7 pl-6">
                <p className="text-sm font-bold">Messages</p>
                <button className="">
                  <p className="text-gray-500 font-semibold text-sm">
                    Requests
                  </p>
                </button>
              </div>
              <div className="flex flex-col">
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
                <button className="flex flex-row items-center pl-6 pb-2 pt-2 hover:bg-gray-100">
                  <div className="relative w-14 h-14 mr-3">
                    <Image
                      src="/images/profile.png"
                      fill={true}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <p className="text-xs text-start">Full Name</p>
                    <p className="text-xs text-gray-500">Active 1h ago</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[83%] md:w-[78%] lg:w-[68%] h-full">
          <div className="flex justify-center items-center rounded-full border-2 border-black w-24 h-24">
            <RiMessengerLine className="text-6xl" />
          </div>
          <p className="text-xl mt-4">Your messages</p>
          <p className="text-sm text-gray-500 mt-1">
            Send a message to start a chat.
          </p>
          <button className="flex justify-center items-center rounded-md bg-[#0095F6] mt-4 w-32 h-8 hover:bg-blue-500">
            <p className="text-white font-medium text-sm">Send message</p>
          </button>
        </div>
      </div>
      <Bar />
    </>
  )
}

export default Messages
