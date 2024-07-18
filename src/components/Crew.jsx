import React, { useState } from 'react'
import { crewText } from '../utils'
import CrewBtn from './CrewBtn'
import { Link } from 'react-router-dom'
export const Context = React.createContext()

function Crew() {
    // const HandleCrewAct = () => {

    //     let CrewPath = window.location.pathname
    //     if (CrewPath == "/Crew/0") {
    //         return 0
    //     }
    //     if (CrewPath == "/Crew/1") {
    //         return 1
    //     }
    //     if (CrewPath == "/Crew/2") {
    //         return 2
    //     }
    //     if (CrewPath == "/Crew/3") {
    //         return 3
    //     }
    // }

    // const [crewAct, setCrewAct] = useState(HandleCrewAct)
    const [move, setMove] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)




    return (

        <Context.Provider value={[move, setMove, activeIndex, setActiveIndex]}>



            <div className='overflow-hidden w-[100vw] crew-bg'>
                <div className={`scrolmain overflow-hidden justify-between h-[100vh] transition-all  sm:flex hidden  relative z-[5]`} style={{ width: `${window.innerWidth * 4}px`, left: `${move}px` }}>
                    {crewText.map((item, index) => (
                        <div key={index} className={` w-[100vw] h-[100vh] flex lg:flex-row justify-between flex-col lg:gap-[5rem] gap-[1rem] items-center `}>
                            <div className='flex flex-col pl-[5rem] w-full lg:items-start items-center  lg:text-start text-center  '>
                                <h1 className=' text-white w-full text-start lg:pl-0 pl-[2rem] lg:mt-[0]   --fontfamily--100 subheading--003 mt-[12rem] '><span className='font-bold primary-color--200 mr-[1rem]'>02</span>MEET YOUR CREW</h1>
                                <div className='flex flex-col  mt-[5rem] lg:items-start items-center'>
                                    <h3 className='text-white --fontfamily--300 heading-font-400 primary-color--200'>{crewText[index].status}</h3>
                                    <h2 className='text-white --fontfamily--300 heading-font-300'>{crewText[index].name}</h2>
                                    <p className='text-white --fontfamily--200  lg:--paragraph--100 --paragraph--200 primary-color--200 lg:max-w-[444px] max-w-[525px] '>{crewText[index].p}</p>

                                </div>

                                <div className='sm:flex hidden relative lg:pt-[1rem] pt-[2rem] z-[100]'>
                                    <CrewBtn />
                                </div>

                            </div>
                            <div className=' h-[90vh] w-full flex lg:items-end lg:justify-center justify-center '>

                                <img className='w-[400px]  z-[-1] absolute bottom-0' src={crewText[index].img} alt="" />
                            </div>

                        </div>


                    ))}



                </div>
                {/* mobile */}
                <div className={`scrolmain overflow-hidden justify-between h-[100vh] transition-all  sm:hidden flex  relative z-[5]`} style={{ width: `${window.innerWidth * 4}px`, left: `${move}px` }}>
                    {crewText.map((item, index) => (
                        <div key={index} className={` w-[100vw] h-[100vh] flex lg:flex-row justify-between flex-col lg:gap-[5rem] gap-[1rem] items-center  `}>
                            <div className='flex flex-col w-full mt-[10rem]   items-center   text-center  '>
                                <h1 className=' text-white flex w-full pb-[3rem] text-start justify-center lg:pl-0 pl-[2rem] lg:mt-[0]   --fontfamily--100 subheading--400 '><span className='font-bold primary-color--500 mr-[1rem]'>02</span>MEET YOUR CREW</h1>

                                <div className='flex flex-col  lg:items-start items-center'>
                                    <div className=' flex lg:items-end lg:justify-center justify-center '>

                                        <img className='w-[400px] h-[550px] object-cover z-[-1]' src={crewText[index].img} alt="" />
                                    </div>
                                    <div className='sm:hidden py-[2rem] flex lg:pt-[1rem] pt-[2rem] z-[99]'>
                                        <CrewBtn />
                                    </div>

                                    <h3 className=' --fontfamily--300 heading-font-400 primary-color--500'>{crewText[index].status}</h3>
                                    <h2 className='text-white --fontfamily--300 heading-font-400'>{crewText[index].name}</h2>
                                    <p className='text-white --fontfamily--200  lg:--paragraph--100 --paragraph--200 primary-color--200 lg:max-w-[444px] max-w-[525px] '>{crewText[index].p}</p>

                                </div>


                            </div>


                        </div>


                    ))}



                </div>
            </div>
        </Context.Provider>

    )
}


export default Crew
