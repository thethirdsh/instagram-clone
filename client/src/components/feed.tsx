import Post from './post'
import Story from './story'

const Feed = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 gap-6 w-full h-full">
      <div className="flex flex-row overflow-x-auto gap-4 w-[341px] md:w-[87%]">
        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />

        <Story />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 w-full h-full">
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
        <div className="w-[341px] md:w-[470px]">
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Feed
