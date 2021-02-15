import React from "react";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://cdn.hipwallpaper.com/i/8/96/E8NRUD.jpg' />
            </div>
            <div>
                <img className='avatar' src='https://i.pinimg.com/originals/7b/1c/f8/7b1cf857ec5861dae7d97541075b436f.jpg' />
            </div>
            <div>
                My Posts
                <div>New Post</div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;