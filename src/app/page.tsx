import React from 'react';
import './globals.css'
import TextTypingAnimate from './TextTypingAnimate';

import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'


export default function Home() {
	
	return (
		
		<main className={'min-h-screen min-w-full'}>
			<section className='page1 bg-gradient-to-b from-black to-zinc-900 min-h-screen flex flex-col items-center justify-center gap-16'>
				<div className='myNameContainer h-full w-full flex flex-col items-center justify-center gap-5'>
					<div className='flex items-center h-10'>
						<TextTypingAnimate value='Varun Kamath' tag='h1'/>
					</div>
					<div className='flex justify-center items-center mr-16 ml-16 text-center'>
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
					<a href='/About' className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>About Me</a>
					<a href='#mywork'  className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>My Work</a>
					<a href='#resume'  className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Resume</a>
				</div>
			</section>
			<section className='buckets bg-zinc-900 min-h-screen' id='mywork'>
				<div className='w-full h-full flex flex-wrap p-10 justify-center items-center gap-16'>
					<div className='h-32 w-64 bg-neutral-950'>
						<i>hello</i>
					</div>
					<div className='h-32 w-64 bg-neutral-950'>

					</div>
					<div className='h-32 w-64 bg-neutral-950'>

					</div>
					<div className='h-32 w-64 bg-neutral-950'>

					</div>
					<div className='h-32 w-64 bg-neutral-950'>

					</div>

				</div>
			</section>
    	</main>
	)
}
