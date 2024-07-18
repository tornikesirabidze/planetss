import React from 'react'
import { heroText } from '../utils'
import { herobg, heromob, herotab } from '../assets'

function Home() {
    return (
        <div className=' home-bg w-full h-[100vh] flex text-center lg:p-[10rem] lg:pb-[5rem] p-[1.5rem]'>
            <div className='flex lg:flex-row flex-col pb-[1rem] lg:gap-0 gap-[2rem] lg:justify-between justify-end lg:items-end items-center w-full ' >
                <div className='pb-0 text-white  '>
                    <h2 className='--fontfamily--100 subheading--100 primary-color--200 '>{heroText[0].h2}</h2>
                    <h1 className='--fontfamily--300 heading-font-100'>{heroText[0].h1}</h1>
                    <p className='--fontfamily--200 --paragraph--100 primary heading-font-100-color--200 sm:max-w-[28rem] max-w-[30rem] text-start' >{heroText[0].p}</p>
                </div>
                <div className='button1 w-[274px] h-[274px] --fontfamily--300 heading-font-400  bg-white rounded-full cursor-pointer flex justify-center items-center ' >
                    EXPLORE
                    <div className='lg:w-[274px] lg:h-[274px] w-[250px] h-[250px] bg-white rounded-full absolute opacity-[0.5]' />
                </div>
            </div>
        </div>
    )
}

export default Home
