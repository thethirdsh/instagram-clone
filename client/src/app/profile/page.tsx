import Image from 'next/image'
import Sidebar from '@/components/sidebar'
import Story from '@/components/story'

const Profile = () => {
  return (
    <div className="flex flex-row justify-between w-screen h-screen">
      <div>
        <Sidebar />
      </div>
      <div>
        <Story />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row">
          <button className="rounded-full bg-white">
            <Image
              src="/images/profile.png"
              width={56}
              height={56}
              alt="Picture of the author"
            />
          </button>
          <button className="rounded-full bg-white">
            <Image
              src="/images/profile.png"
              width={56}
              height={56}
              alt="Picture of the author"
            />
          </button>
          <button className="rounded-full bg-white">
            <Image
              src="/images/profile.png"
              width={56}
              height={56}
              alt="Picture of the author"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
