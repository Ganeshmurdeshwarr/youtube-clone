import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'

const Login = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-gray-800 w-[60%] lg:w-[45%] h-auto m-auto mt-[40%] md:mt-[20%] lg:mt-[12%] px-6 py-14  flex flex-col items-center justify-center text-black font-semibold rounded-2xl'>
        <img className='rounded-[40px] w-[200px] h-[120px] lg:w-[300px] lg:h-[180px] ' src={youtube_icon} alt="" />
        <button className='my-4 bg-white px-3 py-2 rounded-md w-fit 
         '>Login with Google</button>
        <p className='hidden md:block text-start text-sm self-center text-white lg:text-xl '>This Youtube Clone is Done by Ganesh Devadiga</p>
        <div className='md:hidden text-center  text-white font-semibold'>
        <p className='text-sm'>This Youtube-Clone is done </p>
        <p>by</p>
        <p className='font-bold'>Ganesh Devadiga</p>
        </div>
        </div>
    </div>
  )
}

export default Login