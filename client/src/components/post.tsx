import Image from 'next/image'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import Comment from '../../icons/comment.svg'
import { FaRegBookmark } from 'react-icons/fa'

const Post = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between gap-2.5">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 p-[3px]">
            <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Image
                src="/images/profile.png"
                width={60}
                height={60}
                alt="Picture of the author"
              />
            </button>
          </div>
          <p className="text-sm">Username</p>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <p className="text-sm">1h</p>
        </div>

        <BsThreeDots />
      </div>
      <Image
        src="/images/post.jpg"
        width={500}
        height={500}
        // fill={true}
        // layout="fill"
        alt="Picture of the author"
      />
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-5">
            <button>
              <FaRegHeart className="text-2xl" />
            </button>
            <button>
              <Comment className="w-6 h-5.5" />
            </button>
            <button>
              <FiSend className="text-2xl" />
            </button>
          </div>
          <button>
            <FaRegBookmark className="text-2xl" />
          </button>
        </div>
        <p className="font-bold text-sm">256 Likes</p>
        <p className="text-sm">
          <span className="font-bold">Username</span> The Tesla Cybertruck is a
          battery-powered electric pickup truck with a stainless steel body and
          a futuristic design. It was introduced in 2019 as a concept vehicle
          and has been in production since November 2023 at Tesla’s Gigafactory
          in Austin, Texas. The Cybertruck is intended for long trips and towing
          heavy loads, and has a number of features for utility.
        </p>
        <div className="flex flex-col gap-2">
          <button className="flex items-center text-gray-500">
            View all 512 comments
          </button>
          <p className="text-gray-500">Add a comment...</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Post
