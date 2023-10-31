import { Metadata } from "next"
import PostList from "./components/PostList"
import ProfileSection from "./components/ProfileSection"

export const metadata: Metadata = {
  title: "Blog App",
  description: "Blog stuff of Harshit Gaur built using NextJs",
}

const Home = () => {
  return (
    <div className="text-5xl">
      <ProfileSection />
      <PostList />
    </div>
  )
}
export default Home
