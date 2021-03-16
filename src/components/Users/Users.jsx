import React from 'react'
import userAvatar from '../../assets/images/user.jpg'
import s from './Users.module.css'
import {NavLink} from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.usersOnPage)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div className={s.pagesNumbersWrapper}>
        {pages.map(p => <span key={p.id} className={props.activePage === p ? s.selectedPage : s.pageNumber}
                              onClick={() => {
                                props.setActivePage(p)
                              }}>{p}</span>)}
      </div>
      {props.users.map(i => <div key={i.id}>
        <div>
          <NavLink to={`/profile/${i.id}`}>
            <img className={s.userAvatar} src={i.photos.small ? i.photos.small : userAvatar}/>
          </NavLink>
          {i.followed
            ? <button disabled={props.isToggleFollow.some(id => id === i.id)}
                      className={s.unfollow} onClick={() => {props.followTC(i.id)}}>unfollow</button>
            : <button disabled={props.isToggleFollow.some(id => id === i.id)}
                      className={s.follow} onClick={() => {props.unfollowTC(i.id)}}>follow</button>}
        </div>
        <div>
          <span>{i.name}</span>
        </div>
      </div>)}
    </div>
  )
}


export default Users
