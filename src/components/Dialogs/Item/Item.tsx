import React from 'react';
import {NavLink} from 'react-router-dom';

type PropsType = {
    id: number
    username: string
}

const Item:React.FC<PropsType> = ({id, username}) => {
    const path = `/dialogs/${id}`
    return (
        <div>
            <NavLink to={path}>
                {username}
            </NavLink>
        </div>
    )
}

export default Item;