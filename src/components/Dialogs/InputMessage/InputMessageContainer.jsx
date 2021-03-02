import React from 'react'
import InputMessage from './InputMessage'
import {sendMessageActionCreator, upgradeMessageTextActionCreator} from '../../../redux/dialogsReducer'
import {connect} from 'react-redux';

// const InputMessageContainer = (props) => {
//
//     let state = props.store.getState().dialogsPage
//
//     let sendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator())
//     }
//     let onMessageChange = (text) => {
//         props.store.dispatch(upgradeMessageTextActionCreator(text))
//     }
//
//     return (
//         <InputMessage
//             sendMessage={sendMessage}
//             onMessageChange={onMessageChange}
//             newMessageText={state.newMessageText}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        newMessageText: state.newMessageText
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