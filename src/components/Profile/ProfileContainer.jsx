import React from 'react'
import Profile from './Profile';
import axios from 'axios';
import {setProfile, toggleIsFetching} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
      .then(response => {
        this.props.setProfile(response.data)
        console.log(response)
      })
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

export default connect(mapStateToProps, {toggleIsFetching, setProfile})(withRouter(ProfileContainer))