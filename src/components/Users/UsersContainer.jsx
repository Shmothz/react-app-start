import React from 'react'
import Users from './Users'
import {connect} from 'react-redux';
import {
  totalUsersCount,
  follow,
  setUsers,
  setPage,
  unfollow,
  toggleIsFetching,
  isToggleFollowing
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

class UsersAPI extends React.Component {
  componentDidMount = () => {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.activePage, this.props.usersOnPage)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.items)
        this.props.totalUsersCount(response.totalCount)
      })
  }
  setActivePage = (p) => {
    this.props.toggleIsFetching(true)
    this.props.setPage(p)
    usersAPI.getPage(p, this.props.usersOnPage)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.items)
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
            isToggleFollow={this.props.isToggleFollow}
            isToggleFollowing={this.props.isToggleFollowing}
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
    isFetching: state.usersPage.isFetching,
    isToggleFollow: state.usersPage.isToggleFollow
  }
}

export default connect(mapStateToProps,
  {follow, unfollow, setUsers, setPage, totalUsersCount, toggleIsFetching, isToggleFollowing})(UsersAPI)