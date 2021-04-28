import React, {FC} from "react"
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile: FC = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile