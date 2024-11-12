import Image from 'next/image'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegHeart, FaHeart, FaRegBookmark } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import Comment from '../../icons/comment.svg'
import { useState } from 'react'

// Define the props interface
interface PostProps {
  // authorImage: string
  authorUsername: string
  // postImage: string
  caption: string
  totalLikes: number
  totalComments: number//Array<{ id: number; text: string }> // Adjust as necessary for your comment structure
}

const Post: React.FC<PostProps> = ({ /*authorImage,*/ authorUsername, /*postImage,*/ caption, totalLikes, totalComments }) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="flex flex-col bg-white text-black w-full h-full justify-between gap-2.5">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center p-[2px]">
            <button className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Image
                src={'/images/profile.png'}
                width={32}
                height={32}
                alt="Picture of the author"
              />
            </button>
          </div>
          <p className="text-sm font-semibold">{authorUsername}</p>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <p className="text-sm">1h</p>
        </div>
        <button>
          <BsThreeDots />
        </button>
      </div>
      <div className="relative h-[600px]">
        <Image
          src={'/images/post.jpg'}
          fill={true}
          alt="Picture of the post"
        />
      </div>
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-5">
            <button onClick={() => setIsLiked(!isLiked)}>
              {isLiked ? (
                <FaHeart className="text-2xl text-[#FD1D1D] fill-current" />
              ) : (
                <FaRegHeart className="text-2xl" />
              )}
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
        <p className="font-bold text-sm">{totalLikes} Likes</p>
        <p className="text-sm">
          <span className="font-bold">{authorUsername}</span> {caption}
        </p>
        <div className="flex flex-col gap-2">
          <button className="flex items-center text-gray-500">
            View all {totalComments} comments
          </button>
          <p className="text-gray-500">Add a comment...</p>
        </div>
        <hr className="border-t-1" />
      </div>
    </div>
  )
}

export default Post
