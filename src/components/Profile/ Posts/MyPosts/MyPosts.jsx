import React from "react";
import s from './MyPosts.module.css';
import Comment from './Post/Comment';

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
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