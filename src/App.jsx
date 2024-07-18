import React, { useState } from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Destination from './components/Destination'

import Technology from './components/Technology'
import Desitnationpg from './components/Desitnationpg'
import Crew from './components/Crew'
import { useEffect } from 'react'

export const IdIndex = React.createContext()


function App() {
   const navigation=useNavigate()
   useEffect(() => {
     
    navigation("/planetss/")
   }, [])
   


    const handleIdIndex=()=>{
        let paThname=window.location.pathname
        console.log(paThname.length)
        if(paThname=="/planetss/"){
            return 0
        }
        if(paThname==`/planetss/destination/${paThname[paThname.length-1]}`){
            return 1
        }

        if(paThname=="/planetss/crew"){
            return 2
        }
        if(paThname=="/planetss/technology"){
            return 3
        }
        console.log(paThname)
    }

    const [indexer, setindexer]=useState(handleIdIndex)

    console.log(window.location.pathname)

    return (
        <div>
            <IdIndex.Provider value={[indexer,setindexer]}>
                <Navbar />
                <Routes>
                
                    <Route path='/planetss' element={<Home />} />
                    <Route path='/planetss/destination' element={<Destination />}>
                        <Route path=":id" element={<Desitnationpg />} />
                    </Route>
                    <Route path='/planetss/crew' element={<Crew />} />

                    <Route path='/planetss/technology' element={<Technology />} />
                </Routes>
            </IdIndex.Provider>
        </div>
    )
}

export default App
