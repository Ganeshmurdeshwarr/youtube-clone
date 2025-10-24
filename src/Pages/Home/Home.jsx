import React, { useEffect, useState } from 'react'
import Categories from '../../componets/categoriesBar/Categories'
import Video from '../../componets/video/Video'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getPopularVideos} from '../../Redux/actions/videos.action'
// import {videos , loading , error } from 

const Home = ({openSidBar}) => {


  const dispatch = useDispatch()
  const {videos , loading ,error} = useSelector((state)=> state.popularVideos)

  useEffect(()=>{
    dispatch(getPopularVideos());
  },[dispatch])

  
if(loading) return <p>Loading.....</p>
if(error) return <p>Error:{error}</p>

  return (
    <section className={`mt-10 md:mt-16 pt-2 md:ml-14   
     ${openSidBar?'lg:ml-48':'lg:ml-20'}`}>
        <Categories/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 mx-2  gap-y-4 md:gap-x-2  lg:gap-x-3 scroll-smooth '>
          { videos.map((item, idx)=>{
            return  <Link key={idx} to={'player'}> <Video /></Link>
          })}
        </div>
      
    </section>
  )
}

export default Home