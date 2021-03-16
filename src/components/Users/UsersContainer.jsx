import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {
  totalUsersCount,
  toggleIsFetching, setUsersTC, setActivePageTC, followTC, unfollowTC
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'

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
            unfollowTC={this.props.unfollowTC}
            followTC={this.props.followTC}
            users={this.props.users}
            isFetching={this.props.isFetching}
            isToggleFollow={this.props.isToggleFollow}
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
    totalUsersCount,
    toggleIsFetching,
    setUsersTC,
    setActivePageTC,
    followTC,
    unfollowTC
  })(UsersAPI)