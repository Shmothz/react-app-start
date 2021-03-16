import React from 'react'
import Profile from './Profile';
import {getUserDataTC, toggleIsFetching} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    this.props.getUserDataTC(this.props.match.params.userId)
  }

  render = () => {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, {toggleIsFetching, getUserDataTC})(withRouter(ProfileContainer))