import React from 'react'
import Users from './Users'
import {connect} from 'react-redux';
import {countAllUsersAC, followAC, getUsersAC, setPageAC, unfollowAC} from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        usersOnPage: state.usersPage.usersOnPage,
        activePage: state.usersPage.activePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (items) => {
            dispatch(getUsersAC(items))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        totalUsersCount: (users) => {
            dispatch(countAllUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)