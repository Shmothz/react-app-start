import React from 'react'
import MyPosts from './MyPosts';
import {addPostActionCreator, upgradePostTextActionCreator} from '../../../../redux/profileReducer'

const MyPostsContainer = (props) => {
    // let state = props.store.getState().profilePage

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.dispatch(upgradePostTextActionCreator(text))
    }

    return (
        <MyPosts addPost={addPost}
                 onPostChange={onPostChange}
        newPostText={props.store.profilePage.newPostText}
        posts={props.store.profilePage.posts}/>
    )
}

export default MyPostsContainer