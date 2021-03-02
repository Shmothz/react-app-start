import React from 'react'
import MyPosts from './MyPosts';
import {addPostActionCreator, upgradePostTextActionCreator} from '../../../../redux/profileReducer'

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(upgradePostTextActionCreator(text))
    }

    return (
        <MyPosts addPost={addPost}
                 onPostChange={onPostChange}
        newPostText={state.newPostText}
        posts={state.posts}/>
    )
}

export default MyPostsContainer