// 'use-client';
import React from 'react';
import './globals.css'
import TextTypingAnimate from './TextTypingAnimate';
import Image from 'next/image'
// import {AiFillLinkedin} from 'react-icons/ai/'
import {AiFillLinkedin} from 'react-icons/ai/index'
import {IoLogoTwitter} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillCode} from 'react-icons/ai'
import {FaMapLocationDot} from 'react-icons/fa6'
import {LiaConnectdevelop} from 'react-icons/lia'
import {FaLaptopCode} from 'react-icons/fa'
import {PiGraphLight} from 'react-icons/pi'
import {BiSolidPhoneCall} from 'react-icons/bi'
import DeepLearningCarPic from '../../public/Projects/DeepLearningCars.png'
import CIMDPPic from '../../public/Projects/Forcasting.png'
import RiftPic from '../../public/Projects/Rift.png'
import TerminalMonopoyPic from '../../public/Projects/Monopoly.png'
import Contact from './contact'

export default function Home() {
	// const Resume = require("./Resume.pdf")
	
	return (
		<main className={'h-screen w-screen'}>
			<section className='page1 min-h-screen w-screen bg-gradient-to-b from-black to-zinc-900 flex flex-col items-center justify-center gap-16' id='top'>
				<div className='myNameContainer h-full w-full flex flex-col items-center justify-center gap-5'>
					<div className='flex justify-center items-center h-10 text-center pl-10'>
						<TextTypingAnimate value='Varun Kamath' tag='h1'/>
					</div>
					<div className='flex justify-center items-center mr-16 ml-16 text-center'>
					{/* <TextTypingAnimate value='Aspiring Software Developer | AI/ML Enthusiast | Web Development Enthusiast' tag='h3'/> */}
						<h3>Aspiring Software Developer | AI/ML Enthusiast | Web Development Enthusiast</h3>
					</div>
				</div>
				
				<div className='socials w-full h-fit flex flex-row gap-10 justify-center items-center'>
					<a target='_blank' href='https://twitter.com/Varun_K993'             className='w-fit h-fit flex justify-center items-center rounded text-3xl md:text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><IoLogoTwitter/></span></a>
					<a target='_blank' href='https://www.linkedin.com/in/varunkamath03/' className='w-fit h-fit flex justify-center items-center rounded text-3xl md:text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><AiFillLinkedin/></span></a>
					<a                 href='#contactme'                		         className='w-fit h-fit flex justify-center items-center rounded text-3xl md:text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><MdEmail/></span></a>
					<a target='_blank' href='https://github.com/Vaarun-Kamath'           className='w-fit h-fit flex justify-center items-center rounded text-3xl md:text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><AiFillGithub/></span></a>
					<a target='_blank' href='https://www.instagram.com/varun_k993/'      className='w-fit h-fit flex justify-center items-center rounded text-3xl md:text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><AiFillInstagram/></span></a>
				</div>
				<div className='jump flex flex-row gap-10 p-3'>
					<a href='/About'   className='w-fit h-fit border p-2 md:p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>About Me</a>
					<a href='#mywork'  className='w-fit h-fit border p-2 md:p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>My Work</a>
					<a href='/Resume'  className='w-fit h-fit border p-2 md:p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200' target='_blank' rel="noreferrer"  >Resume</a>
				</div>
			</section>
			<section className='buckets bg-zinc-900 min-h-screen flex flex-col gap-32' id='mywork'>
				<div className='w-full h-full flex flex-wrap p-10 justify-center items-center gap-16 select-none'>
					<div className='h-48 w-64 flex flex-col hover:text-cyan-400 hover:scale-110 duration-200'>
						<div className='w-full h-16 flex justify-center items-center '><span className='w-16 h-full text-5xl flex justify-center items-center text-center bg-neutral-950 rounded-full mt-16 z-10 bg-opacity-40'><LiaConnectdevelop/></span></div>
						<div className='bg-neutral-950 flex flex-1 bg-opacity-50 justify-center items-center text-center pt-4 flex-col rounded-sm'><p className='text-5xl'>3</p><p className='text-xl'>Hackathons</p></div>
					</div>
					<div className='h-48 w-64 flex flex-col hover:text-cyan-400 hover:scale-110 duration-200'>
						<div className='w-full h-16 flex justify-center items-center '><span className='w-16 h-full text-5xl flex justify-center items-center text-center bg-neutral-950 rounded-full mt-16 z-10 bg-opacity-40'><AiFillCode/></span></div>
						<div className='bg-neutral-950 flex flex-1 bg-opacity-50 justify-center items-center text-center pt-4 flex-col rounded-sm'><p className='text-5xl'>6</p><p className='text-xl'>Personal Projects</p></div>
					</div>
					<div className='h-48 w-64 flex flex-col hover:text-cyan-400 hover:scale-110 duration-200'>
						<div className='w-full h-16 flex justify-center items-center '><span className='w-16 h-full text-5xl flex justify-center items-center text-center bg-neutral-950 rounded-full mt-16 z-10 bg-opacity-40'><FaLaptopCode/></span></div>
						<div className='bg-neutral-950 flex flex-1 bg-opacity-50 justify-center items-center text-center pt-4 flex-col rounded-sm'><p className='text-5xl'>6</p><p className='text-xl'>Team Projects</p></div>
					</div>
					<div className='h-48 w-64 flex flex-col hover:text-cyan-400 hover:scale-110 duration-200'>
						<div className='w-full h-16 flex justify-center items-center '><span className='w-16 h-full text-5xl flex justify-center items-center text-center bg-neutral-950 rounded-full mt-16 z-10 bg-opacity-40'><PiGraphLight/></span></div>
						<div className='bg-neutral-950 flex flex-1 bg-opacity-50 justify-center items-center text-center pt-4 flex-col rounded-sm'><p className='text-5xl'>3</p><p className='text-xl'>Courses Completed</p></div>
					</div>
				</div>
				<div className='m-4 flex flex-1 flex-col items-center gap-10'>
					<div className='w-full h-fit mb-10 flex justify-center items-end'>
						{/* <a href='/MyProjects'  className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>View All Projects</a> */}
						<p className=' w-fit h-fit border p-3 select-none border-gray-600 duration-200'>View All Projects</p>
									
					</div>
					<div className='w-full h-fit flex items-center justify-center'>
						<p className='text-2xl md:text-4xl text-center select-none w-full'>Featured Projects</p>
					</div>
					<div className='w-full flex flex-wrap flex-1 gap-10 justify-center items-center'>
						{/* <div className='w-96 h-72 rounded-md bg-neutral-950 bg-opacity-50 p-10 overflow-hidden relative'>
							<Image alt='ProfilePic' src={ProfilePic} layout='fill' objectFit='cover'/>
						</div> */}
						<div className='w-45rem h-70 bg-neutral-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col '>
							<p className='text-2xl text-center w-full font-bold text-cyan-400'>Deep Learning Car Race</p>
							<Image alt='Deep Learning Car Race' src={DeepLearningCarPic}/>
							<p className='w-full flex-1'>
								<b>Programming Language: </b>Python
								<br/><br/>
								<b>Concepts used: </b>Genetic Algorithm, Reinforcement Learning, Deep Learning
								<br/><br/>
								<b>Description: </b><br/>This project merges the NEAT algorithm with neural networks, allowing virtual cars to evolve driving skills across generations. Through trial, error, and adjustments, these cars gradually conquer a challenging track, offering a glimpse into the potential of reinforcement learning and AI adaptation
							</p>
							<br/>
							<div className='w-full flex flex-row  gap-10'>
								{/* <a href='/InProgress'  className=' w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Demo</a> */}
								<p className=' w-fit h-fit border p-3 select-none border-gray-600 duration-200'>Demo</p>
								<a href='https://github.com/Vaarun-Kamath/Deep-Learning-Cars' target='_blank'   className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Code</a>
							</div>
							<p className='w-full text-center text-lg font-semibold text-cyan-400'>1/4</p>
						</div>
						<div className='w-45rem h-70 bg-neutral-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col '>
							<p className='text-2xl text-center w-full font-bold text-cyan-400'>Inventory Management & Demand Prediction</p>
							<Image alt='Cisco Inventory Management and Demand Prediction' src={CIMDPPic}/>
							<p className='w-full flex-1'>
								<b>Programming Language: </b>Python (Google Colab and Jupyter Notebook)
								<br/><br/>
								<b>Concepts used: </b>Machine Learning, EDA, Data Analysis, Data Visualization
								<br/><br/>
								<b>Description: </b><br/>This is a hackathon project, whose problem statement was given by Cisco. Cisco had given us a dataset containing information regarding thier products, such as Business family, Booked quantity, Fiscal quarter, PLID etc. The goal of the project was to predict the demand in the upcoming fiscal quarter.
							</p>
							<br/>
							<div className='w-full flex flex-row  gap-10'>
								{/* <a href='/InProgress'   className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Demo</a> */}
								<p className=' w-fit h-fit border p-3 select-none border-gray-600 duration-200'>Demo</p>
								<a href='https://github.com/Vaarun-Kamath/HashCode-Cisco-Inventory-Management-and-Demand-Prediction' target='_blank'   className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Code</a>
							</div>
							<p className='w-full text-center text-lg font-semibold text-cyan-400'>2/4</p>
						</div>
						<div className='w-45rem h-70 bg-neutral-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col '>
							<p className='text-2xl text-center w-full font-bold text-cyan-400'>Rift Website</p>
							<Image alt='Rift Website' src={RiftPic}/>
							<p className='w-full flex-1'>
								<b>Programming Language: </b>NodeJS, ReactJS, Javascript
								<br/><br/>
								<b>Concepts used: </b>Web Development, MERN stack
								<br/><br/>
								<b>Description: </b><br/>This is a social media site made specifically for gamers. A user can post any text or clip on this platform which is publically viewed by everyone on the platform. Website also has an option to direct message other online users.
								<br/><br/>
								<span className='font-semibold text-cyan-400'>Note - This project is still in development</span>
							</p>
							<br/>
							<div className='w-full flex flex-row  gap-10'>
								<p className=' w-fit h-fit border p-3 select-none border-gray-600 duration-200'>Demo</p>
								<a href='https://github.com/Vaarun-Kamath/Rift' target='_blank'   className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Code</a>
							</div>
							<p className='w-full text-center text-lg font-semibold text-cyan-400'>3/4</p>
						</div>
						<div className='w-45rem h-70 bg-neutral-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col '>
							<p className='text-2xl text-center w-full font-bold text-cyan-400'>Terminal Monopoly</p>
							<Image alt='Terminal Monopoly' src={TerminalMonopoyPic}/>
							<p className='w-full flex-1'>
								<b>Programming Language: </b>C Programming
								<br/><br/>
								<b>Concepts used: </b>Basic C programming
								<br/><br/>
								<b>Description: </b><br/>This project is entirely made in C with no external libraries. It is a game of monopoly with a max of 4 players, each player rolls a dice and lands on a property, given an initial amount of money the player can choose to buy or not bye the property. If player chooses to buy then if other player lands on that property, the other player has to pay rent. Each property has its own cost and rent. Players must think strategically and choose which property to buy. Last player not bankrupt wins!
							</p>
							<br/>
							<div className='w-full flex flex-row  gap-10'>
								<p className=' w-fit h-fit border p-3 select-none border-gray-600 duration-200'>Demo</p>
								<a href='https://github.com/Vaarun-Kamath/Monopoly-Game' target='_blank'   className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Code</a>
							</div>
							<p className='w-full text-center text-lg font-semibold text-cyan-400'>4/4</p>
						</div>
					</div>
				</div>
				<div id='contactme' className='w-screen h-screen bg-gradient-to-b from-zinc-900 to-black flex justify-center items-center flex-col'>
					<div className='w-25rem h-full flex justify-center items-center flex-col gap-16 p-10'>
						<div className='w-full h-fit flex justify-center'>
							<p className='text-4xl select-none'>Contact Me</p>
						</div>
						<Contact />
					</div>
					<div className='w-full h-fit bg-cyan-400 flex flex-wrap gap-10 p-5 justify-between items-center text-zinc-950'>
						<div className='w-fit flex gap-3 flex-col'>
							<span className='text-2xl flex flex-row gap-4'><FaMapLocationDot /><p className='text-base'>Bangalore, Karnataka, India</p></span>
							<span className='text-2xl flex flex-row gap-4'><BiSolidPhoneCall /><p className='text-base'>+91 7666069061</p></span>
							<span className='text-2xl flex flex-row gap-4'><MdEmail /><p className='text-base'>mail.varunkamath@gmail.com</p></span>
						</div>
						<div className='h-fit w-fit flex justify-center items-center'>
							<a href='#top'  className='w-fit h-fit border border-zinc-950 p-2 md:p-3 hover:bg-zinc-950 hover:text-slate-200 border-bg-zinc-950 duration-200'>Back to Top</a>
						</div>
					</div>
				</div>
				
			</section>
    	</main>
	)
}
