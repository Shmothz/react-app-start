import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.tab}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <span className={s.name}>{props.name}</span>
        </div>
    )
}

export default Friend;