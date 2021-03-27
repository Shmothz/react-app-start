import React from 'react'
import InputMessage from './InputMessage'
import {sendMessageActionCreator} from '../../../redux/dialogs-reducer'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (textNewMessage) => { dispatch(sendMessageActionCreator(textNewMessage)) }
    }
}

let InputMessageContainer = connect(mapStateToProps, mapDispatchToProps)(InputMessage)

export default InputMessageContainer