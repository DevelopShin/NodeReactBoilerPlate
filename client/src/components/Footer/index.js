import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import {
  FooterContainer
  , FooterWrap
  , FooterLinksContainer
  , FooterLinksWrapper
  , FooterLinkItems
  , FooterLinkTitle
  , FooterLink
  , SocialMedia
  , SocialMediaWrap
  , SocialLogo
  , SocialIcons
  , SocialIconLink
  , WebsiteRights
} from './FooterElements'

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle >About us</FooterLinkTitle>

              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>How it works</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>

              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
              <FooterLink to='/'>Terms ofo Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>

              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
              <FooterLink to='/'>Terms ofo Service</FooterLink>
            </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={()=>(window.scrollTo(0,0))}>LOGO</SocialLogo>
            <WebsiteRights>company © {new Date().getFullYear()} All rights reserved.</WebsiteRights>

            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>

              <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>

              <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>

              <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
            </SocialIcons>

          </SocialMediaWrap>
        </SocialMedia>

      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
