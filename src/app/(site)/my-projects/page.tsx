import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import StyledLink from "@/components/StyledLink";
import { projects } from "@/constants/data";

function MyProjects() {
  return (
    <main className="flex flex-col gap-3">
      <nav className="bg-transparent relative z-10 p-4 top-0 w-full flex flex-row gap-10 items-center">
        <StyledLink href="/">Home</StyledLink>
        <div>
          <h1 className="text-4xl">My Projects</h1>
        </div>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-10 gap-5 justify-center w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
}

export default MyProjects;
