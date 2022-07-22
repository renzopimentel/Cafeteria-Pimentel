import React from 'react'
import BurguerButton from './BurguerButton'
import { 
        Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks,
        NavBtn, 
    } from './NavbarElements'
import CartWidget from './CartWidget'
import LoginWidget from './LoginWidget'
import SearchWidget from './SearchWidget'

const Navbar = ({ click, handleClick }) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Data Café</NavLogo>
                <MobileIcon onClick={handleClick}>
                    <BurguerButton />
                </MobileIcon>
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
                <NavBtn>
                    <CartWidget />
                    <SearchWidget />
                    <LoginWidget />
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar