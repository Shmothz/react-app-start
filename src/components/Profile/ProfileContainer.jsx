import React from "react";
import Profile from "./Profile";
import {
  getProfileStatus,
  getUserDataTC,
  pushNewAvatarTC,
  pushProfileStatus,
  toggleIsFetching,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    const userId = this.props.match.params.userId;
    this.props.getUserDataTC(userId);
    this.props.getProfileStatus(userId);
  };

  render = () => {
    return <Profile {...this.props} profile={this.props.profile} />;
  };
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default connect(mapStateToProps, {
  toggleIsFetching,
  getUserDataTC,
  getProfileStatus,
  pushProfileStatus,
  pushNewAvatarTC,
})(withRouter(ProfileContainer));
