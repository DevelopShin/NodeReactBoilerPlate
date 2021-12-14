import React, { useState, useEffect } from 'react'
import {
  NavbarContainer,
  NavLogo,
  Wrapper,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
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
              <NavLinks {...props.smoothBox} to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks {...props.smoothBox} to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks {...props.smoothBox} to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks {...props.smoothBox} to='signup'>Sign Up</NavLinks>
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
