import Contact from "@/app/contact";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <section
      id="contactme"
      className="w-screen h-screen bg-gradient-to-b from-zinc-900 to-black flex justify-center items-center flex-col"
    >
      <div className="w-25rem h-full flex justify-center items-center flex-col gap-16 p-10">
        <div className="w-full h-fit flex justify-center">
          <p className="text-4xl select-none">Contact Me</p>
        </div>
        <Contact />
      </div>
      <div className="w-full h-fit bg-cyan-400 flex flex-wrap gap-10 p-5 justify-between items-center text-zinc-950">
        <div className="w-fit flex gap-3 flex-col">
          <span className="text-2xl flex flex-row gap-4">
            <FaMapLocationDot />
            <p className="text-base">Bangalore, Karnataka, India</p>
          </span>
          <span className="text-2xl flex flex-row gap-4">
            <BiSolidPhoneCall />
            <p className="text-base">+91 7666069061</p>
          </span>
          <span className="text-2xl flex flex-row gap-4">
            <MdEmail />
            <p className="text-base">mail.varunkamath@gmail.com</p>
          </span>
        </div>
        <div className="h-fit w-fit flex justify-center items-center">
          <a
            href="#top"
            className="w-fit h-fit border border-zinc-950 p-2 md:p-3 hover:bg-zinc-950 hover:text-slate-200 border-bg-zinc-950 duration-200 transition-all"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
