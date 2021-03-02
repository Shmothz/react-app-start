import React from 'react';
import s from './Dialogs.module.css';
import Item from './Item/Item';
import Message from './Message/Message';
import InputMessageContainer from './InputMessage/InputMessageContainer';

const Dialogs = (props) => {

    let state = props.store.dialogsPage

    let dialog = state.dialogs.map((d,idx) => <Item key={idx} username={d.username} id={d.id} />)
    let message = state.messages.map((m,idx) => <Message key={idx} message={m.message} id={m.id} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
                <InputMessageContainer dispatch={props.dispatch}
                store={props.store}
                />
            </div>
        </div>
    )
}

export default Dialogs;
