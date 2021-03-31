import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../helper/validations';
import {Input} from '../common/InputForms/InputForms';
import {loginTC, logoutTC} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import s from './Login.module.css'

let maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={s.loginForm} >
      <div>
        <Field component={Input} placeholder={'Login'} name={'login'} validate={[ required, maxLength30 ]} />
      </div>
      <div>
        <Field component={Input} placeholder={'Password'} name={'password'} validate={[ required, maxLength30 ]} type={'password'} />
      </div>
      <div>
        <Field component={'input'} type={'checkbox'} name={'rememberMe'} />
      </div>
      <div>
        <button> Submit! </button>
      </div>
      {  props.error && <span className={s.summaryError}>{props.error}</span> }
    </form>
  )
}

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginTC(formData.login, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {return <Redirect to={'/profile/15727'} />}
  return (
    <>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {isAuth: state.auth.isAuth}
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const LoginContainer = connect(mapStateToProps, {loginTC, logoutTC})(Login)

export default LoginContainer