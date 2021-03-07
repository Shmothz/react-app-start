import React from 'react'
import * as axios from 'axios';
import userAvatar from '../../assets/images/user.jpg'
import s from './Users.module.css'

class Users extends React.Component {
  componentDidMount = () => {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.usersOnPage}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.totalUsersCount(response.data.totalCount)
        })
  }
  // updateUsersPage = () => {
  //   let pagesCount = Math.ceil( this.props.totalCount / this.props.usersOnPage )
  //   let pages = []
  //     for( let i = 1; i <= pagesCount; i++) {
  //       pages.push(i)
  //   }
  // }
  setActivePage = (p) => {
    this.props.setPage(p)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPage}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }
  render = () => {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.usersOnPage)
    console.log(this.props)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div className={s.pagesNumbersWrapper}>
          {pages.map(p => <span className={this.props.activePage === p ? s.selectedPage : s.pageNumber}
                                onClick={() => {this.setActivePage(p)}}>{p}</span>)}
        </div>
        {this.props.users.map(i => <div key={i.id}>
          <div>
            <img className={s.userAvatar} src={i.photos.small ? i.photos.small : userAvatar}/>
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
