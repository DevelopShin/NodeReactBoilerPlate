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
import { logout } from '../../reduxStore/_actions/user_actions'
import { useDispatch } from "react-redux";
import swal from 'sweetalert'

const Nav = (props) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  // console.log("내브쪽 ",user.userInfo.success)
  const logoutHandler = () => {
    dispatch(logout())
      .then(response => {

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
            {user.userData && !user.userData.isAuth ? <NavBtnModal onClick={() => props.setloginModal(true)}>로그인</NavBtnModal>:<NavBtnModal onClick={logoutHandler}>Logout</NavBtnModal>
              }
          </NavBtn>

        </NavbarContainer>
      </Wrapper>
    </>
  )
}
export default Nav
