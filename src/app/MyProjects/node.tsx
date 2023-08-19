import React from 'react'
import Image from 'next/image'

type MyComponentProps = React.PropsWithChildren<{}>;

function node({children}: MyComponentProps) {
	return (
		<div className='w-fit h-70 bg-zinc-950 bg-opacity-50 p-10 pb-3 overflow-hidden bg-contain relative items-center flex gap-3 flex-col text-base'>
			<p className='text-2xl text-center w-full font-bold text-cyan-400'>Deep Learning Car Race</p>
			{children}
			<p className='w-full flex-1'>
				<b>Programming Language: </b>Add Programming Language
				<br/><br/>
				<b>Concepts used: </b>Add Concepts Used
				<br/><br/>
				<b>Description: </b><br/> Add Description
			</p>
			<br/>
			<div className='w-full flex flex-row  gap-10'>
				<a href='/InProgress'  className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Demo</a>
				<a href='https://github.com/Vaarun-Kamath/Deep-Learning-Cars' target='_blank'   className='w-fit h-fit border p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200'>Code</a>
			</div>
		</div>
	)
}

export default node