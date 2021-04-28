import React from 'react'
import InputMessage from './InputMessage'
import {DialogType, MessageType, sendMessageTC} from '../../../redux/dialogs-reducer'
import {connect} from 'react-redux';
import {ActiveStateType} from "../../../redux/redux-store";
import {getDialogs, getMessages} from "../../../helper/selectors";

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type MapDispatchPropsType = {
    sendMessageTC: (newMessageText: string) => void
}
type OwnPropsType = {}

const mapStateToProps = (state: ActiveStateType): MapStatePropsType => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

const InputMessageContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, ActiveStateType>
(mapStateToProps, {sendMessageTC})(InputMessage)

export default InputMessageContainer