// 'use-client';
import React from "react";
import "./globals.css";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";
import { LiaConnectdevelop } from "react-icons/lia";
import { FaLaptopCode } from "react-icons/fa";
import { PiGraphLight } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";

import Contact from "./contact";
import FrontPage from "@/components/Sections/FrontPage";
import FeaturedSection from "@/components/Sections/FeaturedSection";
import ContactSection from "@/components/Sections/ContactSection";

export default function Home() {
  // const Resume = require("./Resume.pdf")

  return (
    <main>
      <FrontPage />
      <FeaturedSection />
      <ContactSection />
    </main>
  );
}
