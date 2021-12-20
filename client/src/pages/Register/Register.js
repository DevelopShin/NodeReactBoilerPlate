import {
  Container, FormWrap, FormContent, Form,
  FormH1, FormInput, FormButton, ErrLabel, Icon
} from './RegisterElements'
import React from 'react'
import { initialValues, validationSchema} from './CheckForm'
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from '../../reduxStore/_actions/user_actions';   
import swal from 'sweetalert'
function Register(props) {
  const dispatch = useDispatch()

  const onSubmit=(values, { setSubmitting }) => {

    setTimeout(() => {

      let dataToSubmit = {
        email: values.email,
        password: values.password,
        name: values.name,
      };

      dispatch(registerUser(dataToSubmit)).then(response => {
        if (response.payload.success) {
          swal({icon:'success', text:'success:true'})
        } else {
          swal({icon:'warning',
            text: response.payload.msg ? response.payload.msg : response.payload.err.errmsg})
        }
      })

      setSubmitting(false);
    }, 500);
  }

  return (
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
          isValid,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <Container>

            <FormWrap>

              <FormContent className='FormContent'>
                <Form action="#">
                  <FormH1>회원가입</FormH1>

                  <FormInput placeholder='Name' required
                    id="name"
                    type="name"
                    name = "name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.name && touched.name && (
                    <ErrLabel className="input-feedback">{errors.name}</ErrLabel>
                  )}


                  <FormInput placeholder='Email' required
                    id="email"
                    type="email"
                    name = "email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.email && touched.email && (
                    <ErrLabel className="input-feedback">{errors.email}</ErrLabel>
                  )}

                  <br />

                  <FormInput placeholder='Password' required
                    id="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.password && touched.password && (
                    <ErrLabel className="input-feedback">{errors.password}</ErrLabel>
                  )}

                  <FormInput type='password' placeholder='Confirm Password' required 
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <ErrLabel className="input-feedback">{errors.confirmPassword}</ErrLabel>
                )}
            

                  <FormButton type='submit'
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  >Continue</FormButton>

                </Form>
              </FormContent>
            </FormWrap>

          </Container>
        )
      }}
    </Formik>
  )
}

export default Register
