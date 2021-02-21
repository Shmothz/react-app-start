import React from 'react';
import s from './Dialogs.module.css';
import Item from './Item/Item';
import Message from './Message/Message';
import InputMessage from './InputMessage/InputMessage';

const Dialogs = (props) => {

    let dialog = props.state.dialogs.map((d,idx) => <Item key={idx} username={d.username} id={d.id} />)
    let message = props.state.messages.map((m,idx) => <Message key={idx} message={m.message} id={m.id} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
                <InputMessage />
            </div>
        </div>
    )
}

export default Dialogs;
