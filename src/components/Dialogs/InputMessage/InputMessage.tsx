import React from 'react'
import s from './InputMessage.module.css'
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm, SubmitHandler} from 'redux-form';

type FormDataType = {
    textNewMessage: string
}
type CallbackPropsType = {
    sendMessageTC: (textNewMessage: string) => void
}

const InputMessageForm:React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={s.inputWrapper}>
      <Field name={'textNewMessage'} component={'textarea'} className={s.inputText} rows='2'/>
      <button>Send</button>
    </form>
  )
}

const InputMessageReduxForm = reduxForm<FormDataType>({form:'newMessageText'})(InputMessageForm)

const InputMessage:React.FC<CallbackPropsType> = ({sendMessageTC}) => {
  const sendMessage: FormSubmitHandler<FormDataType> = e => sendMessageTC(e.textNewMessage)
  return <InputMessageReduxForm onSubmit={sendMessage} />
}

export default InputMessage