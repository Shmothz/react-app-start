import React from 'react';
import s from './Dialogs.module.css';
import Item from './Item/Item';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialog = props.state.dialogs.map(d => <Item username={d.username} id={d.id} />)
    let message = props.state.messages.map(m => <Message message={m.message} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}

export default Dialogs;
