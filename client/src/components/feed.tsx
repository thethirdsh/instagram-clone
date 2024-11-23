'use client'

import { useEffect, useState } from 'react'
import Post from './post'
import Story from './story'

interface Author {
  username: string
}

interface Post {
  id: number
  user: Author
  caption: string
  // image: string; // Adjust according to your data structure
  total_likes: number
  total_comments: number // Assuming comments are an array
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts') // Adjust the endpoint as needed
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center bg-white py-6 gap-6 w-full h-full">
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
      {posts.length === 0 ? (
        <p className="">There are no posts to load</p>
      ) : (
        <div className="flex flex-col justify-center items-center gap-6 w-full h-full">
          {posts.map((post) => (
            <div className="w-[341px] md:w-[470px]" key={post.id}>
              <Post
                authorUsername={post.user.username} // Adjust based on your actual post structure
                // postImage={post.image} // Ensure this matches your post data
                caption={post.caption} // Adjust according to your post data
                totalLikes={post.total_likes}
                totalComments={post.total_comments} // Assuming comments is an array
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Feed
