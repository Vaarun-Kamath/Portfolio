import React from 'react';
import './globals.css'
import TextTypingAnimate from './TextTypingAnimate';
import { Fira_Code } from 'next/font/google';
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'

const FiraCode = Fira_Code({
	subsets: ['latin'],
	weight: ['400', '500'],
})

export default function Home() {
	
	return (
		
		<main className={FiraCode.className + ' min-h-screen min-w-full'}>
			<section className='page1 bg-gradient-to-b from-black to-zinc-900 min-h-screen flex flex-col items-center justify-center gap-16'>
				<div className='myNameContainer h-full w-full flex flex-col items-center justify-center gap-5'>
					<div className='flex items-center h-10'>
						<TextTypingAnimate value='Varun Kamath' tag='h1'/>
					</div>
					<div className='flex items-center'>
					{/* <TextTypingAnimate value='Aspiring Software Developer | AI/ML Enthusiast | Web Development Enthusiast' tag='h3'/> */}
						<h3>Aspiring Software Developer | AI/ML Enthusiast | Web Development Enthusiast</h3>
					</div>
				</div>
				
				<div className='socials flex flex-row gap-16'>
					<a href='https://twitter.com/Varun_K993' className=            'w-fit h-fit flex justify-center items-center rounded text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><IoLogoTwitter/></span></a>
					<a href='https://www.linkedin.com/in/varunkamath03/' className='w-fit h-fit flex justify-center items-center rounded text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><AiFillLinkedin/></span></a>
					<a href='#mail.varunkamath@gmail.com' className=               'w-fit h-fit flex justify-center items-center rounded text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><MdEmail/></span></a>
					<a href='https://github.com/Vaarun-Kamath' className=          'w-fit h-fit flex justify-center items-center rounded text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><AiFillGithub/></span></a>
					<a href='https://www.instagram.com/varun_k993/' className=     'w-fit h-fit flex justify-center items-center rounded text-4xl text-slate-200 shadow-md duration-200 hover:scale-110 hover:text-cyan-400'><span><AiFillInstagram/></span></a>
				</div>
				<div className='jump flex flex-row gap-24'>
					<a href='#aboutme' className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>About Me</a>
					<a href='#mywork'  className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>My Work</a>
					<a href='#resume'  className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Resume</a>
				</div>
			</section>
			<section className='page2 bg-zinc-900 min-h-screen flex flex-row' id='aboutme'>
				<div className='mypic min-h-full border border-red-500'>
					
				</div>
				<div className='content '>
					
				</div>
			</section>
			<section className='page2 bg-zinc-900 min-h-screen' id='mywork'>
				<div>
					My Work
				</div>
			</section>
    	</main>
	)
}
