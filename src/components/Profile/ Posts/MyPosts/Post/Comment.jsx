import React from 'react';
import s from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={s.comment}>
            <img src='https://media.hearthpwn.com/avatars/304/471/636109493175114438.jpeg' alt='avatar'/>
            <p className={s.text}>{props.message}</p>
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Comment;