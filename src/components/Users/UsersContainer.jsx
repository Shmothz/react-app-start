import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {
  totalUsersCount,
  toggleIsFetching, setUsersTC, setActivePageTC, followTC, unfollowTC
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import RedirectComponent from '../../hoc/withAuth';
import {compose} from 'redux';
import {
  getActivePage, getIsAuth,
  getIsFetching,
  getIsToggleFollow,
  getTotalCount,
  getUsersOnPage,
  getUsersSelector
} from '../../helper/selectors';

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
    users: getUsersSelector(state),
    totalCount: getTotalCount(state),
    usersOnPage: getUsersOnPage(state),
    activePage: getActivePage(state),
    isFetching: getIsFetching(state),
    isToggleFollow: getIsToggleFollow(state),
    isAuth: getIsAuth(state)
  }
}

export default compose(
  connect(mapStateToProps, {totalUsersCount, toggleIsFetching, setUsersTC,
    setActivePageTC, followTC, unfollowTC}),
  RedirectComponent
)(UsersAPI)