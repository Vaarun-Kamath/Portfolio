import React from 'react'
import Image from 'next/image'
import DeepLearningCarPic from '../../../public/Projects/DeepLearningCars.png'
import CIMDPPic from '../../../public/Projects/Forcasting.png'
import RiftPic from '../../../public/Projects/Rift.png'
import TerminalMonopoyPic from '../../../public/Projects/Monopoly.png'
import Card from './node'

function MyProjects() {
  return (
    <main className='bg-gradient-to-b from-black to-zinc-900 flex flex-col min-h-screen gap-1'>
		<nav className='bg-transparent relative z-10 p-4 top-0 w-full flex flex-row gap-11 items-center'>
			<a href='/' className='h-fit sticky top-0 pl-3 pt-3 flex items-center justify-center text-center border w-20 p-3 border-cyan-400 hover:bg-cyan-400 hover:text-stone-800 duration-200'>Home</a>
			{/* <div className='text-center flex w-full h-full justify-center items-center'></div> */}
			<div className='flex-1'><h1 className='text-4xl'>My Projects</h1></div>
		</nav>
		<section className='page2 p-10 min-h-screen bg-gradient-to-b from-black to-zinc-900 flex flex-1 m-3 gap-5 flex-wrap justify-center'>
			<Card><Image alt='Deep Learning Car Race' src={CIMDPPic} width={400}/></Card>
			<Card><Image alt='Deep Learning Car Race' src={CIMDPPic} width={400}/></Card>
			<Card><Image alt='Deep Learning Car Race' src={CIMDPPic} width={400}/></Card>
			<Card><Image alt='Deep Learning Car Race' src={CIMDPPic} width={400}/></Card>
			<Card><Image alt='Deep Learning Car Race' src={CIMDPPic} width={400}/></Card>
			<Card><Image alt='Deep Learning Car Race' src={CIMDPPic} width={400}/></Card>
		</section>
	</main>
  )
}

export default MyProjects