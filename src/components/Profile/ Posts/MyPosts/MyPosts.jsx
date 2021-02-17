import React from "react";
import s from './MyPosts.module.css';
import Comment from './Post/Comment';

const MyPosts = () => {
    return (
        <div className={s.myPostsWrapper}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div className={s.inputWrapper}>
                    <textarea className={s.inputText} rows='4'></textarea>
                </div>
                <div className={s.btnWrapper}>
                    <button className={s.btnAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.comments}>
                <Comment message='Hello world!'/>
                <Comment message='How are you?'/>
                <Comment message='This is first comment!'/>
            </div>
        </div>
    )
}

export default MyPosts;