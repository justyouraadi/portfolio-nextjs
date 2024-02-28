"use client";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from "next/navigation";
type Props = {};

export default function Navbar({}: Props) {
  const pathName = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [animationParent] = useAutoAnimate();

  const toggleDarkMode = () => {
    if (resolvedTheme == "light") {
      setTheme("dark");
    }  if (resolvedTheme == "dark") {
      setTheme("light");
    }
  };
  const links = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/guestbook",
      title: "Guestbook",
    },
    {
      href: "/projects",
      title: "Projects",
    },
  ];
  return (
    <>
    <div className="max-w-6xl  mx-auto px-2  py-2">
      <div className="flex justify-between items-center">
        {/* left side  */}
        <Link href={"/"} className="flex gap-1 items-center">
          <span>Aaditya</span>
          <span className="text-[#14b8a6]">Kumawat</span>
        </Link>

        {/* right side  */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 ">
          {links.map((data, index) => (
      <Link
        key={index}
        className={`${pathName === data.href ? "border-b-2 border-[#14b8a6]" : "border-transparent"} px-2 mb-0 transition-all `}
        href={data.href}
      >
        {data.title}
      </Link>
    ))}
          </div>
          <div>
            <button
              className="text-2xl p-1 text-green-300 bg-green-200/30 rounded-md"
              ref={animationParent}
              onClick={toggleDarkMode}
            >
              
              {resolvedTheme == "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
