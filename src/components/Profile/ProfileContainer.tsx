import React from "react";
import Profile from "./Profile";
import {
    getProfileStatus,
    getUserDataTC,
    pushNewAvatarTC,
    pushProfileStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActiveStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import {compose} from "redux";

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    match?: any
}
type MapDispatchPropsType = {
    getUserDataTC: (userId: number) => void
    getProfileStatus: (userId: number) => void
    pushProfileStatus: (newStatusText: string) => void
    pushNewAvatarTC: (newAvatar: any) => void
}
type OwnPropsType = {}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount = () => {
        const userId = this.props.match.params.userId;
        this.props.getUserDataTC(userId);
        this.props.getProfileStatus(userId);
    };

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    };
}

const mapStateToProps = (state: ActiveStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, ActiveStateType>
    (mapStateToProps, {
        getUserDataTC, getProfileStatus, pushProfileStatus, pushNewAvatarTC
    }),
    withRouter)
(ProfileContainer);

