import React, {FC} from 'react';
import s from './Comment.module.css';

type PropsType = {
    message: string
    likes: number
}

const Comment: FC<PropsType> = ({message, likes}) => {
    return (
        <div className={s.comment}>
            <img src='http://alldisciples.ru/modules/Gallery/Files/disc2_art/l-8.jpg' alt='avatar'/>
            <p className={s.text}>{message}</p>
            <span className={s.like}>{likes}</span>
        </div>
    )
}

export default Comment