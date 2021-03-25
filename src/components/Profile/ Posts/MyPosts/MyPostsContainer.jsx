import React from 'react'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addNewPost} from '../../../../redux/profile-reducer';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts)

export default MyPostsContainer