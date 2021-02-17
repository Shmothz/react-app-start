import React from 'react';
import s from './Dialogs.module.css';
import Item from './Item/Item';
import Message from './Message/Message';
import {NavLink} from 'react-router-dom';



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Item username='Михаил Петрович' id='1' />
                <Item username='Юлия Наговицина' id='2' />
                <Item username='Виктория Мудаш' id='3' />
            </div>
            <div className={s.messages}>
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
    )
}

export default Dialogs;
