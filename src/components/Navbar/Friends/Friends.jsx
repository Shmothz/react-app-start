import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let state = props.store.getState().navPage

    let friend = state.friends.map((f,idx) => <Friend key={idx} avatar={f.avatar} name={f.name} />)

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Friends <span className={s.online}>online</span></h2>
            <div className={s.friends}>
                {friend}
            </div>
        </div>
    )
}

export default Friends