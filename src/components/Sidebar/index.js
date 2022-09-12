import React from 'react'
import BurguerButton from '../Navbar/BurguerButton'
import { SidebarContainer, Icon } from './SidebarElements'

const Sidebar = ({ click, handleClick }) => {
  return (
    <SidebarContainer click={click} onClick={handleClick}>
        <Icon onClick={handleClick}>
            <BurguerButton />
        </Icon> 
    </SidebarContainer>
  )
}

export default Sidebar