import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  imageSrc: string;
  title: string;
  description: string;
  liveDemoLink: string;
};

export default function Card(props: Props) {
  return (
    <>
    <div className="border w-full mx-auto flex flex-col rounded-md overflow-hidden">
      <div className="h-[244px] relative">
        <Image
          className="w-full h-full object-contain"
          src={props.imageSrc ?? ""}
          alt="project-image"
          width={480} height={360}
        />
      </div>

      <div className="flex flex-col gap-4 w-fit p-4">
        <h2 className="font-semibold text-xl">{props.title}</h2>

        <p className="text-gray-400"> {props.description}</p>

        <Link
          target="_blank"
          href={props.liveDemoLink}
          className="flex gap-2 border w-fit p-1 px-3 hover:opacity-60"
        >
          <span> Live Demo</span>
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
    </>
  );
}
