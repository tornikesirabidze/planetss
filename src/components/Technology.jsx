import React, { useState } from 'react'
import { TechnologyText } from '../utils'
import TechBtn from './TechBtn'
import TechTab from './TechTab'
export const Context = React.createContext()

function Technology() {

	const [movetech, setMoveTech] = useState(0)
	const [techActive, setTechActive] = useState(0)



	return (

		<Context.Provider value={[movetech, setMoveTech, techActive, setTechActive]}>


			<div className=' overflow-hidden w-[100vw] tech-bg'>
				<div className={` lg:flex hidden  scrolmain oveflow-hidden relative justify-between  transition-all `} style={{ width: `${window.innerWidth * 3}px`, left: `${movetech}px` }}>
					{TechnologyText.map((item, index) => (
						<div className='flex gap-[13rem]  justify-start'>

							<div className='flex mt-[9rem] ml-[3rem] items-center justify-center gap-[rem]'>
								<div className='mb-[5.5rem] flex flex-col items-center'>
									<h1 className=' mb-[5rem] text-white  --fontfamily--100 subheading--003  '><span className='font-bold primary-color--200 mr-[1rem]'>03</span>SPACE LAUNCH 101</h1>
									<TechBtn />
								</div>
								<div className='flex flex-col items-start'>
									<p className=' subheading--200 primary-color--200 --fontfamily--100'>THE TERMINOLOGY…</p>
									<h3 className="text-white  heading-font-300 --fontfamily--300">{TechnologyText[index].title}</h3>
									<p className=' max-w-[444px] --paragraph--100 primary-color--200 --fontfamily--200  '>{TechnologyText[index].p}</p>
								</div>

							</div>
							<div className=' mt-[10rem] flex justify-end  w-[535px] h-[527px]'>

								<img src={TechnologyText[index].img} />
							</div>
						</div>


					))}
				</div>
				<div className='lg:hidden w-full flex'>
					<TechTab></TechTab>
				</div>

			</div>
		</Context.Provider>
	)

}

export default Technology
