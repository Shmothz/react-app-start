import React from "react";
import s from './MyPosts.module.css';
import Comment from './Post/Comment';

const MyPosts = (props) => {

    let post = props.posts.map(p => <Comment message={p.post} likes={p.likesCount}/>)

    let addPostButton = React.createRef();

    let addPost = () => {
        let text = addPostButton.current.value
        props.addPost(text)
        addPostButton.current.value = ''
    }

    return (
        <div className={s.myPostsWrapper}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div className={s.inputWrapper}>
                    <textarea ref={ addPostButton } className={s.inputText} rows='4' />
                </div>
                <div className={s.btnWrapper}>
                    <button onClick={ addPost } className={s.btnAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.comments}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;