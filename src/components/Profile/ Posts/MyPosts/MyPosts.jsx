import React from "react"
import s from './MyPosts.module.css'
import Comment from './Post/Comment'
import {addPostActionCreator, upgradePostTextActionCreator} from '../../../../redux/state'

const MyPosts = (props) => {

    let post = props.posts.map((p,idx) => <Comment key={idx}
                                                   message={p.post}
                                                   likes={p.likesCount}/>)

    let addPostInput = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = addPostInput.current.value
        props.dispatch(upgradePostTextActionCreator(text))
    }

    return (
        <div className={s.myPostsWrapper}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div className={s.inputWrapper}>
                    <textarea onChange={ onPostChange }
                              value={props.newPostText}
                              ref={ addPostInput }
                              className={s.inputText} rows='4' />
                </div>
                <div className={s.btnWrapper}>
                    <button onClick={ addPost }
                            className={s.btnAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.comments}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;