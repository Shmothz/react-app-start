import React from 'react'
import {RedirectDialog} from './Dialogs';
import {connect} from 'react-redux';
import {ActiveStateType} from "../../redux/redux-store";
import {getDialogs, getMessages} from "../../helper/selectors";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";

type PropsType = MapStatePropsType & MapDispatchPropsTypes & OwnPropsTypes
type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type MapDispatchPropsTypes = {}
type OwnPropsTypes = {}

const mapStateToProps = (state:ActiveStateType):MapStatePropsType => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

const DialogsContainer = connect<MapStatePropsType,MapDispatchPropsTypes,OwnPropsTypes, ActiveStateType>
(mapStateToProps, {})(RedirectDialog)

export default DialogsContainer