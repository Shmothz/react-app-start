import React from 'react';
import s from './Dialogs.module.css';
import Item from './Item/Item';
import Message from './Message/Message';
import {NavLink} from 'react-router-dom';



const Dialogs = (props) => {

    let dialogs = [
        {id:1,username:'Mikhail'},
        {id:2,username:'Viktoria'},
        {id:3,username:'Natasha'}
        ]

    let messages = [
        {id:1,message:'Hello , how are you?'},
        {id:2,message:'Im fine and you?'},
        {id:3,message:'Me too'}
    ]

    let dialog = dialogs.map(d => <Item username={d.username} id={d.id} />)
    let message = messages.map(m => <Message message={m.message} /> )

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
