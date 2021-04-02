import React from 'react';
import s from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={s.comment}>
            <img src='http://alldisciples.ru/modules/Gallery/Files/disc2_art/l-8.jpg' alt='avatar'/>
            <p className={s.text}>{props.message}</p>
            <span className={s.like}>{props.likes}</span>
        </div>
    )
}

export default Comment;