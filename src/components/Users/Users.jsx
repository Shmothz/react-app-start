import React from 'react'
import userAvatar from '../../assets/images/user.jpg'
import s from './Users.module.css'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.usersOnPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div className={s.pagesNumbersWrapper}>
          {pages.map(p => <span className={props.activePage === p ? s.selectedPage : s.pageNumber}
                                onClick={() => {props.setActivePage(p)}}>{p}</span>)}
        </div>
        {props.users.map(i => <div key={i.id}>
          <div>
            <img className={s.userAvatar} src={i.photos.small ? i.photos.small : userAvatar}/>
            {i.followed
              ? <button className={s.unfollow} onClick={() => props.unfollow(i.id)}>unfollow</button>
              : <button className={s.follow} onClick={() => props.follow(i.id)}>follow</button>}
          </div>
          <div>
            <span>{i.name}</span>
          </div>
        </div>)}
      </div>
    )
  }


export default Users
