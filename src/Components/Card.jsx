import React from 'react'

const Card = ({ img, title, desc }) => {
    return (
        <div className='w-[250px] h-[300px] px-5 py-2 bg-white rounded-2xl flex flex-col justify-evenly items-center 
            shadow-lg shadow-slate-300 hover:scale-110 duration-300 ease-in-out z-10 relative'>
            <div className='w-full h-[20%] flex justify-center items-center'>
                <img className="h-18 w-18 object-cover" src={img} alt={title} />
            </div>
            <h3 className='text-lg md:text-xl font-semibold'>{title}</h3>
            <p className='text-center text-sm md:text-sm text-slate-500'>{desc}</p>
        </div>
    )
}

export default Card