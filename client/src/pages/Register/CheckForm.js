import * as Yup from 'yup';


export  const initialValues = {
    name:"",
    email: "",
    password: "",
    confirmPassword: '',
    image:""
  }; 
  const passRule = /^[A-Za-z0-9]{6,}$/; //비밀번호 정규표현식


export  const validationSchema=Yup.object().shape({
    name: Yup.string()
      .min(2,' must be at least 2 charcters')
      .required('Name is required'),

    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
      .matches(
        passRule,
        "영문+숫자+특수문자 8자 이상, "
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'not match password')
      .required('Confirm Password is required')
  });

export  const onSubmit=(values, { setSubmitting }) => {
    setTimeout(() => {

      let dataToSubmit = {
        email: values.email,
        password: values.password,
        name: values.name,
        lastname: values.lastname,
        // image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
      };
      console.log(dataToSubmit)

      // dispatch(registerUser(dataToSubmit)).then(response => {
      //   if (response.payload.success) {
      //     props.history.push("/login");
      //   } else {
      //     alert(response.payload.err.errmsg)
      //   }
      // })

      setSubmitting(false);
    }, 500);
  }


