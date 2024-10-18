import Image from 'next/image'

const Story = () => {
  return (
    <div className="flex flex-col items-center space-y-2 w-full h-full">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center p-[2px]">
          <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <Image
              src="/images/profile.png"
              width={56}
              height={56}
              alt="Picture of the author"
            />
          </button>
        </div>
      </div>
      <p className="text-center text-xs">Username</p>
    </div>
  )
}

export default Story
