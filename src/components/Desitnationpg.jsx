import React from 'react'
import { useParams } from 'react-router-dom'
import { destinationNavbar } from '../utils'

function Desitnationpg() {

    const { id } = useParams()




    return (
        <div className={`lg:flex-row flex flex-col w-[100vw] justify-between lg:px-[9rem]`}>
            <div className='text-white flex flex-col lg:flex-col gap-10 justify-start items-center'>
                <h1 className='pick  --fontfamily--100 subheading--100 sm:pl-[2rem] sm:w-full '><span className='font-bold primary-color--200 mr-[1.5rem]'>0{id}</span>PICK YOUR DESTINATION</h1>
                <img src={destinationNavbar[id].img} alt="" className='lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] ' />
            </div>


            <div className='flex flex-col justify-center items-center'>

                <div className='flex flex-col lg:items-start items-center lg:gap-[3rem] gap-[rem]'>
                    <h1 className='moon text-white lg:w-[120px] lg:mt-0 mt-[5rem] h-[115px] --fontfamily--300 heading-font-200 '>{destinationNavbar[id].h2}</h1>
                    <p className='desp text-white lg:max-w-[25rem] max-w-[573px] lg:max-h-[128px] max-h-[83px] lg:text-start text-center --fontfamily--200 subheading--000'>{destinationNavbar[id].p}</p>
                    <hr className=' lg:mt-0 mt-[5rem] w-full border-primary-color--200' />
                </div>
                
    
                <div className='sm:flex-row flex flex-col  sm:gap-[5rem] gap-[1rem] pt-[2 rem] lg:text-start text-center lg:justify-start justify-center'>
                    <div>
                        <p className='--fontfamily--100 primary-color--200 subheading--300 '>AVG. DISTANCE</p>
                        <h2 className='text-white  --fontfamily--300 heading-font-500'>{destinationNavbar[id].distance}</h2>
                    </div>
                    <div>
                        <p className='--fontfamily--100 primary-color--200 subheading--300'>EST. TRAVEL TI</p>
                        <h2 className='text-white  --fontfamily--300 heading-font-500'>{destinationNavbar[id].time}</h2>
                    </div>

                </div>
            </div>

            {/* tablet version */}






        </div>


    )
}

export default Desitnationpg
