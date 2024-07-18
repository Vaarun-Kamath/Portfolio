import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { UrlObject } from "url";

interface StyledLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  type?: string;
  href: string | UrlObject;
}

function StyledLink(props: StyledLinkProps) {
  return props.type === "external" ? (
    <a
      className={
        "w-32 border text-center md:p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all rounded-sm " +
        props.className
      }
      href={typeof props.href === "string" ? props.href : "/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ) : (
    <Link
      passHref
      href={props.href}
      className={clsx(
        "w-32 border text-center md:p-3 hover:bg-cyan-400 hover:text-stone-800 border-cyan-400 duration-200 transition-all rounded-sm " +
          props.className
      )}
    >
      {props.children}
    </Link>
  );
}

export default StyledLink;
