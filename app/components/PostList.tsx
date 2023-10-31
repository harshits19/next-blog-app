import formatDate from "@/hooks/formatDate"
import { getAllPosts } from "@/hooks/getPosts"
import Link from "next/link"

const PostList = () => {
  const postsList = getAllPosts()
 /*  const posts = postsList.map((post) => {
    return (
      <article key={post.id} className="flex flex-col hover:bg-slate-100 rounded-sm p-4">
        <Link href={`/posts/${post.id}`}>
          <p className="text-2xl font-semibold">{post.title}</p>
        </Link>
        <span className="text-xs">{"Published on: " + formatDate(post.date)}</span>
      </article>
    )
  }) */
  return (
    <section className="flex flex-col my-4 max-w-[800px] mx-4 md:mx-auto">
      <h1 className="text-2xl font-bold pl-4 py-2 underline">Posts</h1>
      {/* {posts} */}
    </section>
  )
}
export default PostList
