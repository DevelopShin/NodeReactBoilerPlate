import 
{
  Container
  ,FormWrap
  ,Icon
  ,FormContent
  ,Form
  ,FormH1
  ,FormInput
  ,FormButton
  ,Text

} from './RegisterElements'
import { Link } from 'react-router-dom'


import React from 'react'

function Register() {
  return (
    <>
     <Container>
        <FormWrap>

          <FormContent className='FormContent'>
            <Form action="#">
              <FormH1>회원가입</FormH1>
              <FormInput type='text' placeholder='Name' required />
              <FormInput type='email' placeholder='Email' required />
              <br/>

              <FormInput type='password' placeholder='Password' required />

              <FormInput type='password' placeholder='Confirm Password' required />

              <FormButton type='submit'>Continue</FormButton>

            </Form>
          </FormContent>
        </FormWrap>

     </Container>

    </>
  )
}

export default Register
