import Link from "next/link"
const Navbar = () => {
  return (
    <header className="w-full drop-shadow-sm px-8 sm:px-12 bg-blue-500">
      <nav className="flex justify-center sm:justify-between items-center py-4">
        <Link href="/">
          <p className="text-3xl font-semibold text-white">{"Harshit's Blog"}</p>
        </Link>
        <div className=""></div>
      </nav>
    </header>
  )
}
export default Navbar
