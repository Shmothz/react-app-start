import React from 'react';
import s from './Dialogs.module.css';
import Item from './Item/Item';
import Message from './Message/Message';
import InputMessageContainer from './InputMessage/InputMessageContainer';
import RedirectComponent from '../../hoc/withAuth';
import {DialogType, MessageType} from '../../redux/dialogs-reducer';
import {FC} from 'react';

type PropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

const Dialogs: FC<PropsType> = ({dialogs, messages}) => {
    const newDialogs = dialogs.map(d => <Item key={d.id} username={d.username} id={d.id} />)
    const newMessages = messages.map(m => <Message key={m.id} message={m.message} id={m.id} /> )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {newDialogs}
            </div>
            <div className={s.messages}>
                {newMessages}
                <InputMessageContainer />
            </div>
        </div>
    )
}

export const RedirectDialog = RedirectComponent(Dialogs)
