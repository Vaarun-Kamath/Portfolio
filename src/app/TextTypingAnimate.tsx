'use client'
import Typed from 'typed.js';
import $ from "jquery";
import './globals.css'
import React from 'react'


function TextTypingAnimate({value = "text", tag = "h1"}) {
    const el = React.useRef(null);
	

	React.useEffect(() => {
		const typed = new Typed(el.current, {
		  strings: [value],
		  typeSpeed: 50,
		  
		});

		{$(".typed-cursor").css("font-size","xx-large") }
		{$(".typed-cursor").css("font-size","xx-large") }

	
		return () => {
		  // Destroy Typed instance during cleanup to stop animation
		  typed.destroy();
		};
	  }, []);
	return (
		<h1 className='flex text-4xl pl-5 font-medium whitespace-nowrap overflow-hidden' ref={el}></h1>
	)
}

export default TextTypingAnimate