import React from 'react'
import InputMessage from './InputMessage'
import {sendMessageActionCreator, upgradeMessageTextActionCreator} from '../../../redux/dialogsReducer'

const InputMessageContainer = (props) => {

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = (text) => {
        props.dispatch(upgradeMessageTextActionCreator(text))
    }

    return (
        <InputMessage
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
            newMessageText={props.store.dialogsPage.newMessageText}/>
    )
}

export default InputMessageContainer;