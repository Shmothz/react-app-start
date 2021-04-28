import React, {FC} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileHelpers/ProfileStatus";
import ProfileAvatar from "./ProfileHelpers/ProfileAvatar";
import ProfileAboutMe from "./ProfileHelpers/ProfileAboutMe";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
    status: string
    pushProfileStatus: () => void
    pushNewAvatarTC: () => void
}

const ProfileInfo: FC<PropsType> = ({profile, pushNewAvatarTC, status, pushProfileStatus}) => {
    if (!profile) {
        return <Preloader/>;
    }

    return (
        <div>
            <div className={s.wallpaperWrapper}>
                <img
                    className={s.wallpaper}
                    src="https://sun9-22.userapi.com/impg/vWCzJc4xHJ4pIR9jnEmu_jy2iGOQJBzdEZMg7g/lvYuydM9ZKU.jpg?size=845x280&quality=96&proxy=1&sign=23eda5f03474d4b130759a0f4629883e&type=album"
                    alt="fon"
                />
            </div>
            <div className={s.infoWrapper}>
                <ProfileAvatar
                    large={profile.photos.large}
                    pushNewAvatarTC={pushNewAvatarTC}
                />
                <span className={s.fullName}>{profile.fullName}</span>
                <ProfileStatus
                    status={status}
                    pushProfileStatus={pushProfileStatus}
                />
                <span className={s.aboutMeText}>About me:</span>
                <ProfileAboutMe profile={profile}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
