import Post from '@/components/post'
import Sidebar from '@/components/sidebar'
import Story from '@/components/story'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className="flex flex-row justify-between min-h-screen min-w-screen">
      <div className="w-96">
        <Sidebar />
      </div>
      <div className="flex flex-col py-6 gap-6">
        <div className="flex flex-row gap-4">
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
        <div className="flex flex-col justify-between px-20 gap-6 w-[630px] h-full">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      <div className="py-10 mr-48 flex flex-col w-80 gap-7">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3.5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex justify-center items-center p-[2px]">
              <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  width={36}
                  height={36}
                  alt="Picture of the author"
                />
              </button>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold">Username</p>
              <p className="text-sm text-gray-500">Full Name</p>
            </div>
          </div>

          <button className="bg-white font-semibold text-xs text-blue-500">
            Switch
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-500 font-semibold">
              Suggested for you
            </p>
            <p className="text-xs font-semibold">See All</p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3.5">
              <button className="rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </button>

              <div className="flex flex-col">
                <p className="text-sm font-bold">Username</p>
                <p className="text-sm text-gray-500">Followed by user.name</p>
              </div>
            </div>

            <button className="bg-white font-semibold text-xs text-blue-500">
              Follow
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3.5">
              <button className="rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </button>

              <div className="flex flex-col">
                <p className="text-sm font-bold">Username</p>
                <p className="text-sm text-gray-500">Followed by user.name</p>
              </div>
            </div>

            <button className="bg-white font-semibold text-xs text-blue-500">
              Follow
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3.5">
              <button className="rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </button>

              <div className="flex flex-col">
                <p className="text-sm font-bold">Username</p>
                <p className="text-sm text-gray-500">Followed by user.name</p>
              </div>
            </div>

            <button className="bg-white font-semibold text-xs text-blue-500">
              Follow
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3.5">
              <button className="rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </button>

              <div className="flex flex-col">
                <p className="text-sm font-bold">Username</p>
                <p className="text-sm text-gray-500">Followed by user.name</p>
              </div>
            </div>

            <button className="bg-white font-semibold text-xs text-blue-500">
              Follow
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3.5">
              <button className="rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </button>

              <div className="flex flex-col">
                <p className="text-sm font-bold">Username</p>
                <p className="text-sm text-gray-500">Followed by user.name</p>
              </div>
            </div>

            <button className="bg-white font-semibold text-xs text-blue-500">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
