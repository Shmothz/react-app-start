import React from 'react';
import s from './InputMessage.module.css';

const InputMessage = (props) => {

    let newSendMessage = React.createRef();
    let sendMessage = () => {
        let text = newSendMessage.current.value;
        alert('Вы ввели сообщение: ' + text)
    }

    return (
        <div className={s.inputWrapper}>
            <img className={s.addFilesIcon} src="http://cdn.onlinewebfonts.com/svg/img_551060.png" alt="add files"/>
            <textarea className={s.inputText} ref={newSendMessage} rows='2' />
            <img className={s.sendMessageIcon} onClick={sendMessage} src="https://img.pngio.com/arrows-icon-png-95628-free-icons-library-arrow-vector-icon-png-1600_1600.jpg" alt="message"/>
        </div>
    )
}

export default InputMessage;