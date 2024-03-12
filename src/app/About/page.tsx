import React from "react";
import "../globals.css";
import Image from "next/image";
import ProfilePic from "../../../public/Me.jpg";
import TextTypingAnimate from "../TextTypingAnimate";

function about() {
  return (
    <main className="bg-gradient-to-b from-black to-zinc-900 flex flex-col min-h-screen gap-3">
      <nav className="bg-transparent relative z-10 p-4 top-0 w-full flex flex-row gap-11 items-center">
        <a
          href="/"
          className="h-fit sticky top-0 pl-3 pt-3 flex items-center justify-center text-center border w-20 p-3 border-cyan-400 hover:bg-cyan-400 hover:text-stone-800 duration-200 transition-all"
        >
          Home
        </a>
        {/* <div className='text-center flex w-full h-full justify-center items-center'></div> */}
        <div className="flex-1">
          <h1 className="text-4xl">About Me</h1>
        </div>
      </nav>
      <section
        className="page2 w-screen bg-gradient-to-b from-black to-zinc-900 flex flex-1 items-center justify-center flex-row flex-wrap gap-10 md:gap-32"
        id="aboutme"
      >
        <div className="pfp h-80 w-80 rounded-3xl overflow-hidden relative">
          <Image
            alt="ProfilePic"
            src={ProfilePic}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="outline-double h-fit w-80 md:w-50rem p-10 flex flex-col m-3">
          <p className="flex items-start flex-col">
            Hey there! I&apos;m a third-year B.Tech student at PES University,
            and I&apos;ve got a thing for all things data and tech. You&apos;ll
            often find me diving into data analytics, data science, AI/ML stuff
            and working on cool little projects—I&apos;m totally hooked.
            <br />
            <br />
            {/* 
                    Python is my jam, but I can groove with C/C++ and JavaScript too. Web development? Yep, I&apos;m into that. I&apos;ve worked my way around cool frameworks like ReactJS and NextJS, and I&apos;ve tamed MongoDB, Postman, and ExpressJS.
                    <br/><br/>
                    Projects? Oh yeah, I&apos;ve got a bunch under my belt. Python, web development—done and done. Team projects? Love &apos;em. I&apos;m a real team player. But hey, I&apos;ve also rocked solo projects like a champ.
                    <br/><br/>
                    Feel free to poke around my portfolio and hit me up for a chat. Let&apos;s talk tech and maybe cook up something awesome together!
                    <br/><br/>
                    Cheers,
                    <br/>
                    Varun Kamath
                    <br/><br/> */}
          </p>
          <div className="flex ">
            <TextTypingAnimate value="PS - Check out my work! :)" tag="p" />
          </div>
          <br />
          {/* <p className='text-xl'>Check out my work!</p> */}
          <br />
          <div className="h-full w-full flex justify-center items-center gap-16">
            <a
              href="/#mywork"
              className="h-fit sticky top-0 pl-3 pt-3 flex items-center justify-center text-center border w-fit p-3 border-cyan-400 hover:bg-cyan-400 hover:text-stone-800 duration-200 transition-all"
            >
              My Work
            </a>
            <a
              href="/Resume"
              target="_blank"
              className="h-fit sticky top-0 pl-3 pt-3 flex items-center justify-center text-center border w-fit p-3 border-cyan-400 hover:bg-cyan-400 hover:text-stone-800 duration-200 transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default about;
