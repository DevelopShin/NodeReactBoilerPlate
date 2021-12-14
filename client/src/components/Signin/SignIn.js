import {

  LoginFormWrap
, Icon
, FormContent
, Form
, FormH1
, FormLabel
, FormInput
, FormButton
, Text
, BotWrap
, BotLink
} from './SignElements'
import { Link } from 'react-router-dom'

import React, { useState } from 'react'



function SignIn(props) {


  return (
    <>

        <LoginFormWrap >
          <FormContent className='loginmodal'>
            <FormH1 >Login</FormH1>

            <Form action="#">
              <FormInput type='email' placeholder='Email' required />

              <FormInput type='password' placeholder='Password' required />

              <FormButton type='submit'>Continue</FormButton>

            </Form>

            <BotWrap>
                <Text><BotLink to='/'> Forgot password</BotLink></Text>
                <Text><BotLink to='/'> Sign Up {">>"}</BotLink></Text>
              </BotWrap>
          </FormContent>
        </LoginFormWrap>
      

    </>
  )
}

export default SignIn
