import Contact from "@/components/contact";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <footer
      id="contactme"
      className="relative bottom-0 flex flex-col justify-center items-center mt-32"
    >
      <div className="w-full bg-cyan-400 flex flex-wrap gap-10 p-5 justify-between items-center text-zinc-950">
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
        <div className="h-fit w-fit flex flex-col justify-center items-center">
          <a
            href="#top"
            className="w-fit h-fit border border-zinc-950 p-2 md:p-3 hover:bg-zinc-950 hover:text-slate-200 border-bg-zinc-950 duration-200 transition-all"
          >
            Back to Top
          </a>
          {/* <div className="relative right-0 bottom-0 flex flex-row items-center justify-center gap-5">
            <p className="text-xs">Made with ❤️ by Varun Kamath</p>
            <p className="text-xs">© 2021 Varun Kamath</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;
