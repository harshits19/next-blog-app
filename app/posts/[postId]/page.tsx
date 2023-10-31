import formatDate from "@/hooks/formatDate"
import { getPost } from "@/hooks/getPosts"
import Link from "next/link"

const page = async ({ params: { postId } }: { params: { postId: string } }) => {
  const data = getPost(postId)
  const postData = await data
  return (
    <section className="p-4 md:p-16 flex flex-col max-w-[800px] mx-auto">
      <h1 className="text-4xl font-bold">{postData.title}</h1>
      <p className="text-xs text-gray-800/80 mt-2">{"📝 Published on: " + formatDate(postData.date)}</p>
      <article className="my-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></article>
      <Link href="..">
        <button className="text-base font-bold bg-blue-500 hover:bg-blue-600 rounded-sm px-8 py-2 w-max text-white">Go Back</button>
      </Link>
    </section>
  )
}
export default page
