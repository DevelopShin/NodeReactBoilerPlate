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
  NavBtnModal,
  NavBtnLinkR

} from './NavbarElements'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'
import { logout } from '../../redux/_actions/user_actions'
import { useDispatch } from "react-redux";
import swal from 'sweetalert'

const Nav = (props) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    console.log(user.userInfo.token)

    dispatch(logout())
      .then(response => {
        if (response.payload.userInfo)
          swal({
            icon: response.payload.success ? "success" : "warning",
            text: response.payload.msg && response.payload.msg
          })
      })
  }






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
              <NavLinkR {...props.smoothBox} to='/register'>Sign Up</NavLinkR>
            </NavItem>
          </NavMenu>
          <NavBtn>
            { user.userInfo && user.userInfo.success ? <NavBtnModal onClick={logoutHandler}>Logout</NavBtnModal> 
            : <NavBtnModal onClick={() => props.setloginModal(true)}>로그인</NavBtnModal>}
          </NavBtn>

        </NavbarContainer>
      </Wrapper>
    </>
  )
}
export default Nav
