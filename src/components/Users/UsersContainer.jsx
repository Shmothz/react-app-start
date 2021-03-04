import React from 'react'
import Users from './Users'
import {connect} from 'react-redux';
import {followAC, getUsersAC, unfollowAC} from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        items: state.usersPage.items
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)