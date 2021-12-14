import React from 'react'
import {
    SidebarContainer,
    // Icon,
    // CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRoute,
    SidebarLink,
    SidebarMenu
}
from './MobileBarElements'

function MobileBar(props) {
    
    return (
        <>
            {/* sideBar */}
            <SidebarContainer  isOpen={props.isOpen}>
                {/* <Icon >
                    <CloseIcon onClick={props.togle}/>
                </Icon> */}
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink onClick={props.togle} to='about'>About</SidebarLink>
                        <SidebarLink onClick={props.togle} to='discover'>Discover</SidebarLink>
                        <SidebarLink onClick={props.togle} to='services'>Services</SidebarLink>
                        <SidebarLink onClick={props.togle} to='signup'>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap onClick={props.togle}>
                        <SidebarRoute onClick={()=>props.setloginModal(true)} >sign In</SidebarRoute>
                    </SideBtnWrap>

                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default MobileBar
