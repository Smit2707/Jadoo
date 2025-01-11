import React from 'react'
import { FaPlay } from "react-icons/fa";


const Button = (props) => {
  return (
    <button className={`px-4 py-2 font-thin text-center rounded-full md:px-5 md:py-2 ${props.bg} ${props.hw} text-center w-fit text-white font-semibold sm:hover:shadow-xl sm:hover:scale-110 duration-300 ease-in-out`}>{props.name}</button>
  )
}

export default Button