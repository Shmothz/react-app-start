import React from "react";
import s from "./ProfileAboutMe.module.css";

const ProfileAboutMe = ({ profile }) => {
  return (
    <div className={s.aboutMeWrapper}>
      <span>{profile.aboutMe}</span>
    </div>
  );
};

export default ProfileAboutMe;
