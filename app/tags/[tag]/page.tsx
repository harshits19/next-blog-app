import { getAllPosts } from "@/hooks/getPosts"
import Link from "next/link"
import formatDate from "@/hooks/formatDate"

const TagPage = async ({ params: { tag } }: { params: { tag: string } }) => {
  const data = await getAllPosts()
  if (!data) return <h2>No Posts with {tag} found</h2>
  const matchedPost: Meta[] = []
  data.map((post) => {
    if (post.tags.includes(tag)) matchedPost.push(post)
  })

  const posts = matchedPost.map((post) => {
    return (
      <article key={post.id} className="flex flex-col hover:bg-slate-100 rounded-sm p-4">
        <Link href={`/posts/${post.id}`} className="contents">
          <p className="text-2xl font-semibold">{post.title}</p>
          <div className="text-xs mt-2 flex justify-between">
            {"Published on: " + formatDate(post.date)}
            <span className="">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="bg-blue-500 px-1 py-0.5 rounded-sm text-white font-semibold mx-1">
                  {tag}
                </span>
              ))}
            </span>
          </div>
        </Link>
      </article>
    )
  })
  return (
    <section className="flex flex-col my-4 max-w-[800px] mx-4 md:mx-auto">
      <h1 className="text-2xl font-bold pl-4 py-4">Posts with matched tag - #{tag}</h1>
      {posts}
    </section>
  )
}
export default TagPage
