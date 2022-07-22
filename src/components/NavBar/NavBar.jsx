import React, {useState} from "react"
import styled from "styled-components"
import BurguerButton from "./BurguerButton";
import CartWidget from "./CartWidget";
import { Link as LinkS } from 'react-scroll'

function NavBar() {
    const [click, setClick] = useState(false)

    const handleClick = () =>{
        // cuando esta en true lo pasa a false y visceversa
        setClick(!click);
    }
    return (
        <NavContainer>
            <h2>Data Café</h2>
            <NavMenu className={`links ${click ? 'active' : ''}`}>
                <NavItem>
                    <NavLinks to='inicio'>Inicio</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='cursos'>Cursos</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='equip'>Equipamientos</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='kiosco'>Kiosco</NavLinks>
                </NavItem>
            </NavMenu>
            <div className="cart">
                    <CartWidget />
            </div>
            <div className="burguer">
                <BurguerButton click={click} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${click ? 'active' : ''}`}></BgDiv>
            
        </NavContainer>
    )
}

export default NavBar;

const NavContainer = styled.nav`
    h2{
        font-weight:400;
        color: white;
    }
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-sizing: border-box;
    background-color: #333;
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

    .cart{
        margin-left: auto;
        display: inline-block;
        color: white;
    }
`
const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;
    
const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
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
            font-size: 2rem;
            margin-top: 1rem;
            color: #ffffff;
        }
    }
`
const NavItem = styled.li`
    height: 80px;
`;

const BgDiv = styled.div`
    position: absolute;
    background-color : #222;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
`