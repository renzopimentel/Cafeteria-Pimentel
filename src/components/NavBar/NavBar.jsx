import React, {useState} from "react"
import styled from "styled-components"
import BurguerButton from "./BurguerButton";

function NavBar() {
    const [click, setClick] = useState(false)

    const handleClick = () =>{
        // cuando esta en true lo pasa a false y visceversa
        setClick(!click);
    }
    return (
        <NavContainer>
            <h2>Data Café</h2>
            <div className={`links ${click ? 'active' : ''}`}>
                <a href="/"> Inicio</a>
                <a href="/"> Cursos</a>
                <a href="/"> Equipamiento</a>
                <a href="/"> Kiosco</a>
                <a href="/"> Cafetería</a>
            </div>
            <div className="burguer">
                <BurguerButton click={click} handleClick={handleClick}/>
            </div>
            
        </NavContainer>
    )
}

export default NavBar;

const NavContainer = styled.nav`
    h2{
        font-weight:400;
        color: white;
    }
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }

    .links{
       position: absolute;
       top: -700px;
       left: -2000px;
       margin-left: auto;
       margin-right: auto;
       text-align: center;
       a{
        color: black;
        font-size: 2rem;
        display: block;
       }
       @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
       } 
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            color: #333;
        }
    }
`
