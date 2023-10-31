import formatDate from "@/hooks/formatDate"
import { getPostByName } from "@/hooks/getPosts"
import Link from "next/link"

export const revalidate = 0

const page = async ({ params: { postId } }: { params: { postId: string } }) => {
  const data = await getPostByName(`${postId}.mdx`)
  if (!data) return <h1>No Content Available</h1>
  const postData = data
  return (
    <section className="p-4 md:p-16 flex flex-col max-w-[800px] mx-auto">
      <h1 className="text-4xl font-bold">{postData.meta.title}</h1>
      <p className="text-xs text-gray-800/80 mt-2">{"📝 Published on: " + formatDate(postData.meta.date)}</p>
      <span className="mt-4 text-xs">
        {data.meta.tags.map((tag, idx) => (
          <span key={idx} className="bg-blue-500 px-1 py-0.5 rounded-sm text-white font-semibold mx-1">
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </span>
        ))}
      </span>
      <article className="my-4">{postData.content}</article>
      <Link href={".."}>
        <button className="text-base font-bold bg-blue-500 hover:bg-blue-600 rounded-sm px-8 py-2 w-max text-white">Go Back</button>
      </Link>
    </section>
  )
}
export default page
