import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Inicio = () => {
    const [click, setClick] = useState(false)

    const handleClick = () =>{
        // cuando esta en true lo pasa a false y visceversa
        setClick(!click);
    }

    return (
        <>
            <Sidebar click={click} handleClick={handleClick}/>
            <Navbar handleClick={handleClick}/>
        </>
    )
}

export default Inicio