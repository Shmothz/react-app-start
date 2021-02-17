import React from 'react';
import {NavLink} from 'react-router-dom';

const Item = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div>
            <NavLink to={path}>
                {props.username}
            </NavLink>
        </div>
    )
}

export default Item;