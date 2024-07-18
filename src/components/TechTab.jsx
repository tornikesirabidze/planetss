import React, { useContext } from 'react'
import { TechnologyText } from '../utils'
import TechBtn from './TechBtn'
import { Context } from './Technology'

function TechTab() {
    const [movetech, setMoveTech, techActive, setTechActive] = useContext(Context)
    return (





        <div className=' overflow-hidden w-full h-[100vh]'>
            <div className={` flex  scrolmain oveflow-hidden relative justify-between  transition-all `} style={{ width: `${window.innerWidth * 3}px`, left: `${movetech}px` }}>
                {TechnologyText.map((item, index) => (
                    <div className='flex flex-col gap-[2rem]  justify-start'>

                        <div className='   flex flex-col gap-20 mt-[10rem] '>
                            <h1 className=' ml-[3rem] text-white  --fontfamily--100 subheading--003  '><span className='font-bold primary-color--200 mr-[1rem]'>03</span>SPACE LAUNCH 101</h1>

                            <img className="techimg " src={TechnologyText[index].img} />
                        </div>
                        <div className='flex  items-center justify-center flex-col '>
                            <div className='mb-[2rem] flex items-center'>
                                <TechBtn />
                            </div>
                            <div className='flex flex-col text-center'>
                                <p className=' subheading--200 primary-color--200 --fontfamily--100'>THE TERMINOLOGY…</p>
                                <h3 className="text-white sm: heading-font-900  sm:heading-font-500 --fontfamily--300">{TechnologyText[index].title}</h3>
                                <p className='  max-w-[444px] --paragraph--100 primary-color--200 --fontfamily--200  '>{TechnologyText[index].p}</p>
                            </div>

                        </div>
                    </div>


                ))}

            </div>
        </div>


    )
}

export default TechTab
