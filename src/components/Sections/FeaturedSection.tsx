import Image from "next/image";
import React from "react";
import { AiFillCode } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa6";
import { LiaConnectdevelop } from "react-icons/lia";
import { PiGraphLight } from "react-icons/pi";
import DeepLearningCarPic from "/public/Projects/DeepLearningCars.png";
import CIMDPPic from "/public/Projects/Forcasting.png";
import RiftPic from "/public/Projects/Rift.png";
import TerminalMonopoyPic from "/public/Projects/Monopoly.png";

function FeaturedSection() {
  const flexCards = [
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
  return (
    <section
      className="buckets bg-zinc-900 min-h-screen flex flex-col gap-32"
      id="mywork"
    >
      <div className="w-full h-full flex flex-wrap p-10 justify-center items-center gap-16 select-none">
        {flexCards.map((flex, index) => {
          return (
            <div
              key={index}
              className="h-48 w-64 flex flex-col hover:text-cyan-400 hover:scale-110 duration-200 transition-all"
            >
              <div className="w-full h-16 flex justify-center items-center ">
                <span className="w-16 h-full text-5xl flex justify-center items-center text-center bg-neutral-950 rounded-full mt-16 z-10 bg-opacity-40">
                  {flex.icon}
                </span>
              </div>
              <div className="bg-neutral-950 flex flex-1 bg-opacity-50 justify-center items-center text-center pt-4 flex-col rounded-sm">
                <p className="text-5xl">{flex.count}</p>
                <p className="text-xl">{flex.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="m-4 flex flex-1 flex-col items-center gap-10">
        <div className="w-full h-fit mb-10 flex justify-center items-end">
          <a href="#">
            {/* Change to /MyProjects */}
            <p className="w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all">
              View All Projects
            </p>
          </a>
        </div>
        <div className="w-full h-fit flex items-center justify-center">
          <p className="text-2xl md:text-4xl text-center select-none w-full">
            Featured Projects
          </p>
        </div>
        <div className="w-full flex flex-wrap flex-1 gap-10 justify-center">
          <div className="w-45rem h-72rem bg-neutral-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col ">
            <p className="text-2xl text-center w-full font-bold text-cyan-400">
              Deep Learning Car Race
            </p>
            <Image alt="Deep Learning Car Race" src={DeepLearningCarPic} />
            <p className="w-full flex-1">
              <b>Programming Language: </b>Python
              <br />
              <br />
              <b>Concepts used: </b>Genetic Algorithm, Reinforcement Learning,
              Deep Learning
              <br />
              <br />
              <b>Highlights: </b>
              <br />
              This project merges the NEAT algorithm with neural networks,
              allowing virtual cars to evolve driving skills across generations.
              Through trial, error, and adjustments, these cars gradually
              conquer a challenging track, offering a glimpse into the potential
              of reinforcement learning and AI adaptation
            </p>
            <br />
            <div className="w-full flex flex-row gap-10">
              {/* <a href='/InProgress'  className=' w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all'>Demo</a> */}
              <p className=" w-fit h-fit border p-3 select-none border-gray-600 duration-200 transition-all">
                Demo
              </p>
              <a
                href="https://github.com/Vaarun-Kamath/Deep-Learning-Cars"
                target="_blank"
                className="w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all"
              >
                Code
              </a>
            </div>
            <p className="w-full text-center text-lg font-semibold text-cyan-400">
              1/4
            </p>
          </div>
          <div className="w-45rem h-72rem bg-neutral-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col ">
            <p className="text-2xl text-center w-full font-bold text-cyan-400">
              Inventory Management & Demand Prediction
            </p>
            <Image
              alt="Cisco Inventory Management and Demand Prediction"
              src={CIMDPPic}
            />
            <p className="w-full flex-1">
              <b>Programming Language: </b>Python (Google Colab and Jupyter
              Notebook)
              <br />
              <br />
              <b>Concepts used: </b>Machine Learning, EDA, Data Analysis, Data
              Visualization
              <br />
              <br />
              <b>Highlights: </b>
              <br />
              This is a hackathon project, whose problem statement was given by
              Cisco. Cisco had given us a dataset containing information
              regarding thier products, such as Business family, Booked
              quantity, Fiscal quarter, PLID etc. The goal of the project was to
              predict the demand in the upcoming fiscal quarter.
            </p>
            <br />
            <div className="w-full flex flex-row  gap-10">
              {/* <a href='/InProgress'   className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all'>Demo</a> */}
              <p className=" w-fit h-fit border p-3 select-none border-gray-600 duration-200 transition-all">
                Demo
              </p>
              <a
                href="https://github.com/Vaarun-Kamath/HashCode-Cisco-Inventory-Management-and-Demand-Prediction"
                target="_blank"
                className="w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all"
              >
                Code
              </a>
            </div>
            <p className="w-full text-center text-lg font-semibold text-cyan-400">
              2/4
            </p>
          </div>
          <div className="w-45rem h-72rem bg-neutral-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col ">
            <p className="text-2xl text-center w-full font-bold text-cyan-400">
              Rift Website
            </p>
            <Image alt="Rift Website" src={RiftPic} />
            <p className="w-full flex-1">
              <b>Programming Language: </b>NodeJS, ReactJS, Javascript
              <br />
              <br />
              <b>Concepts used: </b>Web Development, MERN stack
              <br />
              <br />
              <b>Highlights: </b>
              <br />
              This is a social media site made specifically for gamers. A user
              can post any text or clip on this platform which is publically
              viewed by everyone on the platform. Website also has an option to
              direct message other online users.
              <br />
              <br />
              <span className="font-semibold text-cyan-400">
                Note - This project is still in development
              </span>
            </p>
            <br />
            <div className="w-full flex flex-row  gap-10">
              <p className=" w-fit h-fit border p-3 select-none border-gray-600 duration-200 transition-all">
                Demo
              </p>
              <a
                href="https://github.com/Vaarun-Kamath/Rift"
                target="_blank"
                className="w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all"
              >
                Code
              </a>
            </div>
            <p className="w-full text-center text-lg font-semibold text-cyan-400">
              3/4
            </p>
          </div>
          <div className="w-45rem h-72rem bg-neutral-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col ">
            <p className="text-2xl text-center w-full font-bold text-cyan-400">
              Terminal Monopoly
            </p>
            <Image alt="Terminal Monopoly" src={TerminalMonopoyPic} />
            <p className="w-full flex-1">
              <b>Programming Language: </b>C Programming
              <br />
              <br />
              <b>Concepts used: </b>Basic C programming
              <br />
              <br />
              <b>Highlights: </b>
              <br />
              This project is entirely made in C with no external libraries. It
              is a game of monopoly with a max of 4 players, each player rolls a
              dice and lands on a property, given an initial amount of money the
              player can choose to buy or not bye the property. If player
              chooses to buy then if other player lands on that property, the
              other player has to pay rent. Each property has its own cost and
              rent. Players must think strategically and choose which property
              to buy. Last player not bankrupt wins!
            </p>
            <br />
            <div className="w-full flex flex-row  gap-10">
              <p className=" w-fit h-fit border p-3 select-none border-gray-600 duration-200 transition-all">
                Demo
              </p>
              <a
                href="https://github.com/Vaarun-Kamath/Monopoly-Game"
                target="_blank"
                className="w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all"
              >
                Code
              </a>
            </div>
            <p className="w-full text-center text-lg font-semibold text-cyan-400">
              4/4
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
