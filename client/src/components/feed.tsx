import Post from './post'
import Story from './story'

const Feed = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 gap-6 h-full">
      <div className="flex flex-row gap-4">
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
      <div className="flex flex-col justify-center items-center gap-6 w-full h-full">
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
