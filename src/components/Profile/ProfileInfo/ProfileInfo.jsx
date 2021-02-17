import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.wallpaperWrapper}>
                <img className={s.wallpaper} src='https://cdn.hipwallpaper.com/i/8/96/E8NRUD.jpg' alt='fon' />
            </div>
            <div className={s.infoWrapper}>
                <img className={s.avatar} src='https://i.pinimg.com/originals/7b/1c/f8/7b1cf857ec5861dae7d97541075b436f.jpg' alt='avatar'/>
                <div className={s.aboutMe}>
                    <span>About me</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;