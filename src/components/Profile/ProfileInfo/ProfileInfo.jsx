import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfielStatus/ProfileStatus';

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={s.wallpaperWrapper}>
        <img className={s.wallpaper}
             src='https://sun9-22.userapi.com/impg/vWCzJc4xHJ4pIR9jnEmu_jy2iGOQJBzdEZMg7g/lvYuydM9ZKU.jpg?size=845x280&quality=96&proxy=1&sign=23eda5f03474d4b130759a0f4629883e&type=album'
             alt='fon'/>
      </div>
      <div className={s.infoWrapper}>
        <img className={s.avatar} src={props.profile.photos.large} alt='avatar'/>
        <div className={s.fullName}>
          <span>My name is {props.profile.fullName}</span>
        </div>
        <ProfileStatus status={props.status} pushProfileStatus={props.pushProfileStatus}/>
        <div className={s.aboutMe}>
          <span>About me : {props.profile.aboutMe}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;