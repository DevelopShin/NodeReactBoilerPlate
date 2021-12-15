import {
  LoginFormWrap, FormContent, Form, LogoIcon, FormInput,
  FormButton, Text, ColumnBox, BotLink, SocialWrap,
  CloseBtn
} from './SignElements'
import SSocialLogin from './SocialLogin'


import { IoIosClose } from 'react-icons/io' //close icon

import { Link } from 'react-router-dom'
import React, { useState } from 'react'



function SignIn(props) {


  return (
    <>

      <LoginFormWrap >
        <FormContent className='loginmodal'>
          <CloseBtn><IoIosClose onClick={props.closeModal} /></CloseBtn>
          <LogoIcon >Login</LogoIcon> {/*to={'/page2'} onClick={props.closeModal} */}

          <Form action="#">
            <FormInput type='email' placeholder='Email' required />

            <FormInput type='password' placeholder='Password' required />

            <FormButton type='submit'>Continue</FormButton>

          </Form>

          <ColumnBox>
            <Text><BotLink to='/' onClick={props.closeModal}> Forgot Password</BotLink></Text>
            <Text><BotLink to='/register' onClick={props.closeModal} > Sign Up </BotLink></Text>
          </ColumnBox>

          <SSocialLogin />
        </FormContent>
      </LoginFormWrap>


    </>
  )
}

export default SignIn
