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
        "px-6 py-4 lg:px-10 text-white-1 text-sm md:text-base lg:text-lg font-bold bg-blue-2 hover:bg-blue-2-hover"
      }
      ${
        props.isPrimaryMD &&
        "px-7 py-3 text-white-1 text-sm lg:text-base font-semibold shadow-2xl shadow-blue-2 bg-blue-2 hover:bg-blue-2-hover"
      }
      ${
        props.isBlue &&
        "px-7 py-3 text-white-1 text-base font-semibold bg-blue-3 hover:bg-blue-3-hover"
      }
      ${
        props.isYellow &&
        "px-6 py-4 lg:px-10 text-blue-3 text-lg font-bold bg-yellow hover:bg-yellow-hover"
      }
      rounded-full transition-all duration-300`}
    >
      {props.children}
    </button>
  );
}
