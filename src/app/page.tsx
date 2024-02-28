import Image from "next/image";
import PageTitle from "./component/PageTitle"
import homeImage from "@/app/seth.webp"
import { FaGithub, FaLinkedin, FaMailchimp, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
   <>
   <PageTitle heading="Home"/>
   <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:flex-row pt-20 gap-6" >
    {/* left side started */}
    <div className="flex flex-col items-center gap-3 text-center" >
      <Image src={homeImage} alt="home-image" className="w-[192px] h-[192px] rounded-full" />
      <p className="text-2xl font-semibold">Aaditya Kumawat</p>
          <p>Hey my name is Aaditya Kumawat and I am a Fullstack Developer</p>
          <div className="flex items-center gap-3 text-3xl" >
            <FaGithub className="cursor-pointer text-teal-500 hover:text-white transition-all" />
            <FaLinkedin className="cursor-pointer text-teal-500 hover:text-white transition-all" />
            <FaMailchimp className="cursor-pointer text-teal-500 hover:text-white transition-all" />
            <FaTwitter className="cursor-pointer text-teal-500 hover:text-white transition-all" />
          </div>
    </div>
    {/* left side ended */}

    {/* right side started  */}
    <div className="text-lg flex flex-col gap-4" >
      <p>{`Welcome to my portfolio! I'm a versatile frontend developer specializing in crafting engaging and responsive web applications.`}</p>

      <p>{`With a strong command of React.js, Tailwind CSS, and TypeScript, along with a solid foundation in sorting algorithms, I'm dedicated to building visually stunning and high-performance user interfaces.`}</p>
    </div>
    {/* right side ended  */}
   </div>
   </>
  );
}
