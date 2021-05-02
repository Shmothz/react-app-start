import React, {FC} from "react"
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    pushProfileStatus: (newStatusText: string) => void
    pushNewAvatarTC: (newAvatar: any) => void
}

const Profile: FC<PropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile