import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from './Crew'

function CrewBtn() {
    
    
   
    const [move, setMove,activeIndex,setActiveIndex] = useContext(Context)
   
    
    const indexFixer=(index)=>{
        setActiveIndex(index)
    }
 

    const moveCrew = (pos) => {
       
        if (pos == "first" ) {
            
            setMove(0)
            
            
        }
        if (pos == "midle" ) {
            setMove(-window.innerWidth,)
        }
        if (pos == "second" ) {
            setMove(-window.innerWidth * 2)
        }
        if (pos == "third") {
            setMove(-window.innerWidth * 3)
        }
        
        

    }

    console.log(activeIndex)
    
    return (
        <div className='flex relative  z-[99] gap-[1rem] '>
            <div onClick={() => {moveCrew("first"),indexFixer(0)}} className={`cursor-pointer w-[20px] h-[20px] rounded-full  ${activeIndex===0? "bg-white":"primary-color--400"} `}></div>
            <div onClick={() => {moveCrew("midle"),indexFixer(1)}} className={`cursor-pointer w-[20px] h-[20px] rounded-full  ${activeIndex===1? "bg-white":"primary-color--400"} `}></div>
            <div onClick={() => {moveCrew("second"),indexFixer(2)}} className={`cursor-pointer w-[20px] h-[20px] rounded-full ${activeIndex===2?"bg-red-50":"primary-color--400"} `}></div>
            <div onClick={() => {moveCrew("third"),indexFixer(3)}} className={` rounded-full cursor-pointer w-[20px] h-[20px] ${activeIndex===3?"bg-white ":"primary-color--400"}`}></div>
        </div>


    )
}

export default CrewBtn
