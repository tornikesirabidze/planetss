import React, { useContext, useState } from 'react'

import { Context } from './Technology'

function TechBtn() {


    const [movetech, setMoveTech, techActive, setTechActive] = useContext(Context)

    

    const activefix=(index)=>{
        setTechActive(index)
    }

    const moveTech = (pos) => {
        if (pos == "first") {
            setMoveTech(0)
        }
        if (pos == "second") {
            setMoveTech(-window.innerWidth)
        }
        if (pos == "third") {
            setMoveTech(-window.innerWidth * 2)
        }
    }


    return (
        <div className=' lg:flex-col flex gap-[2rem] '>
            <div onClick={() => { moveTech("first"),activefix(0) }} className={`lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] flex items-center justify-center rounded-full heading-font-400 cursor-pointer border-[1px] border-white ${techActive===0? "bg-white":"primary-color--300 text-white" }`}>1</div>
            <div onClick={() => { moveTech("second"),activefix(1) }} className={`lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] flex items-center justify-center rounded-full heading-font-400 cursor-pointer border-[1px] border-white ${techActive===1? "bg-white":"primary-color--300 text-white" }`}>2</div>
            <div onClick={() => { moveTech("third"),activefix(2) }} className={`lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] flex items-center justify-center rounded-full heading-font-400 cursor-pointer border-[1px] border-white ${techActive===2? "bg-white":"primary-color--300 text-white" }`}>3</div>

        </div>
    )
}

export default TechBtn
