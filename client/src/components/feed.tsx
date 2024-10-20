import Post from './post'
import Story from './story'

const Feed = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 gap-6 h-full">
      <div className="flex flex-row overflow-x-auto gap-4 w-[470px] md:w-[624px]">
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
        <div className="">
          <Story />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 w-full h-full  md:pr-0">
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
        <div className="w-[470px]">
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Feed
