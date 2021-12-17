import React, { useState, useEffect } from 'react'
import {
  NavbarContainer,
  NavLogo,
  Wrapper,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinkR,
  NavBtn,
  NavBtnLink,

} from './NavbarElements'
import { FaBars, FaTimes } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Nav = (props) => {

  const closeSide = () => {
    props.setisOpen(false)
    scroll.scrollToTop()
  }
  return (
    <>
      <Wrapper>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeSide}>LOGO</NavLogo>
          <MobileIcon >
            {props.isOpen ? <FaTimes onClick={props.togle} /> : <FaBars onClick={props.togle} />}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinkR {...props.smoothBox} to='/page2'>About</NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR {...props.smoothBox} to='/iscover'>Discover</NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR {...props.smoothBox} to='services'>Services</NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR {...props.smoothBox} to='signup'>Sign Up</NavLinkR>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={()=>props.setloginModal(true)}>Sign In</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Wrapper>
    </>
  )
}
export default Nav
