import React, { useState } from 'react'
import Categories from '../../componets/categoriesBar/Categories'
import Video from '../../componets/video/Video'
import { Link } from 'react-router-dom'

const Home = ({openSidBar}) => {

  
  return (
    <section className={`mt-10 md:mt-16 pt-2 md:ml-14   
     ${openSidBar?'lg:ml-48':'lg:ml-20'}`}>
        <Categories/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 mx-2  gap-y-4 md:gap-x-2  lg:gap-x-3 scroll-smooth '>
          {  [...new Array(20)].map((item, idx)=>{
            return  <Link to={'player'}> <Video key={idx}/></Link>
          })}
        </div>
      
    </section>
  )
}

export default Home