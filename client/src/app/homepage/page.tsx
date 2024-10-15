import Post from '@/components/post'
import Sidebar from '@/components/sidebar'
import Story from '@/components/story'

const Homepage = () => {
  return (
    <div className="flex flex-row justify-between min-h-screen min-w-screen">
      <div className="w-56">
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
        <div className='flex flex-col justify-between px-20 gap-6 w-[630px]'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="">
        <p className="text-5xl">Hidsgsdsdggg</p>
      </div>
    </div>
  )
}

export default Homepage
