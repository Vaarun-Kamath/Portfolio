"use client";
import $ from "jquery";
import React, { useEffect } from "react";

function TextTypingAnimate({ value = "text", tag = "h1" }) {
  const el = React.useRef(null);
  const Typed = require("typed.js");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [value],
      typeSpeed: 50,
    });
    if (tag === "h1") {
      {
        $(".typed-cursor").css("font-size", "xx-large");
      }
    } else if (tag === "p") {
      {
        $(".typed-cursor").css("font-size", "medium");
      }
    }
    return () => {
      typed.destroy();
    };
  });

  if (tag === "h1") {
    return (
      <h1
        className="flex text-4xl font-medium whitespace-nowrap overflow-hidden"
        ref={el}
      ></h1>
    );
  } else if (tag === "p") {
    return (
      <p
        className="flex font-medium whitespace-nowrap overflow-hidden"
        ref={el}
      ></p>
    );
  }
  return null;
}

export default TextTypingAnimate;
