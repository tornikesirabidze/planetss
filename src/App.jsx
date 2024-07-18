import React, { useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Destination from './components/Destination'

import Technology from './components/Technology'
import Desitnationpg from './components/Desitnationpg'
import Crew from './components/Crew'
export const IdIndex = React.createContext()


function App() {
   


    const handleIdIndex=()=>{
        let paThname=window.location.pathname
        console.log(paThname.length)
        if(paThname=="/"){
            return 0
        }
        if(paThname==`/destination/${paThname[paThname.length-1]}`){
            return 1
        }

        if(paThname=="/crew"){
            return 2
        }
        if(paThname=="/technology"){
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
                    <Route path='/' element={<Home />} />
                    <Route path='destination' element={<Destination />}>
                        <Route path=":id" element={<Desitnationpg />} />
                    </Route>
                    <Route path='/crew' element={<Crew />} />

                    <Route path='/technology' element={<Technology />} />
                </Routes>
            </IdIndex.Provider>
        </div>
    )
}

export default App
