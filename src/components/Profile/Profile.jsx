import React from "react";
import s from './Profile.module.css';
import MyPosts from './ Posts/MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.hipwallpaper.com/i/8/96/E8NRUD.jpg' alt='fon' />
            </div>
            <div>
                <img className={s.avatar} src='https://i.pinimg.com/originals/7b/1c/f8/7b1cf857ec5861dae7d97541075b436f.jpg' alt='avatar'/>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;