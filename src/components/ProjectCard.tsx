import React from "react";
import Image, { StaticImageData } from "next/image";
import StyledLink from "@/components/StyledLink";
import { ProjectProp } from "@/types";

function ProjectCard(props: { project: ProjectProp }) {
  return (
    <div className="bg-neutral-900 bg-opacity-50 rounded-md overflow-hidden items-center flex gap-6 flex-col p-10 drop-shadow-lg border-2 border-gray-950">
      <div className="h-1/2 flex flex-col gap-2">
        <p className="text-xs sm:text-sm md:text-lg lg:text-lg text-center w-full font-bold text-cyan-400">
          {props.project.name}
        </p>
        <Image
          alt={props.project.name}
          src={props.project.image}
          className="rounded-md"
          width={500}
          height={300}
        />
      </div>
      <div className="h-1/2 text-sm">
        <ul className="w-full flex flex-col gap-2">
          <li>
            <b>Programming Language: </b>
            {props.project.language}
          </li>
          <li>
            <b>Concepts used: </b>
            {props.project.concepts}
          </li>
          <li>
            <b>Description: </b>
            <br />
            <ul>
              {props.project.description.map((point, index) => (
                <li key={index} className="">
                  ◦ {point}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <br />
      </div>
      <div className="w-full flex flex-row gap-10">
        <button
          disabled={true}
          className="w-32 text-center flex justify-center items-center border select-none border-gray-600"
        >
          Demo
        </button>
        <StyledLink
          href={props.project.githubLink}
          className="text-center flex justify-center items-center"
          type="external"
        >
          Code
        </StyledLink>
      </div>
    </div>
  );
}

export default ProjectCard;
