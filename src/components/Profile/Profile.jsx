import React from "react"
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './ Posts/MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}
                     dispatch={props.dispatch} />
        </div>
    )
}

export default Profile