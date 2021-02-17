import React from 'react';
import s from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={s.comment}>
            <img src='https://media.hearthpwn.com/avatars/304/471/636109493175114438.jpeg' alt='avatar'/>
            <p className={s.text}>{props.message}</p>
            <span className={s.like}>Like</span>
        </div>
    )
}

export default Comment;