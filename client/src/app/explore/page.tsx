import Bar from '@/components/bar'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import { BiSolidMoviePlay } from 'react-icons/bi'

const Explore = () => {
  return (
    <>
      <div className="hidden lg:flex flex-row fixed lg:w-[14.5%] h-full">
        <Sidebar />
        <div className="border-l border-gray-200 h-screen"></div>
      </div>
      <div className="flex flex-col items-center overflow-y-auto bg-white lg:pt-12 pl-0.5 md:pl-6 lg:pl-12 w-full h-full gap-1 ">
        <div className="flex flex-row w-[353px] md:w-[800px] lg:w-[963px] h-[313px] md:h-[638px] lg:ml-56 gap-1">
          <div className="flex flex-col w-1/3 h-full gap-1">
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
                className=""
              />
            </div>
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 h-full gap-1">
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="relative w-1/3 h-full hover:opacity-75">
            <div className="absolute drop-shadow-lg top-4 right-4 z-10">
              <BiSolidMoviePlay className="text-2xl text-white fill-current" />
            </div>
            <Image
              src="/images/post.jpg"
              fill={true}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-row w-[353px] md:w-[800px] lg:w-[963px] h-[313px] md:h-[638px] lg:ml-56 gap-1">
          <div className="relative w-1/3 h-full hover:opacity-75">
            <div className="absolute drop-shadow-lg top-4 right-4 z-10">
              <BiSolidMoviePlay className="text-2xl text-white fill-current" />
            </div>
            <Image
              src="/images/post.jpg"
              fill={true}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col w-1/3 h-full gap-1">
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 h-full gap-1">
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[353px] md:w-[800px] lg:w-[963px] h-[313px] md:h-[638px] lg:ml-56 gap-1">
          <div className="flex flex-col w-1/3 h-full gap-1">
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 h-full gap-1">
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <div className="relative w-full h-[50%] hover:opacity-75">
              <div className="absolute drop-shadow-lg top-4 right-4 z-10">
                <BiSolidMoviePlay className="text-2xl text-white fill-current" />
              </div>
              <Image
                src="/images/post.jpg"
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="relative w-1/3 h-full hover:opacity-75">
            <div className="absolute drop-shadow-lg top-4 right-4 z-10 ">
              <BiSolidMoviePlay className="text-2xl text-white fill-current" />
            </div>
            <Image
              src="/images/post.jpg"
              fill={true}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="pt-20 md:pt-0 sticky md:relative z-50">
        <Bar />
      </div>
    </>
  )
}

export default Explore
