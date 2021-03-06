import React from 'react'
import * as axios from 'axios';
import userAvatar from '../../assets/images/user.jpg'
import s from './Users.module.css'

class Users extends React.Component {
    componentDidMount = () => {
        if (this.props.items.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                    console.log(response)
                })
        }
    }
    co
    render = () => {
        return (
            <div>
                {this.props.items.map(i => <div key={i.id}>
                    <div>
                        <img className={s.userAvatar} src={i.photos.small ? i.photos.small : userAvatar} />
                        {i.followed
                            ? <button className={s.unfollow} onClick={() => this.props.unfollow(i.id)}>unfollow</button>
                            : <button className={s.follow} onClick={() => this.props.follow(i.id)}>follow</button>}
                    </div>
                    <div>
                        <span>{i.name}</span>
                    </div>
                </div>)}
            </div>
        )
    }

}

export default Users
