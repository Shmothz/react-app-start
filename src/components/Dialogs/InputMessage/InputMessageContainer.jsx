import React from 'react'
import InputMessage from './InputMessage'
import {sendMessageActionCreator, upgradeMessageTextActionCreator} from '../../../redux/dialogsReducer'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { dispatch(sendMessageActionCreator()) },
    onMessageChange: (text) => { dispatch(upgradeMessageTextActionCreator(text)) }
    }
}

let InputMessageContainer = connect(mapStateToProps, mapDispatchToProps)(InputMessage)

export default InputMessageContainer