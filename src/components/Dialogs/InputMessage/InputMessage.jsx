import React from 'react';
import s from './InputMessage.module.css';
import {sendMessageActionCreator, upgradeMessageTextActionCreator} from '../../../redux/state'

const InputMessage = (props) => {

    let inputTextMessage = React.createRef()

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = inputTextMessage.current.value
        props.dispatch(upgradeMessageTextActionCreator(text))
    }

    return (
        <div className={s.inputWrapper}>
            <img className={s.addFilesIcon}
                 src="http://cdn.onlinewebfonts.com/svg/img_551060.png"
                 alt="add files"/>
            <textarea onChange={onMessageChange}
                      value={props.newMessageText}
                      className={s.inputText}
                      ref={inputTextMessage}
                      rows='2' />
            <img onClick={sendMessage}
                 className={s.sendMessageIcon}
                 src="https://img.pngio.com/arrows-icon-png-95628-free-icons-library-arrow-vector-icon-png-1600_1600.jpg"
                 alt="message"/>
        </div>
    )
}

export default InputMessage;