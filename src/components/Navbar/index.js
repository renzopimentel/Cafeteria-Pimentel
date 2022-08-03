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
        LinkIcons 
    } from './NavbarElements'
import CartWidget from './CartWidget'
import LoginWidget from './LoginWidget'
import SearchWidget from './SearchWidget'

const Navbar = ({ click, handleClick }) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>DATA.</NavLogo>
                <MobileIcon onClick={handleClick}>
                    <BurguerButton />
                </MobileIcon>
                <NavMenu className={`links ${click ? 'active' : ''}`}>
                    <NavItem>
                        <NavLinks to='/'><span>Inicio</span></NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/cursos'><span>Cursos</span></NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/equipamientos'><span>Equipamientos</span></NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/kiosco'><span>Kiosco</span></NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <SearchWidget /> 
                    <LinkIcons to='/login' className='login-widget'>
                        <LoginWidget />
                    </LinkIcons>
                    <LinkIcons to='/carrito' className='cart-widget'>
                        <CartWidget />
                    </LinkIcons>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
