import Image from "next/image"

const RightSidebar = () => {
  return (
    <div className="flex flex-col mt-10 gap-7 w-full h-full">
      <div className="flex flex-row justify-between w-72">
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
      <div className="flex flex-col gap-4 w-72">
        <div className="flex flex-row justify-between w-72">
          <p className="text-sm text-gray-500 font-semibold">
            Suggested for you
          </p>
          <p className="text-xs font-semibold">See All</p>
        </div>
        <div className="flex flex-row justify-between w-72">
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
        <div className="flex flex-row justify-between w-72">
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
        <div className="flex flex-row justify-between w-72">
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
        <div className="flex flex-row justify-between w-72">
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
        <div className="flex flex-row justify-between w-72">
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
  )
}

export default RightSidebar
