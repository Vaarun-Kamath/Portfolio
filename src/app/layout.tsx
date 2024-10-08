import ContactSection from "@/components/Sections/ContactSection";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const FiraCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Varun Kamath",
  description: "My portfolio",
  // icons: {
  // 	icon: "icon.png"
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dns = require("dns");
  dns.setDefaultResultOrder("ipv4first");
  return (
    <html
      lang="en"
      className={
        FiraCode.className + " scroll-smooth overflow-x-hidden scrollbar-hide"
      }
    >
      <body className="bg-gradient-to-b from-black to-zinc-900 text-slate-200">
        {children}
      </body>
    </html>
  );
}
