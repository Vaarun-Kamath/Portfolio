import TextTypingAnimate from "@/app/TextTypingAnimate";
import { socials } from "@/constants/socials";
import React from "react";

function FrontPage() {
  return (
    <section
      className="page1 min-h-screen w-screen bg-gradient-to-b from-black to-zinc-900 flex flex-col items-center justify-center gap-16"
      id="top"
    >
      <div className="myNameContainer h-full w-full flex flex-col items-center justify-center gap-5">
        <div className="flex justify-center items-center h-10 text-center pl-10">
          <TextTypingAnimate value="Varun Kamath" tag="h1" />
        </div>
        <div className="flex justify-center items-center mr-16 ml-16 text-center">
          <h3>
            Aspiring Software Developer | Big Data Enthusiast | Full Stack
            Developer
          </h3>
        </div>
      </div>

      <div className="socials w-full h-fit flex flex-row gap-10 justify-center items-center">
        {socials.map((social, index) => {
          return (
            <a
              key={index}
              target="_blank"
              href={social.link}
              className="w-fit h-fit flex justify-center items-center rounded text-3xl md:text-4xl text-slate-200 shadow-md duration-200 transition-all hover:scale-110 hover:text-cyan-400"
            >
              <span>{social.icon}</span>
            </a>
          );
        })}
      </div>
      <div className="jump flex flex-row gap-10 p-3">
        <a
          href="/About"
          className="w-fit h-fit border p-2 md:p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all"
        >
          About Me
        </a>
        <a
          href="#mywork"
          className="w-fit h-fit border p-2 md:p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all"
        >
          My Work
        </a>
        <a
          href="/Resume"
          className="w-fit h-fit border p-2 md:p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default FrontPage;
