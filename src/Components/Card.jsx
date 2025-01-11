import React from 'react'

const Card = (props) => {
    return (
        <div className='w-[250px] h-[300px] px-5 py-2 bg-white rounded-2xl flex flex-col justify-evenly items-center shadow-lg shadow-slate-300 hover:scale-110 duration-300 ease-in-out z-20'>
            <div className='w-full h-[20%] flex justify-center items-center'>
                <img className="h-18 w-18 object-cover" src={props.img} alt="" />
            </div>
            <h3 className='text-lg font-semibold'>{props.title}</h3>
            <p className='text-center text-sm text-slate-500'>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
    )
}

export default Card