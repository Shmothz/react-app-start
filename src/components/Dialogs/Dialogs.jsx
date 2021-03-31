import React from 'react';
import s from './Dialogs.module.css';
import Item from './Item/Item';
import Message from './Message/Message';
import InputMessageContainer from './InputMessage/InputMessageContainer';
import RedirectComponent from '../../hoc/withAuth';

const Dialogs = (props) => {

    let dialog = props.dialogs.map((d) => <Item key={d.id} username={d.username} id={d.id} />)
    let message = props.messages.map((m) => <Message key={m.id} message={m.message} id={m.id} /> )



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
                <InputMessageContainer />
            </div>
        </div>
    )
}

export default RedirectComponent(Dialogs);
