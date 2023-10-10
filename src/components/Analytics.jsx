import React from 'react'
import Laptop from '../Assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full py-16 px-4 text-center '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} className='w-[500px] mx-auto my-4' alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Data Analytics DashBoard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data analytics Centrally</h1>
                <p >
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in the 1960s with 
                the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software 
                like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button className='bg-[#00df91] w-[200px] rounded-md  font-medium my-6 mx-auto md:mx-0 py-3 text-black' >Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics