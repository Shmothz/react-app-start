import React from 'react'
import s from './InputMessage.module.css'
import {Field, reduxForm} from 'redux-form';

const InputMessageForm = (props) => {


  return (
    <form onSubmit={props.handleSubmit} className={s.inputWrapper}>
      <Field name={'textNewMessage'} component={'textarea'} className={s.inputText} rows='2'/>
      <button>Send</button>
    </form>
  )
}

const InputMessageReduxForm = reduxForm({form:'newMessageText'})(InputMessageForm)

const InputMessage = (props) => {
  let sendMessage = (values) => {
    console.log(values)
    props.sendMessage(values.textNewMessage)
  }
  return <InputMessageReduxForm onSubmit={sendMessage} />
}

export default InputMessage