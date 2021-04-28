import React, {FC} from 'react';
import s from './Settings.module.scss';

type PropsType = {}


const Settings:FC<PropsType> = (props) => {
    return (
        <div className={s.settingsWrapper}>
            <h2 className={s.settingsTitle}>Settings</h2>
        </div>
    )
}

export default Settings;