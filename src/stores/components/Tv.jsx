


import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
    const firstFiveImages = tvData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2 className='text'>Smart TV</h2>
    </div>
    
       <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="" />
                
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Tv