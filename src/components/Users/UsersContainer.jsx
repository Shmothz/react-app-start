import React from 'react'
import Users from './Users'
import {connect} from 'react-redux';
import {totalUsersCount, follow, setUsers, setPage, unfollow, toggleIsFetching} from '../../redux/usersReducer';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount = () => {
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.usersOnPage}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.totalUsersCount(response.data.totalCount)
      })
  }
  setActivePage = (p) => {
    this.props.toggleIsFetching(true)
    this.props.setPage(p)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPage}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }
  render = () => {
    return (
      <>
        {this.props.isFetching === true
          ? <Preloader/>
          : <Users
            totalCount={this.props.totalCount}
            usersOnPage={this.props.usersOnPage}
            activePage={this.props.activePage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            isFetching={this.props.isFetching}
            setActivePage={this.setActivePage}
          />
        }
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    usersOnPage: state.usersPage.usersOnPage,
    activePage: state.usersPage.activePage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps,
  {follow, unfollow, setUsers, setPage, totalUsersCount, toggleIsFetching})(UsersAPI)