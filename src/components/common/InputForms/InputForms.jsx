import React from 'react'
import s from './InputForms.module.css'

export const Textarea = ({input, meta, ...props}) => {
  return <div>
    <textarea {...props} {...input}/>
  </div>
}
export const Input = ({input, meta, ...props}) => {
  return (
    <>
      <div className={s.formWrapper + '' + s.error}>
        <input {...props} {...input}/>
      </div>
      { meta.touched && meta.error && <span>{meta.error}</span> }
    </>
  )
}
