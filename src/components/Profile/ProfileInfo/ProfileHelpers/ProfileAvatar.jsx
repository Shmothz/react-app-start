import s from "./ProfileAvatar.module.css";
import React, { useState } from "react";

const ProfileAvatar = ({ large, pushNewAvatarTC }) => {
  //const [editMode, setEditMode] = useState(false);

  const selectedNewPhoto = (e) => {
    if (e.target.files.length) {
      pushNewAvatarTC(e.target.files[0]);
    }
  };

  return (
    <div className={s.avatarWrapper}>
      <input
        className={s.setAvatarBtn}
        type={"file"}
        onChange={selectedNewPhoto}
      />
      <img className={s.avatar} src={large} alt="avatar" />
    </div>
  );
};
export default ProfileAvatar;
