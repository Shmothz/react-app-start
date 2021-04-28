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
import {UserType} from "../../types/types";
import {ActiveStateType} from "../../redux/redux-store";

type PropsType = MapStatePropsType & MapDispatchPropsTypes & OwnPropsTypes
type MapStatePropsType = {
    activePage: number
    usersOnPage: number
    totalCount: number
    isFetching: boolean
    users: Array<UserType>
    isToggleFollow: number[]
    portionPages: number
}
type MapDispatchPropsTypes = {
    unfollowTC: (userId: number) => void
    followTC: (userId: number) => void
    setUsersTC: (activePage: number, usersOnPage: number) => void
    setActivePageTC: (page: number, usersOnPage: number) => void
}
type OwnPropsTypes = {
    titlePage: string
}

class UsersAPI extends React.Component<PropsType> {
    componentDidMount = () => {
        this.props.setUsersTC(this.props.activePage, this.props.usersOnPage)
    }
    setActivePage = (page: number) => {
        this.props.setActivePageTC(page, this.props.usersOnPage)
    }
    render = () => {
        return (
            <>
                <h2>{this.props.titlePage}</h2>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        activePage={this.props.activePage}
                        usersOnPage={this.props.usersOnPage}
                        totalCount={this.props.totalCount}
                        users={this.props.users}
                        isToggleFollow={this.props.isToggleFollow}
                        portionPages={this.props.portionPages}

                        unfollowTC={this.props.unfollowTC}
                        followTC={this.props.followTC}
                        setActivePageTC={this.props.setActivePageTC}
                    />
                }
            </>
        )
    }

}

const mapStateToProps = (state: ActiveStateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        totalCount: getTotalCount(state),
        usersOnPage: getUsersOnPage(state),
        activePage: getActivePage(state),
        isFetching: getIsFetching(state),
        isToggleFollow: getIsToggleFollow(state),
        portionPages: state.usersPage.portionPages
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsTypes, OwnPropsTypes, ActiveStateType>
    (mapStateToProps, {
        setActivePageTC, followTC, unfollowTC, setUsersTC
    }),
    RedirectComponent
)(UsersAPI)