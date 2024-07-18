import { TextSeperator } from "@/components/TextSeperator";
import {
  AiFillCode,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { GrHadoop } from "react-icons/gr";
import { IoLogoJavascript, IoLogoTwitter } from "react-icons/io";
import { LiaConnectdevelop } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { PiGraphLight } from "react-icons/pi";
import {
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiApachekafka,
  SiApachespark,
  SiKubernetes,
  SiRstudio,
} from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs, TbBrandMysql } from "react-icons/tb";

export const jumpLinks = [
  {
    name: "About Me",
    link: "/about",
  },
  {
    name: "My Projects",
    link: "/my-projects",
  },
  {
    name: "Resume",
    link: "/resume",
  },
];

export const flexCards = [
  {
    count: 6,
    title: "Hackathons",
    icon: <LiaConnectdevelop />,
  },
  {
    count: 7,
    title: "Personal Projects",
    icon: <AiFillCode />,
  },
  {
    count: 8,
    title: "Team Projects",
    icon: <FaLaptopCode />,
  },
  {
    count: 3,
    title: "Courses Completed",
    icon: <PiGraphLight />,
  },
];

export const socials = [
  {
    name: "Twitter",
    link: "https://twitter.com/Varun_K993",
    icon: <IoLogoTwitter />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/varunkamath03/",
    icon: <AiFillLinkedin />,
  },
  {
    name: "Email",
    link: "#contactme",
    icon: <MdEmail />,
  },
  {
    name: "GitHub",
    link: "https://github.com/Vaarun-Kamath",
    icon: <AiFillGithub />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/varun_k993/",
    icon: <AiFillInstagram />,
  },
];

export const techStack = [
  {
    topic: "Programming",
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <TbBrandCpp /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "Javascript", icon: <IoLogoJavascript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "R", icon: <SiRstudio /> },
    ],
  },
  {
    topic: "Web Development",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "NextJS", icon: <TbBrandNextjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <TbBrandMysql /> },
    ],
  },
  {
    topic: "Machine Learning",
    items: [
      { name: "Pytorch", icon: <SiPytorch /> },
      { name: "Tensorflow", icon: <SiTensorflow /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Numpy", icon: <SiNumpy /> },
    ],
  },
  {
    topic: "Big Data",
    items: [
      { name: "Apache Hadoop", icon: <GrHadoop /> },
      { name: "Apache Kafka", icon: <SiApachekafka /> },
      { name: "Apache Spark", icon: <SiApachespark /> },
    ],
  },
  {
    topic: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
    ],
  },
];
