import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.wallpaperWrapper}>
                <img className={s.wallpaper} src='https://sun9-22.userapi.com/impg/vWCzJc4xHJ4pIR9jnEmu_jy2iGOQJBzdEZMg7g/lvYuydM9ZKU.jpg?size=845x280&quality=96&proxy=1&sign=23eda5f03474d4b130759a0f4629883e&type=album' alt='fon' />
            </div>
            <div className={s.infoWrapper}>
                <img className={s.avatar} src='https://i.pinimg.com/originals/29/6c/b9/296cb9d2a07a763c3b5b472493e50fb4.jpg' alt='avatar'/>
                <div className={s.aboutMe}>
                    <span>About me</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;