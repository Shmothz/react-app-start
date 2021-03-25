import React from 'react'
import {Field, reduxForm} from 'redux-form';
import s from './Login.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.loginForm}>
      <div>
        <Field component={'input'} placeholder={'Login'} name={'login'} />
      </div>
      <div>
        <Field component={'input'} placeholder={'Password'} name={'password'} />
      </div>
      <div>
        <Field component={'input'} type={'checkbox'} name={'rememberMe'} />
      </div>
      <div>
        <button> Submit! </button>
      </div>
    </form>
  )
}

const Login = (props) => {
  const onSubmit = (formData) => {}
  return (
    <>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}
const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

export default Login