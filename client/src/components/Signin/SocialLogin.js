import React from 'react'
import {
ColumnBox, BotLink, SocialWrap,
  SocialIcon, Hr, SocialText
} from './SocialLoginElements'

import { RiKakaoTalkFill, RiFacebookLine, RiGoogleFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'



function SSocialLogin() {
  return (
    <SocialWrap>
      <Hr />
      <SocialText>Social Login</SocialText>
      <ColumnBox>
        <SocialIcon IcBgColor={'#fae500'} > {/*kakao*/}
          <RiKakaoTalkFill />
        </SocialIcon>
        <SocialIcon IcBgColor={'#325ca6'} IcColor={'#fff'}> {/*facebook*/}
          <RiFacebookLine />
        </SocialIcon>

        <SocialIcon IcBgColor={'#f8f8f8'}> {/*google*/}
          <FcGoogle/>
        </SocialIcon>

        <SocialIcon IcBgColor={'#19ce60'} IcColor={'#fff'}>
          N
        </SocialIcon>
      </ColumnBox>

    </SocialWrap>
  )
}

export default SSocialLogin
