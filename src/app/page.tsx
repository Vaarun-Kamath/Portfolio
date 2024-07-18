// 'use-client';
import React from "react";
import "./globals.css";
import FrontPage from "@/components/Sections/FrontPage";
import FeaturedSection from "@/components/Sections/FeaturedSection";
import ContactSection from "@/components/Sections/ContactSection";
import { flexCards } from "@/constants";
import FlexSection from "@/components/Sections/FlexSection";
import AboutSection from "@/components/Sections/AboutSection";

export default function Home() {
  return (
    <>
      <FrontPage />
      <section>
        <div className="flex flex-col gap-10 px-20 justify-center items-center mt-20">
          <FlexSection />
          {/* <AboutSection /> */}
          <FeaturedSection />
        </div>
      </section>
    </>
  );
}
