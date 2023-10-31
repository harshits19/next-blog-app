import formatDate from "@/hooks/formatDate"
import { getAllPosts } from "@/hooks/getPosts"
import Link from "next/link"

export const revalidate = 0

const PostList = async () => {
  const postsList = await getAllPosts()
  if (!postsList)
    return (
      <section className="my-4 max-w-[800px] mx-auto text-center">
        <p className="text-3xl font-bold">Sorry, No post available</p>
      </section>
    )
  const posts = postsList.map((post) => {
    return (
      <article key={post.id} className="flex flex-col hover:bg-slate-100 rounded-sm p-4">
        <Link href={`/posts/${post.id}`} className="contents">
          <p className="text-2xl font-semibold">{post.title}</p>
        </Link>
        <div className="text-xs mt-2 flex justify-between">
          <Link href={`/posts/${post.id}`} className="contents">
            {"Published on: " + formatDate(post.date)}
          </Link>
          <span className="">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="bg-blue-500 px-1 py-0.5 rounded-sm text-white font-semibold mx-1">
                <Link href={`/tags/${tag}`} className="contents">
                  {tag}
                </Link>
              </span>
            ))}
          </span>
        </div>
      </article>
    )
  })
  return (
    <section className="flex flex-col my-4 max-w-[800px] mx-4 md:mx-auto">
      <h1 className="text-2xl font-bold pl-4 py-2 underline">Posts</h1>
      {posts}
    </section>
  )
}
export default PostList
