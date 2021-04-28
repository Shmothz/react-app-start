import React, {FC} from 'react'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addNewPost} from '../../../redux/profile-reducer';
import {ActiveStateType} from "../../../redux/redux-store";
import {PostType} from "../../../types/types";

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
type MapStatePropsType = {
    newPostText: string
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addNewPost: (newPostText: string) => void
}
type OwnPropsType = {}

const mapStateToProps = (state: ActiveStateType):MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const MyPostsContainer:FC<PropsType> = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, ActiveStateType>
(mapStateToProps, {addNewPost})(MyPosts)

export default MyPostsContainer