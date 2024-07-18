import Image from "next/image";
import React from "react";
import StyledLink from "../StyledLink";
import { featuredProjects } from "@/constants/data";

function FeaturedSection() {
  return (
    <section
      className="flex flex-col gap-32 border-t-4 border-neutral-900 shadow-2xl rounded-md"
      id="mywork"
    >
      <div className="m-4 flex flex-1 flex-col items-center gap-10">
        <h1 className="text-4xl text-center">Featured Projects</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          {featuredProjects.map((project, index) => {
            return (
              <div
                key={index}
                className="bg-neutral-950 bg-opacity-50 overflow-hidden items-center flex gap-6 flex-col p-10"
              >
                <div className="h-1/2 flex flex-col gap-2">
                  <p className="text-xl text-center w-full font-bold text-cyan-400">
                    {project.title}
                  </p>
                  <Image
                    alt={project.title}
                    src={project.image}
                    className="rounded-md"
                  />
                </div>
                <div className="h-1/2 text-sm">
                  <ul className="w-full flex flex-col gap-2">
                    <li>
                      <b>Programming Language: </b>
                      {project.programmingLanguage}
                    </li>
                    <li>
                      <b>Concepts used: </b>
                      {project.concepts}
                    </li>
                    <li>
                      <b>Highlights: </b>
                      <br />
                      {project.description}
                    </li>
                  </ul>
                  <br />
                </div>
                <div className="w-full flex flex-row gap-10">
                  <button
                    disabled={true}
                    className="h-fit border p-3 select-none border-gray-600 duration-200 transition-all"
                  >
                    Demo
                  </button>
                  <StyledLink
                    href={project.code}
                    className="text-center flex justify-center items-center"
                  >
                    Code
                  </StyledLink>
                </div>
                <p className="w-full text-center text-lg font-semibold text-cyan-400">
                  {index + 1}/{featuredProjects.length}
                </p>
              </div>
            );
          })}
        </div>
        <StyledLink href={"/my-projects"} className="w-1/5">
          All Projects
        </StyledLink>
      </div>
    </section>
  );
}

export default FeaturedSection;
