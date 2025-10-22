import React from 'react'
import youtube_thum from '../../assets/youtub_thum.jpg'
import profile_pic from '../../assets/profile_pic.jpg'
import { IoMdMore } from 'react-icons/io'

const Video = () => {
  return (
    <div className='relative z-10  rounded-2xl text-white hover:bg-[#2e2e2e] transition-all duration-500 p-2  '>
        <img className=' w-fit rounded-2xl ' src={youtube_thum} alt="" />
        <h2 className='absolute right-3 top-[53%] md:top-[48%] bg-black px-1 rounded-[5px]'>9:00:20</h2>
        <div className=' mt-4 flex gap-x-4 '>
          <img className='w-10 h-10 rounded-4xl' src={profile_pic} alt="" />
          <div>
            <h2>complete backend coding course in one day</h2>
            <h2 className='text-gray-400'>Complete coding by Prashant sir</h2>
            <div  className='text-gray-400'><span>100K views </span> <span>6 months ago</span></div>
          </div>
        <IoMdMore className=' h-10 w-10 block' />
        </div>
    </div>
  )
}

export default Video