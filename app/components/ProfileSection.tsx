import Image from "next/image"
const ProfileSection = () => {
  return (
    <section className="flex flex-col items-center text-black font-semibold p-8 text-center">
      <Image
        src="/Images/dp.jpg"
        height={198}
        width={198}
        className="h-48 w-48 sm:h-56 sm:w-56 rounded-full border-[6px] border-blue-500 drop-shadow"
        alt="profile pic"
        priority={true}
      />
      <h2 className="text-3xl mt-4">
        {"Hi, I'm "}
        <span className="font-bold text-blue-500">Harshit</span>
      </h2>
      <p className="text-xl mt-2">I am a passionate web developer, and I love talking about tech.</p>
    </section>
  )
}
export default ProfileSection
