import React from 'react';
// import Style from './Styles/Greeting.module.css';
import './Styles/Style.css';

const Props = (props) => {
  return (
    <div className='flex justify-around'>
        <div className='rounded-2xl shadow my-8 w-80 hover:outline-green-500 cursor-pointer main'>
            <div className='bg-blue-500 flex justify-center p-8 box-1'>
                <img src={props.img} alt='Image1' className='h-40 w-40 p-4 bg-gray-400 rounded-3xl outline-8 outline-double outline-white hover:duration-500 hover:outline-orange-500'></img>
            </div>
            <div className='p-2 py-6 box-2 bg-white'>
                <h2 className='font-semibold text-xl hover:text-lime-700 cursor-pointer py-4 underline uppercase'>{props.name}</h2>
                <p className='text-sm px-5 text-slate-500'>{props.disc}</p>
                <button className='bg-blue-500 hover:bg-orange-500 hover:scale-x-110 px-4 py-1 rounded-lg text-white my-2'>View More</button>
            </div>
        </div>
    </div>
  )
}

export default Props;
