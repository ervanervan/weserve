import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`inline-block
      ${props.className && props.className}
      ${
        props.isPrimary &&
        "px-6 py-4 lg:px-10 text-white-1 text-sm md:text-base lg:text-lg font-bold bg-blue-2 hover:bg-blue-2-hover transition-all duration-300"
      }
      ${
        props.isBlue &&
        "px-7 py-3 text-white-1 text-base font-semibold bg-blue-3 hover:bg-blue-3-hover transition-all duration-300"
      }
      ${
        props.isYellow &&
        "px-6 py-4 lg:px-10 text-blue-3 text-lg font-bold bg-yellow hover:bg-yellow-hover transition-all duration-300"
      }
      ${
        props.isWhite &&
        "px-6 py-4 lg:px-10 text-blue-2 text-base font-semibold bg-white-1 transition-all duration-300"
      }
      rounded-full`}
    >
      {props.children}
    </button>
  );
}
