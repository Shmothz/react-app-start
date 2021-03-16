import React from 'react'
import Users from './Users'
import {connect} from 'react-redux';
import {
  totalUsersCount,
  followAC,
  setUsers,
  setPage,
  unfollowAC,
  toggleIsFetching,
  isFetchingFollowing, setUsersTC, setActivePageTC
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

class UsersAPI extends React.Component {
  componentDidMount = () => {
    this.props.setUsersTC(this.props.activePage, this.props.usersOnPage)
  }
  setActivePage = (p) => {
    this.props.setActivePageTC(p, this.props.usersOnPage)
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
            unfollowAC={this.props.unfollowAC}
            followAC={this.props.followAC}
            users={this.props.users}
            isFetching={this.props.isFetching}
            isToggleFollow={this.props.isToggleFollow}
            isFetchingFollowing={this.props.isFetchingFollowing}
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
  {
    followAC,
    unfollowAC,
    setUsers,
    setPage,
    totalUsersCount,
    toggleIsFetching,
    isFetchingFollowing,
    setUsersTC,
    setActivePageTC
  })(UsersAPI)