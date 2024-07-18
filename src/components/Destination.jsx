import React, { useState } from 'react'
import { Europa, Moon } from '../assets'
import { destinationNavbar } from '../utils'
import Desitnationpg from './Desitnationpg'
import { Link, Outlet } from 'react-router-dom'



function Destination() {


    const Moveactive=()=>{

        let paThname=window.location.pathname
        if(paThname=="/destination/0"){
            return 0
        }
        if(paThname=="/destination/1"){
            return 1
        }
        if(paThname=="/destination/2"){
            return 2
        }
        if(paThname=="/destination/3"){
            return 3
        }
        
    }
    const [index, SetIndex] = useState(Moveactive)


    const handlIndex = (i) => SetIndex(i)

    return (
        <div className=' dest-bg w-full pr-[1rem] h-full flex pt-[10rem] lg:items-center items-start '>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center lg:items-end items-center'>
                    <ul className='lg:flex flex lg:justify-end justify-center items-center lg:pr-[15.5rem] sm:pb-0 pb-[5rem] lg:pt-0 lg:relative absolute  --fontfamily--100 subheading--200  gap-[2.3rem]'>
                        {destinationNavbar.map((item, i) => (
                            <Link to={`${i}`}>

                                <div>
                                    <span onClick={() => handlIndex(i)} className='text-white'>{item.span}</span>
                                    {index == i && <div className='bg-white w-full h-[.2rem] rounded-t-md ' />}
                                </div>
                            </Link>
                        ))}
                    </ul>
                    
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default Destination
