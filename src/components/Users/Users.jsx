import React from 'react'
import * as axios from 'axios';
import userAvatar from '../../assets/images/user.jpg'
import s from './Users.module.css'

const Users = (props) => {

    const getUsers = () => {
        if (props.items.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                    console.log(response)
                })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
            {props.items.map(i => <div key={i.id}>
                <div>
                    <img className={s.userAvatar} src={i.photos.small ? i.photos.small : userAvatar} />
                    {i.followed
                        ? <button onClick={() => props.unfollow(i.id)}>unfollow</button>
                        : <button onClick={() => props.follow(i.id)}>follow</button>}
                </div>
                <div>
                    <span>{i.name}</span>
                </div>
            </div>)}
        </div>
    )
}

export default Users