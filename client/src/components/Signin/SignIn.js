import {
  LoginFormWrap, FormContent, Form, LogoIcon, FormInput,
  FormButton, Text, ColumnBox, BotLink,
  CloseBtn, ErrLabel
} from './SignElements'
import SSocialLogin from './SocialLogin'
import { IoIosClose } from 'react-icons/io' //close icon
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Formik } from "formik";
import * as Yup from 'yup';
import Simplert from 'react-simplert'
import swal from 'sweetalert'  //https://sweetalert.js.org/guides/

function SignIn(props) {
  const [formErrorMessage, setFormErrorMessage] = useState('')
  const alert =()=>{
    swal({
      text:'성공',
      button: "확인",
    });
  }
  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      let dataToSubmit = {
        email: values.email,
        password: values.password
      };
      console.log(dataToSubmit.email)

      
      // dispatch(loginUser(dataToSubmit))
      //   .then(response => {
      //     if (response.payload.loginSuccess) {
      //       window.localStorage.setItem('userId', response.payload.userId);
      //       if (rememberMe === true) {
      //         window.localStorage.setItem('rememberMe', values.id);
      //       } else {
      //         localStorage.removeItem('rememberMe');
      //       }
      //       props.history.push("/");
      //     } else {
      //       setFormErrorMessage('Check out your Account or Password again')
      //     }
      //   })
      //   .catch(err => {
      //     setFormErrorMessage('Check out your Account or Password again')
      //     setTimeout(() => {
      //       setFormErrorMessage("")
      //     }, 3000);
      //   });
    }, 500);
  }

  return (

    <LoginFormWrap >
      
      <FormContent className='loginmodal'>
        <CloseBtn><IoIosClose onClick={props.closeModal} /></CloseBtn>
        <LogoIcon >Login</LogoIcon> {/*to={'/page2'} onClick={props.closeModal} */}
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <Form onSubmit={handleSubmit}>
                <FormInput type='email' placeholder='Email' required
                  id='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                />
                <ErrLabel className='input-feedback'>{errors.email} </ErrLabel>

                <FormInput type='password' placeholder='Password' required
                  id='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                <ErrLabel className='input-feedback'>{errors.password} </ErrLabel>


                <FormButton
                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                    disabled={!(dirty && isValid)}
                >
                  Continue
                </FormButton>

              </Form>
            )
          }}
        </Formik>
        <ColumnBox>
          <Text><BotLink to='/' onClick={props.closeModal}> Forgot Password</BotLink></Text>
          <Text><BotLink to='/register' onClick={props.closeModal} > Sign Up </BotLink></Text>
        </ColumnBox>

        <SSocialLogin />
      </FormContent>
    </LoginFormWrap>


  );
};

export default SignIn

