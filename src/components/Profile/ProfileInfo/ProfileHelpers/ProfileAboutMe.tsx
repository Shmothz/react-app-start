import React, {FC} from "react";
import s from "./ProfileAboutMe.module.css";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
}

const ProfileAboutMe: FC<PropsType> = ({ profile }) => {
  return (
    <div className={s.aboutMeWrapper}>
      <span>{profile.aboutMe}</span>
    </div>
  );
};

export default ProfileAboutMe;
