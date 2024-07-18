import TextTypingAnimate from "@/components/TextTypingAnimate";
import { jumpLinks, socials, techStack } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";
import { TextSeperator } from "../TextSeperator";
import StyledLink from "../StyledLink";
function FrontPage() {
  return (
    <div
      className="h-screen flex justify-center items-center flex-col gap-10"
      id="top"
    >
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <span className="flex justify-center items-center text-center">
          <TextTypingAnimate value="Varun Kamath" tag="h1" />
        </span>
        <div className="w-full px-32 flex justify-center items-center flex-col gap-3 sm:gap-2 sm:flex-row text-center">
          <TextSeperator showBar={false} />
          <p className="lg:text-lg sm:text-xs">Aspiring Software Developer</p>
          <TextSeperator showBar={true} />
          <p className="lg:text-lg sm:text-xs">Big Data Enthusiast</p>
          <TextSeperator showBar={true} />
          <p className="lg:text-lg sm:text-xs">Full Stack Developer</p>
          <TextSeperator showBar={false} />
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-center">
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
      <div className="flex flex-wrap gap-5 md:gap-10 justify-center">
        {jumpLinks.map((link, index) => {
          return (
            <StyledLink
              key={index}
              href={link.link}
              className="w-20 px-5 py-2 text text-xs md:w-32 md:text-sm"
            >
              {link.name}
            </StyledLink>
          );
        })}
      </div>
      <div className="absolute bottom-0 md:bottom-5 w-full">
        <Marquee
          gradient
          gradientColor="#000000"
          gradientWidth={"200px"}
          pauseOnHover
          className="transition-all duration-200 opacity-75"
        >
          <div className="flex flex-row gap-10 overflow-hidden">
            {techStack.map((stack, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-2 items-center justify-between ${
                    index === 0
                      ? "ml-5"
                      : index === techStack.length - 1
                      ? "mr-5"
                      : ""
                  }`}
                >
                  <p className="text-lg">{stack.topic}</p>
                  <div className="flex flex-row gap-5">
                    {stack.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            "flex flex-col items-center justify-between gap-1 " +
                            (index === 0 ? "" : "")
                          }
                        >
                          <span className="text-3xl">{item.icon}</span>
                          <p className="text-xs">{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default FrontPage;
