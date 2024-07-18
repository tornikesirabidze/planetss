import React, { act, useContext, useState } from 'react'
import { Logo } from '../assets'
import { navbar } from '../utils'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IdIndex } from '../App';


function Navbar() {
    const [indexer, setindexer]=useContext(IdIndex)
    const movePage=()=>{
        
        if(window.location.pathname=="/"){
            return(
                0
            )
        }
        else if(window.location.pathname=="/destination"){
            console.log("des")
            return(
                1
            )
        }
        else if(window.location.pathname=="/crew"){
            
            console.log("Crew")
            return(
                2
            )
            
        } 
        else if(window.location.pathname=="/technology"){
            return(
                3
            )
        }
    }
    const [active, setactive] = useState(movePage());
    const [Click, SetCklick] = useState(true);
    const [Width, SetWidth]=useState("flex")

    

    const HendleaCtive = (index, Click) => {
        setactive(index)
        SetCklick(!Click)
        
    }
    if(!Click){
        setTimeout(()=>{
            SetWidth("w-0")
            
        },1000)
    }

    return (
        <div className='flex p-[2rem] items-center z-[6] justify-between lg:pl-[3.2rem] lg:pr-0 pr-[0] lg:pt-[2.5rem] pt-[0] fixed w-full'>
            <img src={Logo} alt="Website Logo" className='h-[3rem] w-[3rem]' />
            <div onClick={()=>SetCklick(!Click)} className='fixed sm:hidden flex right-6  z-[4] text-[2rem]'>
                {Click?<FaBars className='text-white ' />:<FaX className='text-white' />}
            </div>
            <div className='h-[.1rem] w-full lg:bg-white bg-transparent relative bg-[#979797] opacity-[0.6] left-[4rem] rounded-md z-[5]' />
            <div className='sm:flex hidden gap-[4rem]'>
                <ul className='flex gap-[3.12rem] ml-[2rem] p-[3rem] pb-0 bg--color lg:pr-[10rem]  lg:pl-[12rem]  backdrop-blur-md  z-[3] relative border-white border-opacity-[0.01] items-center justify-end'>
                    {navbar.map((item, index) => (
                        <Link to={index==1 ? "/destination/0":item.link}>
                            <div key={index} onClick={() => setindexer(index)} className='mainnav sm:flex hidden flex-col justify-between items-end gap-[0.68rem] h-[4rem] subheading--300 cursor-pointer z-[3] text-white'>
                                <div className='flex gap-[0.68rem]'>
                                    <span className='font-bold lg:flex hidden'>{item.num}</span>
                                    <li>{item.li}</li>
                                </div>
                                {indexer == index && <div className='bg-white w-full h-[.2rem] rounded-t-md ' />}
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
            {/* mobile version */}
            <div className="sm:hidden flex fixed right-0 top-0 ">
                <ul className={`${Click ? `translate-x-[500px] hidden ${SetWidth}` :"translate-x-0 "} flex gap-[2rem] flex-col pb-[7rem] transition-all bg--color pl-[3rem] relative lg:pl-[12rem]  backdrop-blur-md  w-[15rem] h-[100vh] z-[999] border-white border-opacity-[0.01] items-start justify-center `}>
                    {navbar.map((item, index) => (
                        <Link key={index} to={item.link}>
                            <div onClick={() => HendleaCtive(inHendleaCtivedex)} className='flex flex-row w-[12rem] justify-between gap-[0.68rem] subheading--300 cursor-pointer z-[3] text-white'>
                                <div className='gap-[0.68rem] flex'>
                                    <span className='font-bold '>{item.num}</span>
                                    <li>{item.li}</li>
                                </div>
                                {active == index && <div className='bg-white w-[0.2rem] h-[full] rounded-t-md ' />}
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>


        </div >
    )
}

export default Navbar
